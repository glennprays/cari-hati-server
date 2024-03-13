
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CoinTransactionScalarFieldEnum = {
  id: 'id',
  userAccountId: 'userAccountId',
  coinAmount: 'coinAmount',
  moneyAmount: 'moneyAmount',
  transactionFee: 'transactionFee',
  status: 'status',
  bankAccountNumber: 'bankAccountNumber',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  transactionTypeId: 'transactionTypeId'
};

exports.Prisma.CoinTransactionTypeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  feePercentage: 'feePercentage',
  createdAt: 'createdAt'
};

exports.Prisma.GiftItemScalarFieldEnum = {
  id: 'id',
  name: 'name',
  coinAmount: 'coinAmount',
  imagePath: 'imagePath',
  createdAt: 'createdAt'
};

exports.Prisma.GiftTransactionScalarFieldEnum = {
  id: 'id',
  senderAccountId: 'senderAccountId',
  receiverAccountId: 'receiverAccountId',
  coinAmount: 'coinAmount',
  createdAt: 'createdAt',
  giftItemId: 'giftItemId'
};

exports.Prisma.PersonScalarFieldEnum = {
  id: 'id',
  email: 'email',
  role: 'role',
  password: 'password',
  createdAt: 'createdAt',
  activatedAt: 'activatedAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.CoinTransactionStatus = exports.$Enums.CoinTransactionStatus = {
  waiting: 'waiting',
  success: 'success',
  failed: 'failed'
};

exports.PersonRole = exports.$Enums.PersonRole = {
  admin: 'admin',
  user: 'user'
};

