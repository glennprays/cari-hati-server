import { BadRequestException, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import {
    VirtualAccountRequestResponse,
    WebhookResponse,
} from 'src/common/xendit/xendit-client';
import { XenditService } from 'src/common/xendit/xendit.service';
import { UserService } from 'src/user/services/user.service';
import {
    SimulatePaymentDTO,
    TopupRequestDTO,
    WithdrawRequestDTO,
} from '../dtos/payment.dto';
import { PostgresService } from 'src/common/database/postgres/postgres.service';
import { Cron } from '@nestjs/schedule';
import { MailService } from 'src/common/mail/mail.service';
import { NotificationService } from 'src/notification/services/notification.service';

@Injectable()
export class CoinService {
    constructor(
        private xenditService: XenditService,
        private userService: UserService,
        private postgresService: PostgresService,
        private mailService: MailService,
        private notificationService: NotificationService,
    ) {}

    async topupCoin(
        { bankCode, coinPackageId }: TopupRequestDTO,
        userId: string,
    ) {
        const customer = await this.userService.findOneById(userId);
        if (!customer) {
            throw new BadRequestException('User not found');
        }
        const coinPackage = await this.postgresService.coinPackage.findUnique({
            where: {
                id: coinPackageId,
            },
        });
        if (!coinPackage) {
            throw new BadRequestException('Invalid coin package');
        }

        const topupType =
            await this.postgresService.coinTransactionType.findFirst({
                where: {
                    name: 'topup',
                },
            });

        const transactionFee =
            (coinPackage.price * topupType.feePercentage) / 100;
        const totalAmount = coinPackage.price + transactionFee;

        const referenceId = `tu-${Date.now()}-${randomUUID()}`;
        const expirationDate = new Date(
            new Date().getTime() + 2 * 60 * 60 * 1000,
        ).toISOString();

        const payment: VirtualAccountRequestResponse =
            await this.xenditService.createFixVirtualAccountPayment({
                external_id: referenceId,
                bank_code: bankCode,
                name: customer.name,
                expected_amount: totalAmount,
                expiration_date: expirationDate,
                is_single_use: true,
                is_closed: true,
            });
        if (!payment) {
            throw new BadRequestException('Failed to create payment');
        }
        return await this.postgresService.coinTransaction.create({
            data: {
                id: referenceId,
                userAccountId: userId,
                coinAmount: coinPackage.coinAmount,
                moneyAmount: coinPackage.price,
                transactionFee: transactionFee,
                status: 'waiting',
                bankCode: payment.bank_code,
                bankAccountNumber: payment.account_number,
                transactionTypeId: topupType.id,
                expiresAt: payment.expiration_date,
            },
        });
    }

    async withdrawCoin(userId: string, { coinAmount }: WithdrawRequestDTO) {
        try {
            const user = await this.userService.findOneById(userId);
            if (!user) {
                throw new BadRequestException('User not found');
            }
            if (user.coinAmount < coinAmount) {
                throw new BadRequestException('Insufficient coins');
            }
            const withdrawType =
                await this.postgresService.coinTransactionType.findFirst({
                    where: {
                        name: 'withdraw',
                    },
                });

            const convertCoinToMoney = coinAmount * 300;
            const transactionFee =
                (convertCoinToMoney * withdrawType.feePercentage) / 100;
            await this.userService.updateUserCoins(userId, -coinAmount);
            const targetPath = `/transactions/${userId}`;
            this.notificationService.sendNotificationToUser(
                userId,
                'transaction',
                {
                    notification: {
                        title: 'Withdraw Success',
                        body: `Your recent coin withdrawal of ${coinAmount} coin has been successfully processed`,
                    },
                    webpush: {
                        fcmOptions: {
                            link: targetPath,
                        },
                    },
                },
                targetPath,
            );
            return await this.postgresService.coinTransaction.create({
                data: {
                    id: `wd-${Date.now()}-${randomUUID()}`,
                    userAccountId: userId,
                    coinAmount: coinAmount,
                    moneyAmount: convertCoinToMoney,
                    transactionFee: transactionFee,
                    status: 'success',
                    transactionTypeId: withdrawType.id,
                },
            });
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async updateTransactionStatus(
        xCallbackToken: string,
        webhookId: string,
        response: WebhookResponse,
    ) {
        try {
            if (!xCallbackToken || !webhookId) {
                throw new BadRequestException('Invalid request');
            }
            if (xCallbackToken !== process.env.XENDIT_WEBHOOK_TOKEN) {
                throw new BadRequestException('Invalid callback token');
            }

            const transaction =
                await this.postgresService.coinTransaction.update({
                    where: {
                        id: response.external_id,
                    },
                    data: {
                        status: 'success',
                        webhookId: webhookId,
                        webhookCreated: response.created,
                        updatedAt: new Date(),
                    },
                    select: {
                        id: true,
                        user: {
                            select: {
                                id: true,
                                email: true,
                            },
                        },
                        moneyAmount: true,
                        transactionFee: true,
                        coinAmount: true,
                        bankAccountNumber: true,
                        bankCode: true,
                        updatedAt: true,
                    },
                });
            if (!transaction) {
                throw new BadRequestException('Transaction is not valid');
            }
            await this.userService.updateUserCoins(
                transaction.user.id,
                transaction.coinAmount,
            );
            this.mailService.sendTransactionSuccess(transaction.user.email, {
                price: transaction.moneyAmount,
                transactionFee: transaction.transactionFee,
                coinAmount: transaction.coinAmount,
                bank: transaction.bankCode,
                virtualAccountNumber: transaction.bankAccountNumber,
                date: transaction.updatedAt.toISOString(),
            });
            const targetPath = `/transactions/${transaction.id}`;
            this.notificationService.sendNotificationToUser(
                transaction.user.id,
                'transaction',
                {
                    notification: {
                        title: 'Topup Success',
                        body: `Your topup with amount ${transaction.coinAmount} coins has been success`,
                    },
                    webpush: {
                        fcmOptions: {
                            link: targetPath,
                        },
                    },
                },
                targetPath,
            );
            return transaction;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error.message);
        }
    }

    @Cron('* * * * *')
    async updateExpiredTransactions() {
        const expiredTransactions =
            await this.postgresService.coinTransaction.findMany({
                where: {
                    status: 'waiting',
                    expiresAt: {
                        lte: new Date(),
                    },
                },
            });
        await this.postgresService.coinTransaction.updateMany({
            where: {
                id: {
                    in: expiredTransactions.map(
                        (transaction) => transaction.id,
                    ),
                },
            },
            data: {
                status: 'failed',
            },
        });
        console.log(
            'Cron job: Update expired transaction:',
            expiredTransactions.length,
        );
    }

    async simulateTransaction(
        { bankCode, moneyAmount, bankAccountNumber }: SimulatePaymentDTO,
        userId: string,
    ) {
        try {
            const transaction =
                await this.postgresService.coinTransaction.findUnique({
                    where: {
                        userAccountId: userId,
                        bankCode: bankCode,
                        bankAccountNumber: bankAccountNumber,
                    },
                });
            const totalAmount =
                transaction.moneyAmount + transaction.transactionFee;
            if (!transaction) {
                throw new BadRequestException('Invalid transaction');
            } else if (transaction.status !== 'waiting') {
                throw new BadRequestException('Invalid transaction invalid');
            } else if (totalAmount !== moneyAmount) {
                throw new BadRequestException('Money amount is not matched');
            }

            return await this.xenditService.simulateFixVirtualAccountPayment(
                transaction.id,
                moneyAmount,
            );
        } catch (error) {
            throw new BadRequestException(
                'Failed to simulate transaction:',
                error.message,
            );
        }
    }

    async getCoinPackages() {
        try {
            const packages = await this.postgresService.coinPackage.findMany({
                orderBy: {
                    coinAmount: 'asc',
                },
            });
            return packages;
        } catch (error) {}
    }
}
