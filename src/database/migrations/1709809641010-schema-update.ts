import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1709809641010 implements MigrationInterface {
    name = 'SchemaUpdate1709809641010'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("personId" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "role" "public"."person_role_enum" NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "activatedAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_d2d717efd90709ebd3cb26b936c" UNIQUE ("email"), CONSTRAINT "PK_84a53bea0e639207a7702250a4d" PRIMARY KEY ("personId"))`);
        await queryRunner.query(`CREATE TABLE "gift_item" ("giftItemId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "coinAmount" bigint NOT NULL, "imagePath" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3b4eab5e05d492765890d29064" PRIMARY KEY ("giftItemId"))`);
        await queryRunner.query(`CREATE TABLE "gift_transaction" ("giftTransactionId" uuid NOT NULL DEFAULT uuid_generate_v4(), "senderAccountId" character varying NOT NULL, "receiverAccountId" character varying NOT NULL, "coinAmount" bigint NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "giftItemGiftItemId" uuid, CONSTRAINT "PK_e6c3ccf00cb4185681ab6e83ee3" PRIMARY KEY ("giftTransactionId"))`);
        await queryRunner.query(`CREATE TABLE "coin_transaction_type" ("transactionTypeId" SERIAL NOT NULL, "name" character varying NOT NULL, "feePercentage" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_7e1cd3574a559cb6fac13196dab" UNIQUE ("name"), CONSTRAINT "PK_61a406073b311170189d25736bb" PRIMARY KEY ("transactionTypeId"))`);
        await queryRunner.query(`CREATE TABLE "coin_transaction" ("transactionId" uuid NOT NULL DEFAULT uuid_generate_v4(), "userAccountId" character varying NOT NULL, "coinAmount" bigint NOT NULL, "moneyAmount" integer NOT NULL, "transactionFee" integer NOT NULL, "status" "public"."coin_transaction_status_enum" NOT NULL DEFAULT 'WAITING', "bankAccountNumber" bigint NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "transactionTypeTransactionTypeId" integer, CONSTRAINT "PK_d0d1b4baa1f1b56f36fd3b2ee58" PRIMARY KEY ("transactionId"))`);
        await queryRunner.query(`ALTER TABLE "gift_transaction" ADD CONSTRAINT "FK_6fb26f046492292cbafe3157c55" FOREIGN KEY ("giftItemGiftItemId") REFERENCES "gift_item"("giftItemId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "coin_transaction" ADD CONSTRAINT "FK_d30f9e6ed44d145c755774e285d" FOREIGN KEY ("transactionTypeTransactionTypeId") REFERENCES "coin_transaction_type"("transactionTypeId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coin_transaction" DROP CONSTRAINT "FK_d30f9e6ed44d145c755774e285d"`);
        await queryRunner.query(`ALTER TABLE "gift_transaction" DROP CONSTRAINT "FK_6fb26f046492292cbafe3157c55"`);
        await queryRunner.query(`DROP TABLE "coin_transaction"`);
        await queryRunner.query(`DROP TABLE "coin_transaction_type"`);
        await queryRunner.query(`DROP TABLE "gift_transaction"`);
        await queryRunner.query(`DROP TABLE "gift_item"`);
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
