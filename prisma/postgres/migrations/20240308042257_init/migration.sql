-- CreateEnum
CREATE TYPE "coin_transaction_status_enum" AS ENUM ('waiting', 'success', 'failed');

-- CreateEnum
CREATE TYPE "person_role_enum" AS ENUM ('admin', 'user');

-- CreateTable
CREATE TABLE "coin_transaction" (
    "transaction_id" UUID NOT NULL,
    "user_account_id" UUID NOT NULL,
    "coinAmount" BIGINT NOT NULL,
    "money_amount" INTEGER NOT NULL,
    "transaction_fee" INTEGER NOT NULL,
    "status" "coin_transaction_status_enum" NOT NULL DEFAULT 'waiting',
    "bank_account_number" BIGINT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transaction_type_id" INTEGER NOT NULL,

    CONSTRAINT "PK_d0d1b4baa1f1b56f36fd3b2ee58" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "coin_transaction_type" (
    "transaction_type_id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "fee_percentage" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_61a406073b311170189d25736bb" PRIMARY KEY ("transaction_type_id")
);

-- CreateTable
CREATE TABLE "gift_item" (
    "gift_item_id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "coin_amount" BIGINT NOT NULL,
    "image_path" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_a3b4eab5e05d492765890d29064" PRIMARY KEY ("gift_item_id")
);

-- CreateTable
CREATE TABLE "gift_transaction" (
    "gift_transaction_id" UUID NOT NULL,
    "sender_account_id" UUID NOT NULL,
    "receiver_account_id" UUID NOT NULL,
    "coin_amount" BIGINT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gift_item_id" UUID NOT NULL,

    CONSTRAINT "PK_e6c3ccf00cb4185681ab6e83ee3" PRIMARY KEY ("gift_transaction_id")
);

-- CreateTable
CREATE TABLE "person" (
    "person_id" UUID NOT NULL,
    "email" VARCHAR NOT NULL,
    "role" "person_role_enum" NOT NULL DEFAULT 'user',
    "password" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activated_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_84a53bea0e639207a7702250a4d" PRIMARY KEY ("person_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UQ_7e1cd3574a559cb6fac13196dab" ON "coin_transaction_type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_d2d717efd90709ebd3cb26b936c" ON "person"("email");

-- AddForeignKey
ALTER TABLE "coin_transaction" ADD CONSTRAINT "FK_d30f9e6ed44d145c755774e285d" FOREIGN KEY ("transaction_type_id") REFERENCES "coin_transaction_type"("transaction_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "coin_transaction" ADD CONSTRAINT "coin_transaction_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "person"("person_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "gift_transaction" ADD CONSTRAINT "FK_6fb26f046492292cbafe3157c55" FOREIGN KEY ("gift_item_id") REFERENCES "gift_item"("gift_item_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "gift_transaction" ADD CONSTRAINT "gift_transaction_sender_account_id_fkey" FOREIGN KEY ("sender_account_id") REFERENCES "person"("person_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "gift_transaction" ADD CONSTRAINT "gift_transaction_receiver_account_id_fkey" FOREIGN KEY ("receiver_account_id") REFERENCES "person"("person_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