exports.Prisma.ModelName = {
  CoinTransaction: 'CoinTransaction',
  CoinTransactionType: 'CoinTransactionType',
  GiftItem: 'GiftItem',
  GiftTransaction: 'GiftTransaction',
  Person: 'Person'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/glenn/campus/rpll/cari-hati-server/prisma/postgres/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.10.2",
  "engineVersion": "5a9203d0590c951969e85a7d07215503f4672eb9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "PG_DB_URI",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n    provider = \"prisma-client-js\"\n    output = \"./generated/client\"\n}\n\ndatasource db {\n    provider = \"postgresql\"\n    url      = env(\"PG_DB_URI\")\n}\n\nmodel CoinTransaction {\n    id                  String                @id(map: \"PK_d0d1b4baa1f1b56f36fd3b2ee58\") @default(uuid()) @map(\"transaction_id\") @db.Uuid\n    userAccountId       String                @map(\"user_account_id\") @db.Uuid\n    coinAmount          BigInt\n    moneyAmount         Int                   @map(\"money_amount\")\n    transactionFee      Int                   @map(\"transaction_fee\")\n    status              CoinTransactionStatus @default(waiting)\n    bankAccountNumber   BigInt                @map(\"bank_account_number\")\n    createdAt           DateTime              @default(now()) @map(\"created_at\") @db.Timestamp(6)\n    updatedAt           DateTime              @default(now()) @map(\"updated_at\") @db.Timestamp(6)\n    transactionTypeId   Int                   @map(\"transaction_type_id\")\n    coinTransactionType CoinTransactionType?  @relation(\"CoinTransaction\", fields: [transactionTypeId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"FK_d30f9e6ed44d145c755774e285d\")\n    user                Person                @relation(\"UserCoinTransaction\", fields: [userAccountId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n\n    @@map(\"coin_transaction\")\n}\n\nmodel CoinTransactionType {\n    id               Int               @id(map: \"PK_61a406073b311170189d25736bb\") @default(autoincrement()) @map(\"transaction_type_id\")\n    name             String            @unique(map: \"UQ_7e1cd3574a559cb6fac13196dab\") @db.VarChar\n    feePercentage    Int               @map(\"fee_percentage\")\n    createdAt        DateTime          @default(now()) @map(\"created_at\") @db.Timestamp(6)\n    coinTransactions CoinTransaction[] @relation(\"CoinTransaction\")\n\n    @@map(\"coin_transaction_type\")\n}\n\nmodel GiftItem {\n    id               String            @id(map: \"PK_a3b4eab5e05d492765890d29064\") @default(uuid()) @map(\"gift_item_id\") @db.Uuid\n    name             String            @db.VarChar\n    coinAmount       BigInt            @map(\"coin_amount\")\n    imagePath        String            @map(\"image_path\") @db.VarChar\n    createdAt        DateTime          @default(now()) @map(\"created_at\") @db.Timestamp(6)\n    giftTransactions GiftTransaction[] @relation(\"GiftTransaction\")\n\n    @@map(\"gift_item\")\n}\n\nmodel GiftTransaction {\n    id                String   @id(map: \"PK_e6c3ccf00cb4185681ab6e83ee3\") @default(uuid()) @map(\"gift_transaction_id\") @db.Uuid\n    senderAccountId   String   @map(\"sender_account_id\") @db.Uuid\n    receiverAccountId String   @map(\"receiver_account_id\") @db.Uuid\n    coinAmount        BigInt   @map(\"coin_amount\")\n    createdAt         DateTime @default(now()) @map(\"created_at\") @db.Timestamp(6)\n    giftItemId        String   @map(\"gift_item_id\") @db.Uuid\n    giftItem          GiftItem @relation(\"GiftTransaction\", fields: [giftItemId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"FK_6fb26f046492292cbafe3157c55\")\n    sender            Person   @relation(\"GiftSender\", fields: [senderAccountId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n    receiver          Person   @relation(\"GiftReceiver\", fields: [receiverAccountId], references: [id], onDelete: NoAction, onUpdate: NoAction)\n\n    @@map(\"gift_transaction\")\n}\n\nmodel Person {\n    id                      String            @id(map: \"PK_84a53bea0e639207a7702250a4d\") @default(uuid()) @map(\"person_id\") @db.Uuid\n    email                   String            @unique(map: \"UQ_d2d717efd90709ebd3cb26b936c\") @db.VarChar\n    role                    PersonRole        @default(user)\n    password                String            @db.VarChar\n    createdAt               DateTime          @default(now()) @map(\"created_at\") @db.Timestamp(6)\n    activatedAt             DateTime          @map(\"activated_at\") @db.Timestamp(6)\n    updatedAt               DateTime          @default(now()) @map(\"updated_at\") @db.Timestamp(6)\n    coinTransactions        CoinTransaction[] @relation(\"UserCoinTransaction\")\n    giftTransactionsSender  GiftTransaction[] @relation(\"GiftSender\")\n    giftTransactionReceiver GiftTransaction[] @relation(\"GiftReceiver\")\n\n    @@map(\"person\")\n}\n\nenum CoinTransactionStatus {\n    waiting\n    success\n    failed\n\n    @@map(\"coin_transaction_status_enum\")\n}\n\nenum PersonRole {\n    admin\n    user\n\n    @@map(\"person_role_enum\")\n}\n",
  "inlineSchemaHash": "9eaa1e35a4c04f1523f26cd147d37926a4c3d00b87e2cb5774f503f145891ebd",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"CoinTransaction\":{\"dbName\":\"coin_transaction\",\"fields\":[{\"name\":\"id\",\"dbName\":\"transaction_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAccountId\",\"dbName\":\"user_account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coinAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moneyAmount\",\"dbName\":\"money_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionFee\",\"dbName\":\"transaction_fee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CoinTransactionStatus\",\"default\":\"waiting\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bankAccountNumber\",\"dbName\":\"bank_account_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionTypeId\",\"dbName\":\"transaction_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coinTransactionType\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CoinTransactionType\",\"relationName\":\"CoinTransaction\",\"relationFromFields\":[\"transactionTypeId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Person\",\"relationName\":\"UserCoinTransaction\",\"relationFromFields\":[\"userAccountId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CoinTransactionType\":{\"dbName\":\"coin_transaction_type\",\"fields\":[{\"name\":\"id\",\"dbName\":\"transaction_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feePercentage\",\"dbName\":\"fee_percentage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coinTransactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CoinTransaction\",\"relationName\":\"CoinTransaction\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GiftItem\":{\"dbName\":\"gift_item\",\"fields\":[{\"name\":\"id\",\"dbName\":\"gift_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coinAmount\",\"dbName\":\"coin_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imagePath\",\"dbName\":\"image_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"giftTransactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GiftTransaction\",\"relationName\":\"GiftTransaction\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GiftTransaction\":{\"dbName\":\"gift_transaction\",\"fields\":[{\"name\":\"id\",\"dbName\":\"gift_transaction_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senderAccountId\",\"dbName\":\"sender_account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiverAccountId\",\"dbName\":\"receiver_account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coinAmount\",\"dbName\":\"coin_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"giftItemId\",\"dbName\":\"gift_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"giftItem\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GiftItem\",\"relationName\":\"GiftTransaction\",\"relationFromFields\":[\"giftItemId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sender\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Person\",\"relationName\":\"GiftSender\",\"relationFromFields\":[\"senderAccountId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiver\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Person\",\"relationName\":\"GiftReceiver\",\"relationFromFields\":[\"receiverAccountId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Person\":{\"dbName\":\"person\",\"fields\":[{\"name\":\"id\",\"dbName\":\"person_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PersonRole\",\"default\":\"user\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activatedAt\",\"dbName\":\"activated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coinTransactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CoinTransaction\",\"relationName\":\"UserCoinTransaction\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"giftTransactionsSender\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GiftTransaction\",\"relationName\":\"GiftSender\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"giftTransactionReceiver\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GiftTransaction\",\"relationName\":\"GiftReceiver\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"CoinTransactionStatus\":{\"values\":[{\"name\":\"waiting\",\"dbName\":null},{\"name\":\"success\",\"dbName\":null},{\"name\":\"failed\",\"dbName\":null}],\"dbName\":\"coin_transaction_status_enum\"},\"PersonRole\":{\"values\":[{\"name\":\"admin\",\"dbName\":null},{\"name\":\"user\",\"dbName\":null}],\"dbName\":\"person_role_enum\"}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    PG_DB_URI: typeof globalThis !== 'undefined' && globalThis['PG_DB_URI'] || typeof process !== 'undefined' && process.env && process.env.PG_DB_URI || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

