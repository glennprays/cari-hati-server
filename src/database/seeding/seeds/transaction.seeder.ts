import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { CoinTransactionType } from './../../../coin/entities/coins.entity';

export default class TransactionSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<void> {
        const repository = dataSource.getRepository(CoinTransactionType);
        await repository.insert([{
            name: 'top up',
            feePercentage: 0,
        },
        {
            name: 'withdraw',
            feePercentage: 0.02,
        }]);
    }
}
