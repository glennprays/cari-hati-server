
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CoinTransaction
 * 
 */
export type CoinTransaction = $Result.DefaultSelection<Prisma.$CoinTransactionPayload>
/**
 * Model CoinTransactionType
 * 
 */
export type CoinTransactionType = $Result.DefaultSelection<Prisma.$CoinTransactionTypePayload>
/**
 * Model GiftItem
 * 
 */
export type GiftItem = $Result.DefaultSelection<Prisma.$GiftItemPayload>
/**
 * Model GiftTransaction
 * 
 */
export type GiftTransaction = $Result.DefaultSelection<Prisma.$GiftTransactionPayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CoinTransactionStatus: {
  waiting: 'waiting',
  success: 'success',
  failed: 'failed'
};

export type CoinTransactionStatus = (typeof CoinTransactionStatus)[keyof typeof CoinTransactionStatus]


export const PersonRole: {
  admin: 'admin',
  user: 'user'
};

export type PersonRole = (typeof PersonRole)[keyof typeof PersonRole]

}

export type CoinTransactionStatus = $Enums.CoinTransactionStatus

export const CoinTransactionStatus: typeof $Enums.CoinTransactionStatus

export type PersonRole = $Enums.PersonRole

export const PersonRole: typeof $Enums.PersonRole

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CoinTransactions
 * const coinTransactions = await prisma.coinTransaction.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CoinTransactions
   * const coinTransactions = await prisma.coinTransaction.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.coinTransaction`: Exposes CRUD operations for the **CoinTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoinTransactions
    * const coinTransactions = await prisma.coinTransaction.findMany()
    * ```
    */
  get coinTransaction(): Prisma.CoinTransactionDelegate<ExtArgs>;

  /**
   * `prisma.coinTransactionType`: Exposes CRUD operations for the **CoinTransactionType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoinTransactionTypes
    * const coinTransactionTypes = await prisma.coinTransactionType.findMany()
    * ```
    */
  get coinTransactionType(): Prisma.CoinTransactionTypeDelegate<ExtArgs>;

  /**
   * `prisma.giftItem`: Exposes CRUD operations for the **GiftItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GiftItems
    * const giftItems = await prisma.giftItem.findMany()
    * ```
    */
  get giftItem(): Prisma.GiftItemDelegate<ExtArgs>;

  /**
   * `prisma.giftTransaction`: Exposes CRUD operations for the **GiftTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GiftTransactions
    * const giftTransactions = await prisma.giftTransaction.findMany()
    * ```
    */
  get giftTransaction(): Prisma.GiftTransactionDelegate<ExtArgs>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CoinTransaction: 'CoinTransaction',
    CoinTransactionType: 'CoinTransactionType',
    GiftItem: 'GiftItem',
    GiftTransaction: 'GiftTransaction',
    Person: 'Person'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'coinTransaction' | 'coinTransactionType' | 'giftItem' | 'giftTransaction' | 'person'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      CoinTransaction: {
        payload: Prisma.$CoinTransactionPayload<ExtArgs>
        fields: Prisma.CoinTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoinTransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoinTransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>
          }
          findFirst: {
            args: Prisma.CoinTransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoinTransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>
          }
          findMany: {
            args: Prisma.CoinTransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>[]
          }
          create: {
            args: Prisma.CoinTransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>
          }
          createMany: {
            args: Prisma.CoinTransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CoinTransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>
          }
          update: {
            args: Prisma.CoinTransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CoinTransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CoinTransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CoinTransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>
          }
          aggregate: {
            args: Prisma.CoinTransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCoinTransaction>
          }
          groupBy: {
            args: Prisma.CoinTransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CoinTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoinTransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<CoinTransactionCountAggregateOutputType> | number
          }
        }
      }
      CoinTransactionType: {
        payload: Prisma.$CoinTransactionTypePayload<ExtArgs>
        fields: Prisma.CoinTransactionTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoinTransactionTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoinTransactionTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionTypePayload>
          }
          findFirst: {
            args: Prisma.CoinTransactionTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoinTransactionTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionTypePayload>
          }
          findMany: {
            args: Prisma.CoinTransactionTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionTypePayload>[]
          }
          create: {
            args: Prisma.CoinTransactionTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionTypePayload>
          }
          createMany: {
            args: Prisma.CoinTransactionTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CoinTransactionTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionTypePayload>
          }
          update: {
            args: Prisma.CoinTransactionTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionTypePayload>
          }
          deleteMany: {
            args: Prisma.CoinTransactionTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CoinTransactionTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CoinTransactionTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionTypePayload>
          }
          aggregate: {
            args: Prisma.CoinTransactionTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCoinTransactionType>
          }
          groupBy: {
            args: Prisma.CoinTransactionTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CoinTransactionTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoinTransactionTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<CoinTransactionTypeCountAggregateOutputType> | number
          }
        }
      }
      GiftItem: {
        payload: Prisma.$GiftItemPayload<ExtArgs>
        fields: Prisma.GiftItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GiftItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GiftItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftItemPayload>
          }
          findFirst: {
            args: Prisma.GiftItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GiftItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftItemPayload>
          }
          findMany: {
            args: Prisma.GiftItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftItemPayload>[]
          }
          create: {
            args: Prisma.GiftItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftItemPayload>
          }
          createMany: {
            args: Prisma.GiftItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GiftItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftItemPayload>
          }
          update: {
            args: Prisma.GiftItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftItemPayload>
          }
          deleteMany: {
            args: Prisma.GiftItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GiftItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GiftItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftItemPayload>
          }
          aggregate: {
            args: Prisma.GiftItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGiftItem>
          }
          groupBy: {
            args: Prisma.GiftItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GiftItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.GiftItemCountArgs<ExtArgs>,
            result: $Utils.Optional<GiftItemCountAggregateOutputType> | number
          }
        }
      }
      GiftTransaction: {
        payload: Prisma.$GiftTransactionPayload<ExtArgs>
        fields: Prisma.GiftTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GiftTransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GiftTransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftTransactionPayload>
          }
          findFirst: {
            args: Prisma.GiftTransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GiftTransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftTransactionPayload>
          }
          findMany: {
            args: Prisma.GiftTransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftTransactionPayload>[]
          }
          create: {
            args: Prisma.GiftTransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftTransactionPayload>
          }
          createMany: {
            args: Prisma.GiftTransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GiftTransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftTransactionPayload>
          }
          update: {
            args: Prisma.GiftTransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftTransactionPayload>
          }
          deleteMany: {
            args: Prisma.GiftTransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GiftTransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GiftTransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GiftTransactionPayload>
          }
          aggregate: {
            args: Prisma.GiftTransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGiftTransaction>
          }
          groupBy: {
            args: Prisma.GiftTransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GiftTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GiftTransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<GiftTransactionCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>,
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CoinTransactionTypeCountOutputType
   */

  export type CoinTransactionTypeCountOutputType = {
    coinTransactions: number
  }

  export type CoinTransactionTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coinTransactions?: boolean | CoinTransactionTypeCountOutputTypeCountCoinTransactionsArgs
  }

  // Custom InputTypes

  /**
   * CoinTransactionTypeCountOutputType without action
   */
  export type CoinTransactionTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransactionTypeCountOutputType
     */
    select?: CoinTransactionTypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CoinTransactionTypeCountOutputType without action
   */
  export type CoinTransactionTypeCountOutputTypeCountCoinTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinTransactionWhereInput
  }



  /**
   * Count Type GiftItemCountOutputType
   */

  export type GiftItemCountOutputType = {
    giftTransactions: number
  }

  export type GiftItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    giftTransactions?: boolean | GiftItemCountOutputTypeCountGiftTransactionsArgs
  }

  // Custom InputTypes

  /**
   * GiftItemCountOutputType without action
   */
  export type GiftItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftItemCountOutputType
     */
    select?: GiftItemCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GiftItemCountOutputType without action
   */
  export type GiftItemCountOutputTypeCountGiftTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftTransactionWhereInput
  }



  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    coinTransactions: number
    giftTransactionsSender: number
    giftTransactionReceiver: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coinTransactions?: boolean | PersonCountOutputTypeCountCoinTransactionsArgs
    giftTransactionsSender?: boolean | PersonCountOutputTypeCountGiftTransactionsSenderArgs
    giftTransactionReceiver?: boolean | PersonCountOutputTypeCountGiftTransactionReceiverArgs
  }

  // Custom InputTypes

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountCoinTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinTransactionWhereInput
  }


  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountGiftTransactionsSenderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftTransactionWhereInput
  }


  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountGiftTransactionReceiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftTransactionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model CoinTransaction
   */

  export type AggregateCoinTransaction = {
    _count: CoinTransactionCountAggregateOutputType | null
    _avg: CoinTransactionAvgAggregateOutputType | null
    _sum: CoinTransactionSumAggregateOutputType | null
    _min: CoinTransactionMinAggregateOutputType | null
    _max: CoinTransactionMaxAggregateOutputType | null
  }

  export type CoinTransactionAvgAggregateOutputType = {
    coinAmount: number | null
    moneyAmount: number | null
    transactionFee: number | null
    bankAccountNumber: number | null
    transactionTypeId: number | null
  }

  export type CoinTransactionSumAggregateOutputType = {
    coinAmount: bigint | null
    moneyAmount: number | null
    transactionFee: number | null
    bankAccountNumber: bigint | null
    transactionTypeId: number | null
  }

  export type CoinTransactionMinAggregateOutputType = {
    id: string | null
    userAccountId: string | null
    coinAmount: bigint | null
    moneyAmount: number | null
    transactionFee: number | null
    status: $Enums.CoinTransactionStatus | null
    bankAccountNumber: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    transactionTypeId: number | null
  }

  export type CoinTransactionMaxAggregateOutputType = {
    id: string | null
    userAccountId: string | null
    coinAmount: bigint | null
    moneyAmount: number | null
    transactionFee: number | null
    status: $Enums.CoinTransactionStatus | null
    bankAccountNumber: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    transactionTypeId: number | null
  }

  export type CoinTransactionCountAggregateOutputType = {
    id: number
    userAccountId: number
    coinAmount: number
    moneyAmount: number
    transactionFee: number
    status: number
    bankAccountNumber: number
    createdAt: number
    updatedAt: number
    transactionTypeId: number
    _all: number
  }


  export type CoinTransactionAvgAggregateInputType = {
    coinAmount?: true
    moneyAmount?: true
    transactionFee?: true
    bankAccountNumber?: true
    transactionTypeId?: true
  }

  export type CoinTransactionSumAggregateInputType = {
    coinAmount?: true
    moneyAmount?: true
    transactionFee?: true
    bankAccountNumber?: true
    transactionTypeId?: true
  }

  export type CoinTransactionMinAggregateInputType = {
    id?: true
    userAccountId?: true
    coinAmount?: true
    moneyAmount?: true
    transactionFee?: true
    status?: true
    bankAccountNumber?: true
    createdAt?: true
    updatedAt?: true
    transactionTypeId?: true
  }

  export type CoinTransactionMaxAggregateInputType = {
    id?: true
    userAccountId?: true
    coinAmount?: true
    moneyAmount?: true
    transactionFee?: true
    status?: true
    bankAccountNumber?: true
    createdAt?: true
    updatedAt?: true
    transactionTypeId?: true
  }

  export type CoinTransactionCountAggregateInputType = {
    id?: true
    userAccountId?: true
    coinAmount?: true
    moneyAmount?: true
    transactionFee?: true
    status?: true
    bankAccountNumber?: true
    createdAt?: true
    updatedAt?: true
    transactionTypeId?: true
    _all?: true
  }

  export type CoinTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinTransaction to aggregate.
     */
    where?: CoinTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinTransactions to fetch.
     */
    orderBy?: CoinTransactionOrderByWithRelationInput | CoinTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoinTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoinTransactions
    **/
    _count?: true | CoinTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoinTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoinTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoinTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoinTransactionMaxAggregateInputType
  }

  export type GetCoinTransactionAggregateType<T extends CoinTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCoinTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoinTransaction[P]>
      : GetScalarType<T[P], AggregateCoinTransaction[P]>
  }




  export type CoinTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinTransactionWhereInput
    orderBy?: CoinTransactionOrderByWithAggregationInput | CoinTransactionOrderByWithAggregationInput[]
    by: CoinTransactionScalarFieldEnum[] | CoinTransactionScalarFieldEnum
    having?: CoinTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoinTransactionCountAggregateInputType | true
    _avg?: CoinTransactionAvgAggregateInputType
    _sum?: CoinTransactionSumAggregateInputType
    _min?: CoinTransactionMinAggregateInputType
    _max?: CoinTransactionMaxAggregateInputType
  }

  export type CoinTransactionGroupByOutputType = {
    id: string
    userAccountId: string
    coinAmount: bigint
    moneyAmount: number
    transactionFee: number
    status: $Enums.CoinTransactionStatus
    bankAccountNumber: bigint
    createdAt: Date
    updatedAt: Date
    transactionTypeId: number
    _count: CoinTransactionCountAggregateOutputType | null
    _avg: CoinTransactionAvgAggregateOutputType | null
    _sum: CoinTransactionSumAggregateOutputType | null
    _min: CoinTransactionMinAggregateOutputType | null
    _max: CoinTransactionMaxAggregateOutputType | null
  }

  type GetCoinTransactionGroupByPayload<T extends CoinTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoinTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoinTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoinTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CoinTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CoinTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAccountId?: boolean
    coinAmount?: boolean
    moneyAmount?: boolean
    transactionFee?: boolean
    status?: boolean
    bankAccountNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactionTypeId?: boolean
    coinTransactionType?: boolean | CoinTransaction$coinTransactionTypeArgs<ExtArgs>
    user?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coinTransaction"]>

  export type CoinTransactionSelectScalar = {
    id?: boolean
    userAccountId?: boolean
    coinAmount?: boolean
    moneyAmount?: boolean
    transactionFee?: boolean
    status?: boolean
    bankAccountNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactionTypeId?: boolean
  }

  export type CoinTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coinTransactionType?: boolean | CoinTransaction$coinTransactionTypeArgs<ExtArgs>
    user?: boolean | PersonDefaultArgs<ExtArgs>
  }


  export type $CoinTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoinTransaction"
    objects: {
      coinTransactionType: Prisma.$CoinTransactionTypePayload<ExtArgs> | null
      user: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userAccountId: string
      coinAmount: bigint
      moneyAmount: number
      transactionFee: number
      status: $Enums.CoinTransactionStatus
      bankAccountNumber: bigint
      createdAt: Date
      updatedAt: Date
      transactionTypeId: number
    }, ExtArgs["result"]["coinTransaction"]>
    composites: {}
  }


  type CoinTransactionGetPayload<S extends boolean | null | undefined | CoinTransactionDefaultArgs> = $Result.GetResult<Prisma.$CoinTransactionPayload, S>

  type CoinTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CoinTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CoinTransactionCountAggregateInputType | true
    }

  export interface CoinTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoinTransaction'], meta: { name: 'CoinTransaction' } }
    /**
     * Find zero or one CoinTransaction that matches the filter.
     * @param {CoinTransactionFindUniqueArgs} args - Arguments to find a CoinTransaction
     * @example
     * // Get one CoinTransaction
     * const coinTransaction = await prisma.coinTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CoinTransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CoinTransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CoinTransaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CoinTransactionFindUniqueOrThrowArgs} args - Arguments to find a CoinTransaction
     * @example
     * // Get one CoinTransaction
     * const coinTransaction = await prisma.coinTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CoinTransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CoinTransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CoinTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionFindFirstArgs} args - Arguments to find a CoinTransaction
     * @example
     * // Get one CoinTransaction
     * const coinTransaction = await prisma.coinTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CoinTransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CoinTransactionFindFirstArgs<ExtArgs>>
    ): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CoinTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionFindFirstOrThrowArgs} args - Arguments to find a CoinTransaction
     * @example
     * // Get one CoinTransaction
     * const coinTransaction = await prisma.coinTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CoinTransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CoinTransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CoinTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoinTransactions
     * const coinTransactions = await prisma.coinTransaction.findMany()
     * 
     * // Get first 10 CoinTransactions
     * const coinTransactions = await prisma.coinTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coinTransactionWithIdOnly = await prisma.coinTransaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CoinTransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CoinTransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CoinTransaction.
     * @param {CoinTransactionCreateArgs} args - Arguments to create a CoinTransaction.
     * @example
     * // Create one CoinTransaction
     * const CoinTransaction = await prisma.coinTransaction.create({
     *   data: {
     *     // ... data to create a CoinTransaction
     *   }
     * })
     * 
    **/
    create<T extends CoinTransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CoinTransactionCreateArgs<ExtArgs>>
    ): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CoinTransactions.
     *     @param {CoinTransactionCreateManyArgs} args - Arguments to create many CoinTransactions.
     *     @example
     *     // Create many CoinTransactions
     *     const coinTransaction = await prisma.coinTransaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CoinTransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CoinTransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CoinTransaction.
     * @param {CoinTransactionDeleteArgs} args - Arguments to delete one CoinTransaction.
     * @example
     * // Delete one CoinTransaction
     * const CoinTransaction = await prisma.coinTransaction.delete({
     *   where: {
     *     // ... filter to delete one CoinTransaction
     *   }
     * })
     * 
    **/
    delete<T extends CoinTransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CoinTransactionDeleteArgs<ExtArgs>>
    ): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CoinTransaction.
     * @param {CoinTransactionUpdateArgs} args - Arguments to update one CoinTransaction.
     * @example
     * // Update one CoinTransaction
     * const coinTransaction = await prisma.coinTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CoinTransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CoinTransactionUpdateArgs<ExtArgs>>
    ): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CoinTransactions.
     * @param {CoinTransactionDeleteManyArgs} args - Arguments to filter CoinTransactions to delete.
     * @example
     * // Delete a few CoinTransactions
     * const { count } = await prisma.coinTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CoinTransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CoinTransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoinTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoinTransactions
     * const coinTransaction = await prisma.coinTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CoinTransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CoinTransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CoinTransaction.
     * @param {CoinTransactionUpsertArgs} args - Arguments to update or create a CoinTransaction.
     * @example
     * // Update or create a CoinTransaction
     * const coinTransaction = await prisma.coinTransaction.upsert({
     *   create: {
     *     // ... data to create a CoinTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoinTransaction we want to update
     *   }
     * })
    **/
    upsert<T extends CoinTransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CoinTransactionUpsertArgs<ExtArgs>>
    ): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CoinTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionCountArgs} args - Arguments to filter CoinTransactions to count.
     * @example
     * // Count the number of CoinTransactions
     * const count = await prisma.coinTransaction.count({
     *   where: {
     *     // ... the filter for the CoinTransactions we want to count
     *   }
     * })
    **/
    count<T extends CoinTransactionCountArgs>(
      args?: Subset<T, CoinTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoinTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoinTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoinTransactionAggregateArgs>(args: Subset<T, CoinTransactionAggregateArgs>): Prisma.PrismaPromise<GetCoinTransactionAggregateType<T>>

    /**
     * Group by CoinTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoinTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoinTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CoinTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoinTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoinTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoinTransaction model
   */
  readonly fields: CoinTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoinTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoinTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    coinTransactionType<T extends CoinTransaction$coinTransactionTypeArgs<ExtArgs> = {}>(args?: Subset<T, CoinTransaction$coinTransactionTypeArgs<ExtArgs>>): Prisma__CoinTransactionTypeClient<$Result.GetResult<Prisma.$CoinTransactionTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    user<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CoinTransaction model
   */ 
  interface CoinTransactionFieldRefs {
    readonly id: FieldRef<"CoinTransaction", 'String'>
    readonly userAccountId: FieldRef<"CoinTransaction", 'String'>
    readonly coinAmount: FieldRef<"CoinTransaction", 'BigInt'>
    readonly moneyAmount: FieldRef<"CoinTransaction", 'Int'>
    readonly transactionFee: FieldRef<"CoinTransaction", 'Int'>
    readonly status: FieldRef<"CoinTransaction", 'CoinTransactionStatus'>
    readonly bankAccountNumber: FieldRef<"CoinTransaction", 'BigInt'>
    readonly createdAt: FieldRef<"CoinTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"CoinTransaction", 'DateTime'>
    readonly transactionTypeId: FieldRef<"CoinTransaction", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * CoinTransaction findUnique
   */
  export type CoinTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransaction to fetch.
     */
    where: CoinTransactionWhereUniqueInput
  }


  /**
   * CoinTransaction findUniqueOrThrow
   */
  export type CoinTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransaction to fetch.
     */
    where: CoinTransactionWhereUniqueInput
  }


  /**
   * CoinTransaction findFirst
   */
  export type CoinTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransaction to fetch.
     */
    where?: CoinTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinTransactions to fetch.
     */
    orderBy?: CoinTransactionOrderByWithRelationInput | CoinTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinTransactions.
     */
    cursor?: CoinTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinTransactions.
     */
    distinct?: CoinTransactionScalarFieldEnum | CoinTransactionScalarFieldEnum[]
  }


  /**
   * CoinTransaction findFirstOrThrow
   */
  export type CoinTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransaction to fetch.
     */
    where?: CoinTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinTransactions to fetch.
     */
    orderBy?: CoinTransactionOrderByWithRelationInput | CoinTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinTransactions.
     */
    cursor?: CoinTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinTransactions.
     */
    distinct?: CoinTransactionScalarFieldEnum | CoinTransactionScalarFieldEnum[]
  }


  /**
   * CoinTransaction findMany
   */
  export type CoinTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransactions to fetch.
     */
    where?: CoinTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinTransactions to fetch.
     */
    orderBy?: CoinTransactionOrderByWithRelationInput | CoinTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoinTransactions.
     */
    cursor?: CoinTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinTransactions.
     */
    skip?: number
    distinct?: CoinTransactionScalarFieldEnum | CoinTransactionScalarFieldEnum[]
  }


  /**
   * CoinTransaction create
   */
  export type CoinTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CoinTransaction.
     */
    data: XOR<CoinTransactionCreateInput, CoinTransactionUncheckedCreateInput>
  }


  /**
   * CoinTransaction createMany
   */
  export type CoinTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoinTransactions.
     */
    data: CoinTransactionCreateManyInput | CoinTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CoinTransaction update
   */
  export type CoinTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CoinTransaction.
     */
    data: XOR<CoinTransactionUpdateInput, CoinTransactionUncheckedUpdateInput>
    /**
     * Choose, which CoinTransaction to update.
     */
    where: CoinTransactionWhereUniqueInput
  }


  /**
   * CoinTransaction updateMany
   */
  export type CoinTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoinTransactions.
     */
    data: XOR<CoinTransactionUpdateManyMutationInput, CoinTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CoinTransactions to update
     */
    where?: CoinTransactionWhereInput
  }


  /**
   * CoinTransaction upsert
   */
  export type CoinTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CoinTransaction to update in case it exists.
     */
    where: CoinTransactionWhereUniqueInput
    /**
     * In case the CoinTransaction found by the `where` argument doesn't exist, create a new CoinTransaction with this data.
     */
    create: XOR<CoinTransactionCreateInput, CoinTransactionUncheckedCreateInput>
    /**
     * In case the CoinTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoinTransactionUpdateInput, CoinTransactionUncheckedUpdateInput>
  }


  /**
   * CoinTransaction delete
   */
  export type CoinTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * Filter which CoinTransaction to delete.
     */
    where: CoinTransactionWhereUniqueInput
  }


  /**
   * CoinTransaction deleteMany
   */
  export type CoinTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinTransactions to delete
     */
    where?: CoinTransactionWhereInput
  }


  /**
   * CoinTransaction.coinTransactionType
   */
  export type CoinTransaction$coinTransactionTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransactionType
     */
    select?: CoinTransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionTypeInclude<ExtArgs> | null
    where?: CoinTransactionTypeWhereInput
  }


  /**
   * CoinTransaction without action
   */
  export type CoinTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionInclude<ExtArgs> | null
  }



  /**
   * Model CoinTransactionType
   */

  export type AggregateCoinTransactionType = {
    _count: CoinTransactionTypeCountAggregateOutputType | null
    _avg: CoinTransactionTypeAvgAggregateOutputType | null
    _sum: CoinTransactionTypeSumAggregateOutputType | null
    _min: CoinTransactionTypeMinAggregateOutputType | null
    _max: CoinTransactionTypeMaxAggregateOutputType | null
  }

  export type CoinTransactionTypeAvgAggregateOutputType = {
    id: number | null
    feePercentage: number | null
  }

  export type CoinTransactionTypeSumAggregateOutputType = {
    id: number | null
    feePercentage: number | null
  }

  export type CoinTransactionTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    feePercentage: number | null
    createdAt: Date | null
  }

  export type CoinTransactionTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    feePercentage: number | null
    createdAt: Date | null
  }

  export type CoinTransactionTypeCountAggregateOutputType = {
    id: number
    name: number
    feePercentage: number
    createdAt: number
    _all: number
  }


  export type CoinTransactionTypeAvgAggregateInputType = {
    id?: true
    feePercentage?: true
  }

  export type CoinTransactionTypeSumAggregateInputType = {
    id?: true
    feePercentage?: true
  }

  export type CoinTransactionTypeMinAggregateInputType = {
    id?: true
    name?: true
    feePercentage?: true
    createdAt?: true
  }

  export type CoinTransactionTypeMaxAggregateInputType = {
    id?: true
    name?: true
    feePercentage?: true
    createdAt?: true
  }

  export type CoinTransactionTypeCountAggregateInputType = {
    id?: true
    name?: true
    feePercentage?: true
    createdAt?: true
    _all?: true
  }

  export type CoinTransactionTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinTransactionType to aggregate.
     */
    where?: CoinTransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinTransactionTypes to fetch.
     */
    orderBy?: CoinTransactionTypeOrderByWithRelationInput | CoinTransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoinTransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinTransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinTransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoinTransactionTypes
    **/
    _count?: true | CoinTransactionTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoinTransactionTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoinTransactionTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoinTransactionTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoinTransactionTypeMaxAggregateInputType
  }

  export type GetCoinTransactionTypeAggregateType<T extends CoinTransactionTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateCoinTransactionType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoinTransactionType[P]>
      : GetScalarType<T[P], AggregateCoinTransactionType[P]>
  }




  export type CoinTransactionTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinTransactionTypeWhereInput
    orderBy?: CoinTransactionTypeOrderByWithAggregationInput | CoinTransactionTypeOrderByWithAggregationInput[]
    by: CoinTransactionTypeScalarFieldEnum[] | CoinTransactionTypeScalarFieldEnum
    having?: CoinTransactionTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoinTransactionTypeCountAggregateInputType | true
    _avg?: CoinTransactionTypeAvgAggregateInputType
    _sum?: CoinTransactionTypeSumAggregateInputType
    _min?: CoinTransactionTypeMinAggregateInputType
    _max?: CoinTransactionTypeMaxAggregateInputType
  }

  export type CoinTransactionTypeGroupByOutputType = {
    id: number
    name: string
    feePercentage: number
    createdAt: Date
    _count: CoinTransactionTypeCountAggregateOutputType | null
    _avg: CoinTransactionTypeAvgAggregateOutputType | null
    _sum: CoinTransactionTypeSumAggregateOutputType | null
    _min: CoinTransactionTypeMinAggregateOutputType | null
    _max: CoinTransactionTypeMaxAggregateOutputType | null
  }

  type GetCoinTransactionTypeGroupByPayload<T extends CoinTransactionTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoinTransactionTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoinTransactionTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoinTransactionTypeGroupByOutputType[P]>
            : GetScalarType<T[P], CoinTransactionTypeGroupByOutputType[P]>
        }
      >
    >


  export type CoinTransactionTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    feePercentage?: boolean
    createdAt?: boolean
    coinTransactions?: boolean | CoinTransactionType$coinTransactionsArgs<ExtArgs>
    _count?: boolean | CoinTransactionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coinTransactionType"]>

  export type CoinTransactionTypeSelectScalar = {
    id?: boolean
    name?: boolean
    feePercentage?: boolean
    createdAt?: boolean
  }

  export type CoinTransactionTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coinTransactions?: boolean | CoinTransactionType$coinTransactionsArgs<ExtArgs>
    _count?: boolean | CoinTransactionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CoinTransactionTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoinTransactionType"
    objects: {
      coinTransactions: Prisma.$CoinTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      feePercentage: number
      createdAt: Date
    }, ExtArgs["result"]["coinTransactionType"]>
    composites: {}
  }


  type CoinTransactionTypeGetPayload<S extends boolean | null | undefined | CoinTransactionTypeDefaultArgs> = $Result.GetResult<Prisma.$CoinTransactionTypePayload, S>

  type CoinTransactionTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CoinTransactionTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CoinTransactionTypeCountAggregateInputType | true
    }

  export interface CoinTransactionTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoinTransactionType'], meta: { name: 'CoinTransactionType' } }
    /**
     * Find zero or one CoinTransactionType that matches the filter.
     * @param {CoinTransactionTypeFindUniqueArgs} args - Arguments to find a CoinTransactionType
     * @example
     * // Get one CoinTransactionType
     * const coinTransactionType = await prisma.coinTransactionType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CoinTransactionTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CoinTransactionTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__CoinTransactionTypeClient<$Result.GetResult<Prisma.$CoinTransactionTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CoinTransactionType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CoinTransactionTypeFindUniqueOrThrowArgs} args - Arguments to find a CoinTransactionType
     * @example
     * // Get one CoinTransactionType
     * const coinTransactionType = await prisma.coinTransactionType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CoinTransactionTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CoinTransactionTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CoinTransactionTypeClient<$Result.GetResult<Prisma.$CoinTransactionTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CoinTransactionType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionTypeFindFirstArgs} args - Arguments to find a CoinTransactionType
     * @example
     * // Get one CoinTransactionType
     * const coinTransactionType = await prisma.coinTransactionType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CoinTransactionTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CoinTransactionTypeFindFirstArgs<ExtArgs>>
    ): Prisma__CoinTransactionTypeClient<$Result.GetResult<Prisma.$CoinTransactionTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CoinTransactionType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionTypeFindFirstOrThrowArgs} args - Arguments to find a CoinTransactionType
     * @example
     * // Get one CoinTransactionType
     * const coinTransactionType = await prisma.coinTransactionType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CoinTransactionTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CoinTransactionTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CoinTransactionTypeClient<$Result.GetResult<Prisma.$CoinTransactionTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CoinTransactionTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoinTransactionTypes
     * const coinTransactionTypes = await prisma.coinTransactionType.findMany()
     * 
     * // Get first 10 CoinTransactionTypes
     * const coinTransactionTypes = await prisma.coinTransactionType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coinTransactionTypeWithIdOnly = await prisma.coinTransactionType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CoinTransactionTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CoinTransactionTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinTransactionTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CoinTransactionType.
     * @param {CoinTransactionTypeCreateArgs} args - Arguments to create a CoinTransactionType.
     * @example
     * // Create one CoinTransactionType
     * const CoinTransactionType = await prisma.coinTransactionType.create({
     *   data: {
     *     // ... data to create a CoinTransactionType
     *   }
     * })
     * 
    **/
    create<T extends CoinTransactionTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CoinTransactionTypeCreateArgs<ExtArgs>>
    ): Prisma__CoinTransactionTypeClient<$Result.GetResult<Prisma.$CoinTransactionTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CoinTransactionTypes.
     *     @param {CoinTransactionTypeCreateManyArgs} args - Arguments to create many CoinTransactionTypes.
     *     @example
     *     // Create many CoinTransactionTypes
     *     const coinTransactionType = await prisma.coinTransactionType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CoinTransactionTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CoinTransactionTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CoinTransactionType.
     * @param {CoinTransactionTypeDeleteArgs} args - Arguments to delete one CoinTransactionType.
     * @example
     * // Delete one CoinTransactionType
     * const CoinTransactionType = await prisma.coinTransactionType.delete({
     *   where: {
     *     // ... filter to delete one CoinTransactionType
     *   }
     * })
     * 
    **/
    delete<T extends CoinTransactionTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CoinTransactionTypeDeleteArgs<ExtArgs>>
    ): Prisma__CoinTransactionTypeClient<$Result.GetResult<Prisma.$CoinTransactionTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CoinTransactionType.
     * @param {CoinTransactionTypeUpdateArgs} args - Arguments to update one CoinTransactionType.
     * @example
     * // Update one CoinTransactionType
     * const coinTransactionType = await prisma.coinTransactionType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CoinTransactionTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CoinTransactionTypeUpdateArgs<ExtArgs>>
    ): Prisma__CoinTransactionTypeClient<$Result.GetResult<Prisma.$CoinTransactionTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CoinTransactionTypes.
     * @param {CoinTransactionTypeDeleteManyArgs} args - Arguments to filter CoinTransactionTypes to delete.
     * @example
     * // Delete a few CoinTransactionTypes
     * const { count } = await prisma.coinTransactionType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CoinTransactionTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CoinTransactionTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoinTransactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoinTransactionTypes
     * const coinTransactionType = await prisma.coinTransactionType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CoinTransactionTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CoinTransactionTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CoinTransactionType.
     * @param {CoinTransactionTypeUpsertArgs} args - Arguments to update or create a CoinTransactionType.
     * @example
     * // Update or create a CoinTransactionType
     * const coinTransactionType = await prisma.coinTransactionType.upsert({
     *   create: {
     *     // ... data to create a CoinTransactionType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoinTransactionType we want to update
     *   }
     * })
    **/
    upsert<T extends CoinTransactionTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CoinTransactionTypeUpsertArgs<ExtArgs>>
    ): Prisma__CoinTransactionTypeClient<$Result.GetResult<Prisma.$CoinTransactionTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CoinTransactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionTypeCountArgs} args - Arguments to filter CoinTransactionTypes to count.
     * @example
     * // Count the number of CoinTransactionTypes
     * const count = await prisma.coinTransactionType.count({
     *   where: {
     *     // ... the filter for the CoinTransactionTypes we want to count
     *   }
     * })
    **/
    count<T extends CoinTransactionTypeCountArgs>(
      args?: Subset<T, CoinTransactionTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoinTransactionTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoinTransactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoinTransactionTypeAggregateArgs>(args: Subset<T, CoinTransactionTypeAggregateArgs>): Prisma.PrismaPromise<GetCoinTransactionTypeAggregateType<T>>

    /**
     * Group by CoinTransactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoinTransactionTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoinTransactionTypeGroupByArgs['orderBy'] }
        : { orderBy?: CoinTransactionTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoinTransactionTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoinTransactionTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoinTransactionType model
   */
  readonly fields: CoinTransactionTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoinTransactionType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoinTransactionTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    coinTransactions<T extends CoinTransactionType$coinTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, CoinTransactionType$coinTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CoinTransactionType model
   */ 
  interface CoinTransactionTypeFieldRefs {
    readonly id: FieldRef<"CoinTransactionType", 'Int'>
    readonly name: FieldRef<"CoinTransactionType", 'String'>
    readonly feePercentage: FieldRef<"CoinTransactionType", 'Int'>
    readonly createdAt: FieldRef<"CoinTransactionType", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CoinTransactionType findUnique
   */
  export type CoinTransactionTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransactionType
     */
    select?: CoinTransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransactionType to fetch.
     */
    where: CoinTransactionTypeWhereUniqueInput
  }


  /**
   * CoinTransactionType findUniqueOrThrow
   */
  export type CoinTransactionTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransactionType
     */
    select?: CoinTransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransactionType to fetch.
     */
    where: CoinTransactionTypeWhereUniqueInput
  }


  /**
   * CoinTransactionType findFirst
   */
  export type CoinTransactionTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransactionType
     */
    select?: CoinTransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransactionType to fetch.
     */
    where?: CoinTransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinTransactionTypes to fetch.
     */
    orderBy?: CoinTransactionTypeOrderByWithRelationInput | CoinTransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinTransactionTypes.
     */
    cursor?: CoinTransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinTransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinTransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinTransactionTypes.
     */
    distinct?: CoinTransactionTypeScalarFieldEnum | CoinTransactionTypeScalarFieldEnum[]
  }


  /**
   * CoinTransactionType findFirstOrThrow
   */
  export type CoinTransactionTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransactionType
     */
    select?: CoinTransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransactionType to fetch.
     */
    where?: CoinTransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinTransactionTypes to fetch.
     */
    orderBy?: CoinTransactionTypeOrderByWithRelationInput | CoinTransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinTransactionTypes.
     */
    cursor?: CoinTransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinTransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinTransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinTransactionTypes.
     */
    distinct?: CoinTransactionTypeScalarFieldEnum | CoinTransactionTypeScalarFieldEnum[]
  }


  /**
   * CoinTransactionType findMany
   */
  export type CoinTransactionTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransactionType
     */
    select?: CoinTransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransactionTypes to fetch.
     */
    where?: CoinTransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinTransactionTypes to fetch.
     */
    orderBy?: CoinTransactionTypeOrderByWithRelationInput | CoinTransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoinTransactionTypes.
     */
    cursor?: CoinTransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinTransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinTransactionTypes.
     */
    skip?: number
    distinct?: CoinTransactionTypeScalarFieldEnum | CoinTransactionTypeScalarFieldEnum[]
  }


  /**
   * CoinTransactionType create
   */
  export type CoinTransactionTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransactionType
     */
    select?: CoinTransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a CoinTransactionType.
     */
    data: XOR<CoinTransactionTypeCreateInput, CoinTransactionTypeUncheckedCreateInput>
  }


  /**
   * CoinTransactionType createMany
   */
  export type CoinTransactionTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoinTransactionTypes.
     */
    data: CoinTransactionTypeCreateManyInput | CoinTransactionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CoinTransactionType update
   */
  export type CoinTransactionTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransactionType
     */
    select?: CoinTransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a CoinTransactionType.
     */
    data: XOR<CoinTransactionTypeUpdateInput, CoinTransactionTypeUncheckedUpdateInput>
    /**
     * Choose, which CoinTransactionType to update.
     */
    where: CoinTransactionTypeWhereUniqueInput
  }


  /**
   * CoinTransactionType updateMany
   */
  export type CoinTransactionTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoinTransactionTypes.
     */
    data: XOR<CoinTransactionTypeUpdateManyMutationInput, CoinTransactionTypeUncheckedUpdateManyInput>
    /**
     * Filter which CoinTransactionTypes to update
     */
    where?: CoinTransactionTypeWhereInput
  }


  /**
   * CoinTransactionType upsert
   */
  export type CoinTransactionTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransactionType
     */
    select?: CoinTransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the CoinTransactionType to update in case it exists.
     */
    where: CoinTransactionTypeWhereUniqueInput
    /**
     * In case the CoinTransactionType found by the `where` argument doesn't exist, create a new CoinTransactionType with this data.
     */
    create: XOR<CoinTransactionTypeCreateInput, CoinTransactionTypeUncheckedCreateInput>
    /**
     * In case the CoinTransactionType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoinTransactionTypeUpdateInput, CoinTransactionTypeUncheckedUpdateInput>
  }


  /**
   * CoinTransactionType delete
   */
  export type CoinTransactionTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransactionType
     */
    select?: CoinTransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionTypeInclude<ExtArgs> | null
    /**
     * Filter which CoinTransactionType to delete.
     */
    where: CoinTransactionTypeWhereUniqueInput
  }


  /**
   * CoinTransactionType deleteMany
   */
  export type CoinTransactionTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinTransactionTypes to delete
     */
    where?: CoinTransactionTypeWhereInput
  }


  /**
   * CoinTransactionType.coinTransactions
   */
  export type CoinTransactionType$coinTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    where?: CoinTransactionWhereInput
    orderBy?: CoinTransactionOrderByWithRelationInput | CoinTransactionOrderByWithRelationInput[]
    cursor?: CoinTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoinTransactionScalarFieldEnum | CoinTransactionScalarFieldEnum[]
  }


  /**
   * CoinTransactionType without action
   */
  export type CoinTransactionTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransactionType
     */
    select?: CoinTransactionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionTypeInclude<ExtArgs> | null
  }



  /**
   * Model GiftItem
   */

  export type AggregateGiftItem = {
    _count: GiftItemCountAggregateOutputType | null
    _avg: GiftItemAvgAggregateOutputType | null
    _sum: GiftItemSumAggregateOutputType | null
    _min: GiftItemMinAggregateOutputType | null
    _max: GiftItemMaxAggregateOutputType | null
  }

  export type GiftItemAvgAggregateOutputType = {
    coinAmount: number | null
  }

  export type GiftItemSumAggregateOutputType = {
    coinAmount: bigint | null
  }

  export type GiftItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    coinAmount: bigint | null
    imagePath: string | null
    createdAt: Date | null
  }

  export type GiftItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    coinAmount: bigint | null
    imagePath: string | null
    createdAt: Date | null
  }

  export type GiftItemCountAggregateOutputType = {
    id: number
    name: number
    coinAmount: number
    imagePath: number
    createdAt: number
    _all: number
  }


  export type GiftItemAvgAggregateInputType = {
    coinAmount?: true
  }

  export type GiftItemSumAggregateInputType = {
    coinAmount?: true
  }

  export type GiftItemMinAggregateInputType = {
    id?: true
    name?: true
    coinAmount?: true
    imagePath?: true
    createdAt?: true
  }

  export type GiftItemMaxAggregateInputType = {
    id?: true
    name?: true
    coinAmount?: true
    imagePath?: true
    createdAt?: true
  }

  export type GiftItemCountAggregateInputType = {
    id?: true
    name?: true
    coinAmount?: true
    imagePath?: true
    createdAt?: true
    _all?: true
  }

  export type GiftItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiftItem to aggregate.
     */
    where?: GiftItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftItems to fetch.
     */
    orderBy?: GiftItemOrderByWithRelationInput | GiftItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GiftItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GiftItems
    **/
    _count?: true | GiftItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GiftItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GiftItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiftItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiftItemMaxAggregateInputType
  }

  export type GetGiftItemAggregateType<T extends GiftItemAggregateArgs> = {
        [P in keyof T & keyof AggregateGiftItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGiftItem[P]>
      : GetScalarType<T[P], AggregateGiftItem[P]>
  }




  export type GiftItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftItemWhereInput
    orderBy?: GiftItemOrderByWithAggregationInput | GiftItemOrderByWithAggregationInput[]
    by: GiftItemScalarFieldEnum[] | GiftItemScalarFieldEnum
    having?: GiftItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiftItemCountAggregateInputType | true
    _avg?: GiftItemAvgAggregateInputType
    _sum?: GiftItemSumAggregateInputType
    _min?: GiftItemMinAggregateInputType
    _max?: GiftItemMaxAggregateInputType
  }

  export type GiftItemGroupByOutputType = {
    id: string
    name: string
    coinAmount: bigint
    imagePath: string
    createdAt: Date
    _count: GiftItemCountAggregateOutputType | null
    _avg: GiftItemAvgAggregateOutputType | null
    _sum: GiftItemSumAggregateOutputType | null
    _min: GiftItemMinAggregateOutputType | null
    _max: GiftItemMaxAggregateOutputType | null
  }

  type GetGiftItemGroupByPayload<T extends GiftItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiftItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiftItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiftItemGroupByOutputType[P]>
            : GetScalarType<T[P], GiftItemGroupByOutputType[P]>
        }
      >
    >


  export type GiftItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coinAmount?: boolean
    imagePath?: boolean
    createdAt?: boolean
    giftTransactions?: boolean | GiftItem$giftTransactionsArgs<ExtArgs>
    _count?: boolean | GiftItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["giftItem"]>

  export type GiftItemSelectScalar = {
    id?: boolean
    name?: boolean
    coinAmount?: boolean
    imagePath?: boolean
    createdAt?: boolean
  }

  export type GiftItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    giftTransactions?: boolean | GiftItem$giftTransactionsArgs<ExtArgs>
    _count?: boolean | GiftItemCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GiftItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GiftItem"
    objects: {
      giftTransactions: Prisma.$GiftTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      coinAmount: bigint
      imagePath: string
      createdAt: Date
    }, ExtArgs["result"]["giftItem"]>
    composites: {}
  }


  type GiftItemGetPayload<S extends boolean | null | undefined | GiftItemDefaultArgs> = $Result.GetResult<Prisma.$GiftItemPayload, S>

  type GiftItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GiftItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GiftItemCountAggregateInputType | true
    }

  export interface GiftItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GiftItem'], meta: { name: 'GiftItem' } }
    /**
     * Find zero or one GiftItem that matches the filter.
     * @param {GiftItemFindUniqueArgs} args - Arguments to find a GiftItem
     * @example
     * // Get one GiftItem
     * const giftItem = await prisma.giftItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GiftItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GiftItemFindUniqueArgs<ExtArgs>>
    ): Prisma__GiftItemClient<$Result.GetResult<Prisma.$GiftItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GiftItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GiftItemFindUniqueOrThrowArgs} args - Arguments to find a GiftItem
     * @example
     * // Get one GiftItem
     * const giftItem = await prisma.giftItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GiftItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GiftItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GiftItemClient<$Result.GetResult<Prisma.$GiftItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GiftItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftItemFindFirstArgs} args - Arguments to find a GiftItem
     * @example
     * // Get one GiftItem
     * const giftItem = await prisma.giftItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GiftItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GiftItemFindFirstArgs<ExtArgs>>
    ): Prisma__GiftItemClient<$Result.GetResult<Prisma.$GiftItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GiftItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftItemFindFirstOrThrowArgs} args - Arguments to find a GiftItem
     * @example
     * // Get one GiftItem
     * const giftItem = await prisma.giftItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GiftItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GiftItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GiftItemClient<$Result.GetResult<Prisma.$GiftItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GiftItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GiftItems
     * const giftItems = await prisma.giftItem.findMany()
     * 
     * // Get first 10 GiftItems
     * const giftItems = await prisma.giftItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const giftItemWithIdOnly = await prisma.giftItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GiftItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GiftItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GiftItem.
     * @param {GiftItemCreateArgs} args - Arguments to create a GiftItem.
     * @example
     * // Create one GiftItem
     * const GiftItem = await prisma.giftItem.create({
     *   data: {
     *     // ... data to create a GiftItem
     *   }
     * })
     * 
    **/
    create<T extends GiftItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GiftItemCreateArgs<ExtArgs>>
    ): Prisma__GiftItemClient<$Result.GetResult<Prisma.$GiftItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GiftItems.
     *     @param {GiftItemCreateManyArgs} args - Arguments to create many GiftItems.
     *     @example
     *     // Create many GiftItems
     *     const giftItem = await prisma.giftItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GiftItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GiftItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GiftItem.
     * @param {GiftItemDeleteArgs} args - Arguments to delete one GiftItem.
     * @example
     * // Delete one GiftItem
     * const GiftItem = await prisma.giftItem.delete({
     *   where: {
     *     // ... filter to delete one GiftItem
     *   }
     * })
     * 
    **/
    delete<T extends GiftItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GiftItemDeleteArgs<ExtArgs>>
    ): Prisma__GiftItemClient<$Result.GetResult<Prisma.$GiftItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GiftItem.
     * @param {GiftItemUpdateArgs} args - Arguments to update one GiftItem.
     * @example
     * // Update one GiftItem
     * const giftItem = await prisma.giftItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GiftItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GiftItemUpdateArgs<ExtArgs>>
    ): Prisma__GiftItemClient<$Result.GetResult<Prisma.$GiftItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GiftItems.
     * @param {GiftItemDeleteManyArgs} args - Arguments to filter GiftItems to delete.
     * @example
     * // Delete a few GiftItems
     * const { count } = await prisma.giftItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GiftItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GiftItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GiftItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GiftItems
     * const giftItem = await prisma.giftItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GiftItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GiftItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GiftItem.
     * @param {GiftItemUpsertArgs} args - Arguments to update or create a GiftItem.
     * @example
     * // Update or create a GiftItem
     * const giftItem = await prisma.giftItem.upsert({
     *   create: {
     *     // ... data to create a GiftItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GiftItem we want to update
     *   }
     * })
    **/
    upsert<T extends GiftItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GiftItemUpsertArgs<ExtArgs>>
    ): Prisma__GiftItemClient<$Result.GetResult<Prisma.$GiftItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GiftItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftItemCountArgs} args - Arguments to filter GiftItems to count.
     * @example
     * // Count the number of GiftItems
     * const count = await prisma.giftItem.count({
     *   where: {
     *     // ... the filter for the GiftItems we want to count
     *   }
     * })
    **/
    count<T extends GiftItemCountArgs>(
      args?: Subset<T, GiftItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiftItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GiftItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GiftItemAggregateArgs>(args: Subset<T, GiftItemAggregateArgs>): Prisma.PrismaPromise<GetGiftItemAggregateType<T>>

    /**
     * Group by GiftItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GiftItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GiftItemGroupByArgs['orderBy'] }
        : { orderBy?: GiftItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GiftItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiftItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GiftItem model
   */
  readonly fields: GiftItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GiftItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GiftItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    giftTransactions<T extends GiftItem$giftTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, GiftItem$giftTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GiftItem model
   */ 
  interface GiftItemFieldRefs {
    readonly id: FieldRef<"GiftItem", 'String'>
    readonly name: FieldRef<"GiftItem", 'String'>
    readonly coinAmount: FieldRef<"GiftItem", 'BigInt'>
    readonly imagePath: FieldRef<"GiftItem", 'String'>
    readonly createdAt: FieldRef<"GiftItem", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * GiftItem findUnique
   */
  export type GiftItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftItem
     */
    select?: GiftItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftItemInclude<ExtArgs> | null
    /**
     * Filter, which GiftItem to fetch.
     */
    where: GiftItemWhereUniqueInput
  }


  /**
   * GiftItem findUniqueOrThrow
   */
  export type GiftItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftItem
     */
    select?: GiftItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftItemInclude<ExtArgs> | null
    /**
     * Filter, which GiftItem to fetch.
     */
    where: GiftItemWhereUniqueInput
  }


  /**
   * GiftItem findFirst
   */
  export type GiftItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftItem
     */
    select?: GiftItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftItemInclude<ExtArgs> | null
    /**
     * Filter, which GiftItem to fetch.
     */
    where?: GiftItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftItems to fetch.
     */
    orderBy?: GiftItemOrderByWithRelationInput | GiftItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiftItems.
     */
    cursor?: GiftItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiftItems.
     */
    distinct?: GiftItemScalarFieldEnum | GiftItemScalarFieldEnum[]
  }


  /**
   * GiftItem findFirstOrThrow
   */
  export type GiftItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftItem
     */
    select?: GiftItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftItemInclude<ExtArgs> | null
    /**
     * Filter, which GiftItem to fetch.
     */
    where?: GiftItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftItems to fetch.
     */
    orderBy?: GiftItemOrderByWithRelationInput | GiftItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiftItems.
     */
    cursor?: GiftItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiftItems.
     */
    distinct?: GiftItemScalarFieldEnum | GiftItemScalarFieldEnum[]
  }


  /**
   * GiftItem findMany
   */
  export type GiftItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftItem
     */
    select?: GiftItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftItemInclude<ExtArgs> | null
    /**
     * Filter, which GiftItems to fetch.
     */
    where?: GiftItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftItems to fetch.
     */
    orderBy?: GiftItemOrderByWithRelationInput | GiftItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GiftItems.
     */
    cursor?: GiftItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftItems.
     */
    skip?: number
    distinct?: GiftItemScalarFieldEnum | GiftItemScalarFieldEnum[]
  }


  /**
   * GiftItem create
   */
  export type GiftItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftItem
     */
    select?: GiftItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftItemInclude<ExtArgs> | null
    /**
     * The data needed to create a GiftItem.
     */
    data: XOR<GiftItemCreateInput, GiftItemUncheckedCreateInput>
  }


  /**
   * GiftItem createMany
   */
  export type GiftItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GiftItems.
     */
    data: GiftItemCreateManyInput | GiftItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GiftItem update
   */
  export type GiftItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftItem
     */
    select?: GiftItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftItemInclude<ExtArgs> | null
    /**
     * The data needed to update a GiftItem.
     */
    data: XOR<GiftItemUpdateInput, GiftItemUncheckedUpdateInput>
    /**
     * Choose, which GiftItem to update.
     */
    where: GiftItemWhereUniqueInput
  }


  /**
   * GiftItem updateMany
   */
  export type GiftItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GiftItems.
     */
    data: XOR<GiftItemUpdateManyMutationInput, GiftItemUncheckedUpdateManyInput>
    /**
     * Filter which GiftItems to update
     */
    where?: GiftItemWhereInput
  }


  /**
   * GiftItem upsert
   */
  export type GiftItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftItem
     */
    select?: GiftItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftItemInclude<ExtArgs> | null
    /**
     * The filter to search for the GiftItem to update in case it exists.
     */
    where: GiftItemWhereUniqueInput
    /**
     * In case the GiftItem found by the `where` argument doesn't exist, create a new GiftItem with this data.
     */
    create: XOR<GiftItemCreateInput, GiftItemUncheckedCreateInput>
    /**
     * In case the GiftItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GiftItemUpdateInput, GiftItemUncheckedUpdateInput>
  }


  /**
   * GiftItem delete
   */
  export type GiftItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftItem
     */
    select?: GiftItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftItemInclude<ExtArgs> | null
    /**
     * Filter which GiftItem to delete.
     */
    where: GiftItemWhereUniqueInput
  }


  /**
   * GiftItem deleteMany
   */
  export type GiftItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiftItems to delete
     */
    where?: GiftItemWhereInput
  }


  /**
   * GiftItem.giftTransactions
   */
  export type GiftItem$giftTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftTransaction
     */
    select?: GiftTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftTransactionInclude<ExtArgs> | null
    where?: GiftTransactionWhereInput
    orderBy?: GiftTransactionOrderByWithRelationInput | GiftTransactionOrderByWithRelationInput[]
    cursor?: GiftTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftTransactionScalarFieldEnum | GiftTransactionScalarFieldEnum[]
  }


  /**
   * GiftItem without action
   */
  export type GiftItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftItem
     */
    select?: GiftItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftItemInclude<ExtArgs> | null
  }



  /**
   * Model GiftTransaction
   */

  export type AggregateGiftTransaction = {
    _count: GiftTransactionCountAggregateOutputType | null
    _avg: GiftTransactionAvgAggregateOutputType | null
    _sum: GiftTransactionSumAggregateOutputType | null
    _min: GiftTransactionMinAggregateOutputType | null
    _max: GiftTransactionMaxAggregateOutputType | null
  }

  export type GiftTransactionAvgAggregateOutputType = {
    coinAmount: number | null
  }

  export type GiftTransactionSumAggregateOutputType = {
    coinAmount: bigint | null
  }

  export type GiftTransactionMinAggregateOutputType = {
    id: string | null
    senderAccountId: string | null
    receiverAccountId: string | null
    coinAmount: bigint | null
    createdAt: Date | null
    giftItemId: string | null
  }

  export type GiftTransactionMaxAggregateOutputType = {
    id: string | null
    senderAccountId: string | null
    receiverAccountId: string | null
    coinAmount: bigint | null
    createdAt: Date | null
    giftItemId: string | null
  }

  export type GiftTransactionCountAggregateOutputType = {
    id: number
    senderAccountId: number
    receiverAccountId: number
    coinAmount: number
    createdAt: number
    giftItemId: number
    _all: number
  }


  export type GiftTransactionAvgAggregateInputType = {
    coinAmount?: true
  }

  export type GiftTransactionSumAggregateInputType = {
    coinAmount?: true
  }

  export type GiftTransactionMinAggregateInputType = {
    id?: true
    senderAccountId?: true
    receiverAccountId?: true
    coinAmount?: true
    createdAt?: true
    giftItemId?: true
  }

  export type GiftTransactionMaxAggregateInputType = {
    id?: true
    senderAccountId?: true
    receiverAccountId?: true
    coinAmount?: true
    createdAt?: true
    giftItemId?: true
  }

  export type GiftTransactionCountAggregateInputType = {
    id?: true
    senderAccountId?: true
    receiverAccountId?: true
    coinAmount?: true
    createdAt?: true
    giftItemId?: true
    _all?: true
  }

  export type GiftTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiftTransaction to aggregate.
     */
    where?: GiftTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftTransactions to fetch.
     */
    orderBy?: GiftTransactionOrderByWithRelationInput | GiftTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GiftTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GiftTransactions
    **/
    _count?: true | GiftTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GiftTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GiftTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiftTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiftTransactionMaxAggregateInputType
  }

  export type GetGiftTransactionAggregateType<T extends GiftTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateGiftTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGiftTransaction[P]>
      : GetScalarType<T[P], AggregateGiftTransaction[P]>
  }




  export type GiftTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiftTransactionWhereInput
    orderBy?: GiftTransactionOrderByWithAggregationInput | GiftTransactionOrderByWithAggregationInput[]
    by: GiftTransactionScalarFieldEnum[] | GiftTransactionScalarFieldEnum
    having?: GiftTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiftTransactionCountAggregateInputType | true
    _avg?: GiftTransactionAvgAggregateInputType
    _sum?: GiftTransactionSumAggregateInputType
    _min?: GiftTransactionMinAggregateInputType
    _max?: GiftTransactionMaxAggregateInputType
  }

  export type GiftTransactionGroupByOutputType = {
    id: string
    senderAccountId: string
    receiverAccountId: string
    coinAmount: bigint
    createdAt: Date
    giftItemId: string
    _count: GiftTransactionCountAggregateOutputType | null
    _avg: GiftTransactionAvgAggregateOutputType | null
    _sum: GiftTransactionSumAggregateOutputType | null
    _min: GiftTransactionMinAggregateOutputType | null
    _max: GiftTransactionMaxAggregateOutputType | null
  }

  type GetGiftTransactionGroupByPayload<T extends GiftTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiftTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiftTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiftTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], GiftTransactionGroupByOutputType[P]>
        }
      >
    >


  export type GiftTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderAccountId?: boolean
    receiverAccountId?: boolean
    coinAmount?: boolean
    createdAt?: boolean
    giftItemId?: boolean
    giftItem?: boolean | GiftItemDefaultArgs<ExtArgs>
    sender?: boolean | PersonDefaultArgs<ExtArgs>
    receiver?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["giftTransaction"]>

  export type GiftTransactionSelectScalar = {
    id?: boolean
    senderAccountId?: boolean
    receiverAccountId?: boolean
    coinAmount?: boolean
    createdAt?: boolean
    giftItemId?: boolean
  }

  export type GiftTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    giftItem?: boolean | GiftItemDefaultArgs<ExtArgs>
    sender?: boolean | PersonDefaultArgs<ExtArgs>
    receiver?: boolean | PersonDefaultArgs<ExtArgs>
  }


  export type $GiftTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GiftTransaction"
    objects: {
      giftItem: Prisma.$GiftItemPayload<ExtArgs>
      sender: Prisma.$PersonPayload<ExtArgs>
      receiver: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderAccountId: string
      receiverAccountId: string
      coinAmount: bigint
      createdAt: Date
      giftItemId: string
    }, ExtArgs["result"]["giftTransaction"]>
    composites: {}
  }


  type GiftTransactionGetPayload<S extends boolean | null | undefined | GiftTransactionDefaultArgs> = $Result.GetResult<Prisma.$GiftTransactionPayload, S>

  type GiftTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GiftTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GiftTransactionCountAggregateInputType | true
    }

  export interface GiftTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GiftTransaction'], meta: { name: 'GiftTransaction' } }
    /**
     * Find zero or one GiftTransaction that matches the filter.
     * @param {GiftTransactionFindUniqueArgs} args - Arguments to find a GiftTransaction
     * @example
     * // Get one GiftTransaction
     * const giftTransaction = await prisma.giftTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GiftTransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GiftTransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__GiftTransactionClient<$Result.GetResult<Prisma.$GiftTransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GiftTransaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GiftTransactionFindUniqueOrThrowArgs} args - Arguments to find a GiftTransaction
     * @example
     * // Get one GiftTransaction
     * const giftTransaction = await prisma.giftTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GiftTransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GiftTransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GiftTransactionClient<$Result.GetResult<Prisma.$GiftTransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GiftTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftTransactionFindFirstArgs} args - Arguments to find a GiftTransaction
     * @example
     * // Get one GiftTransaction
     * const giftTransaction = await prisma.giftTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GiftTransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GiftTransactionFindFirstArgs<ExtArgs>>
    ): Prisma__GiftTransactionClient<$Result.GetResult<Prisma.$GiftTransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GiftTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftTransactionFindFirstOrThrowArgs} args - Arguments to find a GiftTransaction
     * @example
     * // Get one GiftTransaction
     * const giftTransaction = await prisma.giftTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GiftTransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GiftTransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GiftTransactionClient<$Result.GetResult<Prisma.$GiftTransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GiftTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftTransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GiftTransactions
     * const giftTransactions = await prisma.giftTransaction.findMany()
     * 
     * // Get first 10 GiftTransactions
     * const giftTransactions = await prisma.giftTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const giftTransactionWithIdOnly = await prisma.giftTransaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GiftTransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GiftTransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftTransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GiftTransaction.
     * @param {GiftTransactionCreateArgs} args - Arguments to create a GiftTransaction.
     * @example
     * // Create one GiftTransaction
     * const GiftTransaction = await prisma.giftTransaction.create({
     *   data: {
     *     // ... data to create a GiftTransaction
     *   }
     * })
     * 
    **/
    create<T extends GiftTransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GiftTransactionCreateArgs<ExtArgs>>
    ): Prisma__GiftTransactionClient<$Result.GetResult<Prisma.$GiftTransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GiftTransactions.
     *     @param {GiftTransactionCreateManyArgs} args - Arguments to create many GiftTransactions.
     *     @example
     *     // Create many GiftTransactions
     *     const giftTransaction = await prisma.giftTransaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GiftTransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GiftTransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GiftTransaction.
     * @param {GiftTransactionDeleteArgs} args - Arguments to delete one GiftTransaction.
     * @example
     * // Delete one GiftTransaction
     * const GiftTransaction = await prisma.giftTransaction.delete({
     *   where: {
     *     // ... filter to delete one GiftTransaction
     *   }
     * })
     * 
    **/
    delete<T extends GiftTransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GiftTransactionDeleteArgs<ExtArgs>>
    ): Prisma__GiftTransactionClient<$Result.GetResult<Prisma.$GiftTransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GiftTransaction.
     * @param {GiftTransactionUpdateArgs} args - Arguments to update one GiftTransaction.
     * @example
     * // Update one GiftTransaction
     * const giftTransaction = await prisma.giftTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GiftTransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GiftTransactionUpdateArgs<ExtArgs>>
    ): Prisma__GiftTransactionClient<$Result.GetResult<Prisma.$GiftTransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GiftTransactions.
     * @param {GiftTransactionDeleteManyArgs} args - Arguments to filter GiftTransactions to delete.
     * @example
     * // Delete a few GiftTransactions
     * const { count } = await prisma.giftTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GiftTransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GiftTransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GiftTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GiftTransactions
     * const giftTransaction = await prisma.giftTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GiftTransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GiftTransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GiftTransaction.
     * @param {GiftTransactionUpsertArgs} args - Arguments to update or create a GiftTransaction.
     * @example
     * // Update or create a GiftTransaction
     * const giftTransaction = await prisma.giftTransaction.upsert({
     *   create: {
     *     // ... data to create a GiftTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GiftTransaction we want to update
     *   }
     * })
    **/
    upsert<T extends GiftTransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GiftTransactionUpsertArgs<ExtArgs>>
    ): Prisma__GiftTransactionClient<$Result.GetResult<Prisma.$GiftTransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GiftTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftTransactionCountArgs} args - Arguments to filter GiftTransactions to count.
     * @example
     * // Count the number of GiftTransactions
     * const count = await prisma.giftTransaction.count({
     *   where: {
     *     // ... the filter for the GiftTransactions we want to count
     *   }
     * })
    **/
    count<T extends GiftTransactionCountArgs>(
      args?: Subset<T, GiftTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiftTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GiftTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GiftTransactionAggregateArgs>(args: Subset<T, GiftTransactionAggregateArgs>): Prisma.PrismaPromise<GetGiftTransactionAggregateType<T>>

    /**
     * Group by GiftTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiftTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GiftTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GiftTransactionGroupByArgs['orderBy'] }
        : { orderBy?: GiftTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GiftTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiftTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GiftTransaction model
   */
  readonly fields: GiftTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GiftTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GiftTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    giftItem<T extends GiftItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GiftItemDefaultArgs<ExtArgs>>): Prisma__GiftItemClient<$Result.GetResult<Prisma.$GiftItemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    sender<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    receiver<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GiftTransaction model
   */ 
  interface GiftTransactionFieldRefs {
    readonly id: FieldRef<"GiftTransaction", 'String'>
    readonly senderAccountId: FieldRef<"GiftTransaction", 'String'>
    readonly receiverAccountId: FieldRef<"GiftTransaction", 'String'>
    readonly coinAmount: FieldRef<"GiftTransaction", 'BigInt'>
    readonly createdAt: FieldRef<"GiftTransaction", 'DateTime'>
    readonly giftItemId: FieldRef<"GiftTransaction", 'String'>
  }
    

  // Custom InputTypes

  /**
   * GiftTransaction findUnique
   */
  export type GiftTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftTransaction
     */
    select?: GiftTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GiftTransaction to fetch.
     */
    where: GiftTransactionWhereUniqueInput
  }


  /**
   * GiftTransaction findUniqueOrThrow
   */
  export type GiftTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftTransaction
     */
    select?: GiftTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GiftTransaction to fetch.
     */
    where: GiftTransactionWhereUniqueInput
  }


  /**
   * GiftTransaction findFirst
   */
  export type GiftTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftTransaction
     */
    select?: GiftTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GiftTransaction to fetch.
     */
    where?: GiftTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftTransactions to fetch.
     */
    orderBy?: GiftTransactionOrderByWithRelationInput | GiftTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiftTransactions.
     */
    cursor?: GiftTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiftTransactions.
     */
    distinct?: GiftTransactionScalarFieldEnum | GiftTransactionScalarFieldEnum[]
  }


  /**
   * GiftTransaction findFirstOrThrow
   */
  export type GiftTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftTransaction
     */
    select?: GiftTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GiftTransaction to fetch.
     */
    where?: GiftTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftTransactions to fetch.
     */
    orderBy?: GiftTransactionOrderByWithRelationInput | GiftTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiftTransactions.
     */
    cursor?: GiftTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiftTransactions.
     */
    distinct?: GiftTransactionScalarFieldEnum | GiftTransactionScalarFieldEnum[]
  }


  /**
   * GiftTransaction findMany
   */
  export type GiftTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftTransaction
     */
    select?: GiftTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GiftTransactions to fetch.
     */
    where?: GiftTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiftTransactions to fetch.
     */
    orderBy?: GiftTransactionOrderByWithRelationInput | GiftTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GiftTransactions.
     */
    cursor?: GiftTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiftTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiftTransactions.
     */
    skip?: number
    distinct?: GiftTransactionScalarFieldEnum | GiftTransactionScalarFieldEnum[]
  }


  /**
   * GiftTransaction create
   */
  export type GiftTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftTransaction
     */
    select?: GiftTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a GiftTransaction.
     */
    data: XOR<GiftTransactionCreateInput, GiftTransactionUncheckedCreateInput>
  }


  /**
   * GiftTransaction createMany
   */
  export type GiftTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GiftTransactions.
     */
    data: GiftTransactionCreateManyInput | GiftTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GiftTransaction update
   */
  export type GiftTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftTransaction
     */
    select?: GiftTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a GiftTransaction.
     */
    data: XOR<GiftTransactionUpdateInput, GiftTransactionUncheckedUpdateInput>
    /**
     * Choose, which GiftTransaction to update.
     */
    where: GiftTransactionWhereUniqueInput
  }


  /**
   * GiftTransaction updateMany
   */
  export type GiftTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GiftTransactions.
     */
    data: XOR<GiftTransactionUpdateManyMutationInput, GiftTransactionUncheckedUpdateManyInput>
    /**
     * Filter which GiftTransactions to update
     */
    where?: GiftTransactionWhereInput
  }


  /**
   * GiftTransaction upsert
   */
  export type GiftTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftTransaction
     */
    select?: GiftTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the GiftTransaction to update in case it exists.
     */
    where: GiftTransactionWhereUniqueInput
    /**
     * In case the GiftTransaction found by the `where` argument doesn't exist, create a new GiftTransaction with this data.
     */
    create: XOR<GiftTransactionCreateInput, GiftTransactionUncheckedCreateInput>
    /**
     * In case the GiftTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GiftTransactionUpdateInput, GiftTransactionUncheckedUpdateInput>
  }


  /**
   * GiftTransaction delete
   */
  export type GiftTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftTransaction
     */
    select?: GiftTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftTransactionInclude<ExtArgs> | null
    /**
     * Filter which GiftTransaction to delete.
     */
    where: GiftTransactionWhereUniqueInput
  }


  /**
   * GiftTransaction deleteMany
   */
  export type GiftTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiftTransactions to delete
     */
    where?: GiftTransactionWhereInput
  }


  /**
   * GiftTransaction without action
   */
  export type GiftTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftTransaction
     */
    select?: GiftTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftTransactionInclude<ExtArgs> | null
  }



  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    email: string | null
    role: $Enums.PersonRole | null
    password: string | null
    createdAt: Date | null
    activatedAt: Date | null
    updatedAt: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    email: string | null
    role: $Enums.PersonRole | null
    password: string | null
    createdAt: Date | null
    activatedAt: Date | null
    updatedAt: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    email: number
    role: number
    password: number
    createdAt: number
    activatedAt: number
    updatedAt: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    email?: true
    role?: true
    password?: true
    createdAt?: true
    activatedAt?: true
    updatedAt?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    email?: true
    role?: true
    password?: true
    createdAt?: true
    activatedAt?: true
    updatedAt?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    email?: true
    role?: true
    password?: true
    createdAt?: true
    activatedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: string
    email: string
    role: $Enums.PersonRole
    password: string
    createdAt: Date
    activatedAt: Date
    updatedAt: Date
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    activatedAt?: boolean
    updatedAt?: boolean
    coinTransactions?: boolean | Person$coinTransactionsArgs<ExtArgs>
    giftTransactionsSender?: boolean | Person$giftTransactionsSenderArgs<ExtArgs>
    giftTransactionReceiver?: boolean | Person$giftTransactionReceiverArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    activatedAt?: boolean
    updatedAt?: boolean
  }

  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coinTransactions?: boolean | Person$coinTransactionsArgs<ExtArgs>
    giftTransactionsSender?: boolean | Person$giftTransactionsSenderArgs<ExtArgs>
    giftTransactionReceiver?: boolean | Person$giftTransactionReceiverArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      coinTransactions: Prisma.$CoinTransactionPayload<ExtArgs>[]
      giftTransactionsSender: Prisma.$GiftTransactionPayload<ExtArgs>[]
      giftTransactionReceiver: Prisma.$GiftTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      role: $Enums.PersonRole
      password: string
      createdAt: Date
      activatedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["person"]>
    composites: {}
  }


  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PersonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Person that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PersonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PersonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
    **/
    create<T extends PersonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PersonCreateArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many People.
     *     @param {PersonCreateManyArgs} args - Arguments to create many People.
     *     @example
     *     // Create many People
     *     const person = await prisma.person.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PersonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
    **/
    delete<T extends PersonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PersonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PersonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PersonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
    **/
    upsert<T extends PersonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>
    ): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    coinTransactions<T extends Person$coinTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Person$coinTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    giftTransactionsSender<T extends Person$giftTransactionsSenderArgs<ExtArgs> = {}>(args?: Subset<T, Person$giftTransactionsSenderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    giftTransactionReceiver<T extends Person$giftTransactionReceiverArgs<ExtArgs> = {}>(args?: Subset<T, Person$giftTransactionReceiverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiftTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Person model
   */ 
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'String'>
    readonly email: FieldRef<"Person", 'String'>
    readonly role: FieldRef<"Person", 'PersonRole'>
    readonly password: FieldRef<"Person", 'String'>
    readonly createdAt: FieldRef<"Person", 'DateTime'>
    readonly activatedAt: FieldRef<"Person", 'DateTime'>
    readonly updatedAt: FieldRef<"Person", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }


  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }


  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }


  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }


  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
  }


  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }


  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
  }


  /**
   * Person.coinTransactions
   */
  export type Person$coinTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    where?: CoinTransactionWhereInput
    orderBy?: CoinTransactionOrderByWithRelationInput | CoinTransactionOrderByWithRelationInput[]
    cursor?: CoinTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoinTransactionScalarFieldEnum | CoinTransactionScalarFieldEnum[]
  }


  /**
   * Person.giftTransactionsSender
   */
  export type Person$giftTransactionsSenderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftTransaction
     */
    select?: GiftTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftTransactionInclude<ExtArgs> | null
    where?: GiftTransactionWhereInput
    orderBy?: GiftTransactionOrderByWithRelationInput | GiftTransactionOrderByWithRelationInput[]
    cursor?: GiftTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftTransactionScalarFieldEnum | GiftTransactionScalarFieldEnum[]
  }


  /**
   * Person.giftTransactionReceiver
   */
  export type Person$giftTransactionReceiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiftTransaction
     */
    select?: GiftTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GiftTransactionInclude<ExtArgs> | null
    where?: GiftTransactionWhereInput
    orderBy?: GiftTransactionOrderByWithRelationInput | GiftTransactionOrderByWithRelationInput[]
    cursor?: GiftTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiftTransactionScalarFieldEnum | GiftTransactionScalarFieldEnum[]
  }


  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CoinTransactionScalarFieldEnum: {
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

  export type CoinTransactionScalarFieldEnum = (typeof CoinTransactionScalarFieldEnum)[keyof typeof CoinTransactionScalarFieldEnum]


  export const CoinTransactionTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    feePercentage: 'feePercentage',
    createdAt: 'createdAt'
  };

  export type CoinTransactionTypeScalarFieldEnum = (typeof CoinTransactionTypeScalarFieldEnum)[keyof typeof CoinTransactionTypeScalarFieldEnum]


  export const GiftItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    coinAmount: 'coinAmount',
    imagePath: 'imagePath',
    createdAt: 'createdAt'
  };

  export type GiftItemScalarFieldEnum = (typeof GiftItemScalarFieldEnum)[keyof typeof GiftItemScalarFieldEnum]


  export const GiftTransactionScalarFieldEnum: {
    id: 'id',
    senderAccountId: 'senderAccountId',
    receiverAccountId: 'receiverAccountId',
    coinAmount: 'coinAmount',
    createdAt: 'createdAt',
    giftItemId: 'giftItemId'
  };

  export type GiftTransactionScalarFieldEnum = (typeof GiftTransactionScalarFieldEnum)[keyof typeof GiftTransactionScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    email: 'email',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt',
    activatedAt: 'activatedAt',
    updatedAt: 'updatedAt'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CoinTransactionStatus'
   */
  export type EnumCoinTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoinTransactionStatus'>
    


  /**
   * Reference to a field of type 'CoinTransactionStatus[]'
   */
  export type ListEnumCoinTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoinTransactionStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PersonRole'
   */
  export type EnumPersonRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PersonRole'>
    


  /**
   * Reference to a field of type 'PersonRole[]'
   */
  export type ListEnumPersonRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PersonRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CoinTransactionWhereInput = {
    AND?: CoinTransactionWhereInput | CoinTransactionWhereInput[]
    OR?: CoinTransactionWhereInput[]
    NOT?: CoinTransactionWhereInput | CoinTransactionWhereInput[]
    id?: UuidFilter<"CoinTransaction"> | string
    userAccountId?: UuidFilter<"CoinTransaction"> | string
    coinAmount?: BigIntFilter<"CoinTransaction"> | bigint | number
    moneyAmount?: IntFilter<"CoinTransaction"> | number
    transactionFee?: IntFilter<"CoinTransaction"> | number
    status?: EnumCoinTransactionStatusFilter<"CoinTransaction"> | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntFilter<"CoinTransaction"> | bigint | number
    createdAt?: DateTimeFilter<"CoinTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"CoinTransaction"> | Date | string
    transactionTypeId?: IntFilter<"CoinTransaction"> | number
    coinTransactionType?: XOR<CoinTransactionTypeNullableRelationFilter, CoinTransactionTypeWhereInput> | null
    user?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type CoinTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userAccountId?: SortOrder
    coinAmount?: SortOrder
    moneyAmount?: SortOrder
    transactionFee?: SortOrder
    status?: SortOrder
    bankAccountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactionTypeId?: SortOrder
    coinTransactionType?: CoinTransactionTypeOrderByWithRelationInput
    user?: PersonOrderByWithRelationInput
  }

  export type CoinTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoinTransactionWhereInput | CoinTransactionWhereInput[]
    OR?: CoinTransactionWhereInput[]
    NOT?: CoinTransactionWhereInput | CoinTransactionWhereInput[]
    userAccountId?: UuidFilter<"CoinTransaction"> | string
    coinAmount?: BigIntFilter<"CoinTransaction"> | bigint | number
    moneyAmount?: IntFilter<"CoinTransaction"> | number
    transactionFee?: IntFilter<"CoinTransaction"> | number
    status?: EnumCoinTransactionStatusFilter<"CoinTransaction"> | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntFilter<"CoinTransaction"> | bigint | number
    createdAt?: DateTimeFilter<"CoinTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"CoinTransaction"> | Date | string
    transactionTypeId?: IntFilter<"CoinTransaction"> | number
    coinTransactionType?: XOR<CoinTransactionTypeNullableRelationFilter, CoinTransactionTypeWhereInput> | null
    user?: XOR<PersonRelationFilter, PersonWhereInput>
  }, "id">

  export type CoinTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userAccountId?: SortOrder
    coinAmount?: SortOrder
    moneyAmount?: SortOrder
    transactionFee?: SortOrder
    status?: SortOrder
    bankAccountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactionTypeId?: SortOrder
    _count?: CoinTransactionCountOrderByAggregateInput
    _avg?: CoinTransactionAvgOrderByAggregateInput
    _max?: CoinTransactionMaxOrderByAggregateInput
    _min?: CoinTransactionMinOrderByAggregateInput
    _sum?: CoinTransactionSumOrderByAggregateInput
  }

  export type CoinTransactionScalarWhereWithAggregatesInput = {
    AND?: CoinTransactionScalarWhereWithAggregatesInput | CoinTransactionScalarWhereWithAggregatesInput[]
    OR?: CoinTransactionScalarWhereWithAggregatesInput[]
    NOT?: CoinTransactionScalarWhereWithAggregatesInput | CoinTransactionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CoinTransaction"> | string
    userAccountId?: UuidWithAggregatesFilter<"CoinTransaction"> | string
    coinAmount?: BigIntWithAggregatesFilter<"CoinTransaction"> | bigint | number
    moneyAmount?: IntWithAggregatesFilter<"CoinTransaction"> | number
    transactionFee?: IntWithAggregatesFilter<"CoinTransaction"> | number
    status?: EnumCoinTransactionStatusWithAggregatesFilter<"CoinTransaction"> | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntWithAggregatesFilter<"CoinTransaction"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"CoinTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CoinTransaction"> | Date | string
    transactionTypeId?: IntWithAggregatesFilter<"CoinTransaction"> | number
  }

  export type CoinTransactionTypeWhereInput = {
    AND?: CoinTransactionTypeWhereInput | CoinTransactionTypeWhereInput[]
    OR?: CoinTransactionTypeWhereInput[]
    NOT?: CoinTransactionTypeWhereInput | CoinTransactionTypeWhereInput[]
    id?: IntFilter<"CoinTransactionType"> | number
    name?: StringFilter<"CoinTransactionType"> | string
    feePercentage?: IntFilter<"CoinTransactionType"> | number
    createdAt?: DateTimeFilter<"CoinTransactionType"> | Date | string
    coinTransactions?: CoinTransactionListRelationFilter
  }

  export type CoinTransactionTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    feePercentage?: SortOrder
    createdAt?: SortOrder
    coinTransactions?: CoinTransactionOrderByRelationAggregateInput
  }

  export type CoinTransactionTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CoinTransactionTypeWhereInput | CoinTransactionTypeWhereInput[]
    OR?: CoinTransactionTypeWhereInput[]
    NOT?: CoinTransactionTypeWhereInput | CoinTransactionTypeWhereInput[]
    feePercentage?: IntFilter<"CoinTransactionType"> | number
    createdAt?: DateTimeFilter<"CoinTransactionType"> | Date | string
    coinTransactions?: CoinTransactionListRelationFilter
  }, "id" | "name">

  export type CoinTransactionTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    feePercentage?: SortOrder
    createdAt?: SortOrder
    _count?: CoinTransactionTypeCountOrderByAggregateInput
    _avg?: CoinTransactionTypeAvgOrderByAggregateInput
    _max?: CoinTransactionTypeMaxOrderByAggregateInput
    _min?: CoinTransactionTypeMinOrderByAggregateInput
    _sum?: CoinTransactionTypeSumOrderByAggregateInput
  }

  export type CoinTransactionTypeScalarWhereWithAggregatesInput = {
    AND?: CoinTransactionTypeScalarWhereWithAggregatesInput | CoinTransactionTypeScalarWhereWithAggregatesInput[]
    OR?: CoinTransactionTypeScalarWhereWithAggregatesInput[]
    NOT?: CoinTransactionTypeScalarWhereWithAggregatesInput | CoinTransactionTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CoinTransactionType"> | number
    name?: StringWithAggregatesFilter<"CoinTransactionType"> | string
    feePercentage?: IntWithAggregatesFilter<"CoinTransactionType"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CoinTransactionType"> | Date | string
  }

  export type GiftItemWhereInput = {
    AND?: GiftItemWhereInput | GiftItemWhereInput[]
    OR?: GiftItemWhereInput[]
    NOT?: GiftItemWhereInput | GiftItemWhereInput[]
    id?: UuidFilter<"GiftItem"> | string
    name?: StringFilter<"GiftItem"> | string
    coinAmount?: BigIntFilter<"GiftItem"> | bigint | number
    imagePath?: StringFilter<"GiftItem"> | string
    createdAt?: DateTimeFilter<"GiftItem"> | Date | string
    giftTransactions?: GiftTransactionListRelationFilter
  }

  export type GiftItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    coinAmount?: SortOrder
    imagePath?: SortOrder
    createdAt?: SortOrder
    giftTransactions?: GiftTransactionOrderByRelationAggregateInput
  }

  export type GiftItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GiftItemWhereInput | GiftItemWhereInput[]
    OR?: GiftItemWhereInput[]
    NOT?: GiftItemWhereInput | GiftItemWhereInput[]
    name?: StringFilter<"GiftItem"> | string
    coinAmount?: BigIntFilter<"GiftItem"> | bigint | number
    imagePath?: StringFilter<"GiftItem"> | string
    createdAt?: DateTimeFilter<"GiftItem"> | Date | string
    giftTransactions?: GiftTransactionListRelationFilter
  }, "id">

  export type GiftItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    coinAmount?: SortOrder
    imagePath?: SortOrder
    createdAt?: SortOrder
    _count?: GiftItemCountOrderByAggregateInput
    _avg?: GiftItemAvgOrderByAggregateInput
    _max?: GiftItemMaxOrderByAggregateInput
    _min?: GiftItemMinOrderByAggregateInput
    _sum?: GiftItemSumOrderByAggregateInput
  }

  export type GiftItemScalarWhereWithAggregatesInput = {
    AND?: GiftItemScalarWhereWithAggregatesInput | GiftItemScalarWhereWithAggregatesInput[]
    OR?: GiftItemScalarWhereWithAggregatesInput[]
    NOT?: GiftItemScalarWhereWithAggregatesInput | GiftItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GiftItem"> | string
    name?: StringWithAggregatesFilter<"GiftItem"> | string
    coinAmount?: BigIntWithAggregatesFilter<"GiftItem"> | bigint | number
    imagePath?: StringWithAggregatesFilter<"GiftItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GiftItem"> | Date | string
  }

  export type GiftTransactionWhereInput = {
    AND?: GiftTransactionWhereInput | GiftTransactionWhereInput[]
    OR?: GiftTransactionWhereInput[]
    NOT?: GiftTransactionWhereInput | GiftTransactionWhereInput[]
    id?: UuidFilter<"GiftTransaction"> | string
    senderAccountId?: UuidFilter<"GiftTransaction"> | string
    receiverAccountId?: UuidFilter<"GiftTransaction"> | string
    coinAmount?: BigIntFilter<"GiftTransaction"> | bigint | number
    createdAt?: DateTimeFilter<"GiftTransaction"> | Date | string
    giftItemId?: UuidFilter<"GiftTransaction"> | string
    giftItem?: XOR<GiftItemRelationFilter, GiftItemWhereInput>
    sender?: XOR<PersonRelationFilter, PersonWhereInput>
    receiver?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type GiftTransactionOrderByWithRelationInput = {
    id?: SortOrder
    senderAccountId?: SortOrder
    receiverAccountId?: SortOrder
    coinAmount?: SortOrder
    createdAt?: SortOrder
    giftItemId?: SortOrder
    giftItem?: GiftItemOrderByWithRelationInput
    sender?: PersonOrderByWithRelationInput
    receiver?: PersonOrderByWithRelationInput
  }

  export type GiftTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GiftTransactionWhereInput | GiftTransactionWhereInput[]
    OR?: GiftTransactionWhereInput[]
    NOT?: GiftTransactionWhereInput | GiftTransactionWhereInput[]
    senderAccountId?: UuidFilter<"GiftTransaction"> | string
    receiverAccountId?: UuidFilter<"GiftTransaction"> | string
    coinAmount?: BigIntFilter<"GiftTransaction"> | bigint | number
    createdAt?: DateTimeFilter<"GiftTransaction"> | Date | string
    giftItemId?: UuidFilter<"GiftTransaction"> | string
    giftItem?: XOR<GiftItemRelationFilter, GiftItemWhereInput>
    sender?: XOR<PersonRelationFilter, PersonWhereInput>
    receiver?: XOR<PersonRelationFilter, PersonWhereInput>
  }, "id">

  export type GiftTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    senderAccountId?: SortOrder
    receiverAccountId?: SortOrder
    coinAmount?: SortOrder
    createdAt?: SortOrder
    giftItemId?: SortOrder
    _count?: GiftTransactionCountOrderByAggregateInput
    _avg?: GiftTransactionAvgOrderByAggregateInput
    _max?: GiftTransactionMaxOrderByAggregateInput
    _min?: GiftTransactionMinOrderByAggregateInput
    _sum?: GiftTransactionSumOrderByAggregateInput
  }

  export type GiftTransactionScalarWhereWithAggregatesInput = {
    AND?: GiftTransactionScalarWhereWithAggregatesInput | GiftTransactionScalarWhereWithAggregatesInput[]
    OR?: GiftTransactionScalarWhereWithAggregatesInput[]
    NOT?: GiftTransactionScalarWhereWithAggregatesInput | GiftTransactionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GiftTransaction"> | string
    senderAccountId?: UuidWithAggregatesFilter<"GiftTransaction"> | string
    receiverAccountId?: UuidWithAggregatesFilter<"GiftTransaction"> | string
    coinAmount?: BigIntWithAggregatesFilter<"GiftTransaction"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"GiftTransaction"> | Date | string
    giftItemId?: UuidWithAggregatesFilter<"GiftTransaction"> | string
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: UuidFilter<"Person"> | string
    email?: StringFilter<"Person"> | string
    role?: EnumPersonRoleFilter<"Person"> | $Enums.PersonRole
    password?: StringFilter<"Person"> | string
    createdAt?: DateTimeFilter<"Person"> | Date | string
    activatedAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    coinTransactions?: CoinTransactionListRelationFilter
    giftTransactionsSender?: GiftTransactionListRelationFilter
    giftTransactionReceiver?: GiftTransactionListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    activatedAt?: SortOrder
    updatedAt?: SortOrder
    coinTransactions?: CoinTransactionOrderByRelationAggregateInput
    giftTransactionsSender?: GiftTransactionOrderByRelationAggregateInput
    giftTransactionReceiver?: GiftTransactionOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    role?: EnumPersonRoleFilter<"Person"> | $Enums.PersonRole
    password?: StringFilter<"Person"> | string
    createdAt?: DateTimeFilter<"Person"> | Date | string
    activatedAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    coinTransactions?: CoinTransactionListRelationFilter
    giftTransactionsSender?: GiftTransactionListRelationFilter
    giftTransactionReceiver?: GiftTransactionListRelationFilter
  }, "id" | "email">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    activatedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Person"> | string
    email?: StringWithAggregatesFilter<"Person"> | string
    role?: EnumPersonRoleWithAggregatesFilter<"Person"> | $Enums.PersonRole
    password?: StringWithAggregatesFilter<"Person"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    activatedAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
  }

  export type CoinTransactionCreateInput = {
    id?: string
    coinAmount: bigint | number
    moneyAmount: number
    transactionFee: number
    status?: $Enums.CoinTransactionStatus
    bankAccountNumber: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    coinTransactionType?: CoinTransactionTypeCreateNestedOneWithoutCoinTransactionsInput
    user: PersonCreateNestedOneWithoutCoinTransactionsInput
  }

  export type CoinTransactionUncheckedCreateInput = {
    id?: string
    userAccountId: string
    coinAmount: bigint | number
    moneyAmount: number
    transactionFee: number
    status?: $Enums.CoinTransactionStatus
    bankAccountNumber: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactionTypeId: number
  }

  export type CoinTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    moneyAmount?: IntFieldUpdateOperationsInput | number
    transactionFee?: IntFieldUpdateOperationsInput | number
    status?: EnumCoinTransactionStatusFieldUpdateOperationsInput | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinTransactionType?: CoinTransactionTypeUpdateOneWithoutCoinTransactionsNestedInput
    user?: PersonUpdateOneRequiredWithoutCoinTransactionsNestedInput
  }

  export type CoinTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAccountId?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    moneyAmount?: IntFieldUpdateOperationsInput | number
    transactionFee?: IntFieldUpdateOperationsInput | number
    status?: EnumCoinTransactionStatusFieldUpdateOperationsInput | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type CoinTransactionCreateManyInput = {
    id?: string
    userAccountId: string
    coinAmount: bigint | number
    moneyAmount: number
    transactionFee: number
    status?: $Enums.CoinTransactionStatus
    bankAccountNumber: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactionTypeId: number
  }

  export type CoinTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    moneyAmount?: IntFieldUpdateOperationsInput | number
    transactionFee?: IntFieldUpdateOperationsInput | number
    status?: EnumCoinTransactionStatusFieldUpdateOperationsInput | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAccountId?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    moneyAmount?: IntFieldUpdateOperationsInput | number
    transactionFee?: IntFieldUpdateOperationsInput | number
    status?: EnumCoinTransactionStatusFieldUpdateOperationsInput | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type CoinTransactionTypeCreateInput = {
    name: string
    feePercentage: number
    createdAt?: Date | string
    coinTransactions?: CoinTransactionCreateNestedManyWithoutCoinTransactionTypeInput
  }

  export type CoinTransactionTypeUncheckedCreateInput = {
    id?: number
    name: string
    feePercentage: number
    createdAt?: Date | string
    coinTransactions?: CoinTransactionUncheckedCreateNestedManyWithoutCoinTransactionTypeInput
  }

  export type CoinTransactionTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    feePercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinTransactions?: CoinTransactionUpdateManyWithoutCoinTransactionTypeNestedInput
  }

  export type CoinTransactionTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    feePercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinTransactions?: CoinTransactionUncheckedUpdateManyWithoutCoinTransactionTypeNestedInput
  }

  export type CoinTransactionTypeCreateManyInput = {
    id?: number
    name: string
    feePercentage: number
    createdAt?: Date | string
  }

  export type CoinTransactionTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    feePercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinTransactionTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    feePercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftItemCreateInput = {
    id?: string
    name: string
    coinAmount: bigint | number
    imagePath: string
    createdAt?: Date | string
    giftTransactions?: GiftTransactionCreateNestedManyWithoutGiftItemInput
  }

  export type GiftItemUncheckedCreateInput = {
    id?: string
    name: string
    coinAmount: bigint | number
    imagePath: string
    createdAt?: Date | string
    giftTransactions?: GiftTransactionUncheckedCreateNestedManyWithoutGiftItemInput
  }

  export type GiftItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giftTransactions?: GiftTransactionUpdateManyWithoutGiftItemNestedInput
  }

  export type GiftItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giftTransactions?: GiftTransactionUncheckedUpdateManyWithoutGiftItemNestedInput
  }

  export type GiftItemCreateManyInput = {
    id?: string
    name: string
    coinAmount: bigint | number
    imagePath: string
    createdAt?: Date | string
  }

  export type GiftItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftTransactionCreateInput = {
    id?: string
    coinAmount: bigint | number
    createdAt?: Date | string
    giftItem: GiftItemCreateNestedOneWithoutGiftTransactionsInput
    sender: PersonCreateNestedOneWithoutGiftTransactionsSenderInput
    receiver: PersonCreateNestedOneWithoutGiftTransactionReceiverInput
  }

  export type GiftTransactionUncheckedCreateInput = {
    id?: string
    senderAccountId: string
    receiverAccountId: string
    coinAmount: bigint | number
    createdAt?: Date | string
    giftItemId: string
  }

  export type GiftTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giftItem?: GiftItemUpdateOneRequiredWithoutGiftTransactionsNestedInput
    sender?: PersonUpdateOneRequiredWithoutGiftTransactionsSenderNestedInput
    receiver?: PersonUpdateOneRequiredWithoutGiftTransactionReceiverNestedInput
  }

  export type GiftTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderAccountId?: StringFieldUpdateOperationsInput | string
    receiverAccountId?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giftItemId?: StringFieldUpdateOperationsInput | string
  }

  export type GiftTransactionCreateManyInput = {
    id?: string
    senderAccountId: string
    receiverAccountId: string
    coinAmount: bigint | number
    createdAt?: Date | string
    giftItemId: string
  }

  export type GiftTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderAccountId?: StringFieldUpdateOperationsInput | string
    receiverAccountId?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giftItemId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonCreateInput = {
    id?: string
    email: string
    role?: $Enums.PersonRole
    password: string
    createdAt?: Date | string
    activatedAt: Date | string
    updatedAt?: Date | string
    coinTransactions?: CoinTransactionCreateNestedManyWithoutUserInput
    giftTransactionsSender?: GiftTransactionCreateNestedManyWithoutSenderInput
    giftTransactionReceiver?: GiftTransactionCreateNestedManyWithoutReceiverInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    email: string
    role?: $Enums.PersonRole
    password: string
    createdAt?: Date | string
    activatedAt: Date | string
    updatedAt?: Date | string
    coinTransactions?: CoinTransactionUncheckedCreateNestedManyWithoutUserInput
    giftTransactionsSender?: GiftTransactionUncheckedCreateNestedManyWithoutSenderInput
    giftTransactionReceiver?: GiftTransactionUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumPersonRoleFieldUpdateOperationsInput | $Enums.PersonRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinTransactions?: CoinTransactionUpdateManyWithoutUserNestedInput
    giftTransactionsSender?: GiftTransactionUpdateManyWithoutSenderNestedInput
    giftTransactionReceiver?: GiftTransactionUpdateManyWithoutReceiverNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumPersonRoleFieldUpdateOperationsInput | $Enums.PersonRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinTransactions?: CoinTransactionUncheckedUpdateManyWithoutUserNestedInput
    giftTransactionsSender?: GiftTransactionUncheckedUpdateManyWithoutSenderNestedInput
    giftTransactionReceiver?: GiftTransactionUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    email: string
    role?: $Enums.PersonRole
    password: string
    createdAt?: Date | string
    activatedAt: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumPersonRoleFieldUpdateOperationsInput | $Enums.PersonRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumPersonRoleFieldUpdateOperationsInput | $Enums.PersonRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumCoinTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CoinTransactionStatus | EnumCoinTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CoinTransactionStatus[] | ListEnumCoinTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoinTransactionStatus[] | ListEnumCoinTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCoinTransactionStatusFilter<$PrismaModel> | $Enums.CoinTransactionStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CoinTransactionTypeNullableRelationFilter = {
    is?: CoinTransactionTypeWhereInput | null
    isNot?: CoinTransactionTypeWhereInput | null
  }

  export type PersonRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type CoinTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userAccountId?: SortOrder
    coinAmount?: SortOrder
    moneyAmount?: SortOrder
    transactionFee?: SortOrder
    status?: SortOrder
    bankAccountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactionTypeId?: SortOrder
  }

  export type CoinTransactionAvgOrderByAggregateInput = {
    coinAmount?: SortOrder
    moneyAmount?: SortOrder
    transactionFee?: SortOrder
    bankAccountNumber?: SortOrder
    transactionTypeId?: SortOrder
  }

  export type CoinTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userAccountId?: SortOrder
    coinAmount?: SortOrder
    moneyAmount?: SortOrder
    transactionFee?: SortOrder
    status?: SortOrder
    bankAccountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactionTypeId?: SortOrder
  }

  export type CoinTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userAccountId?: SortOrder
    coinAmount?: SortOrder
    moneyAmount?: SortOrder
    transactionFee?: SortOrder
    status?: SortOrder
    bankAccountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactionTypeId?: SortOrder
  }

  export type CoinTransactionSumOrderByAggregateInput = {
    coinAmount?: SortOrder
    moneyAmount?: SortOrder
    transactionFee?: SortOrder
    bankAccountNumber?: SortOrder
    transactionTypeId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumCoinTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoinTransactionStatus | EnumCoinTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CoinTransactionStatus[] | ListEnumCoinTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoinTransactionStatus[] | ListEnumCoinTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCoinTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CoinTransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoinTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumCoinTransactionStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CoinTransactionListRelationFilter = {
    every?: CoinTransactionWhereInput
    some?: CoinTransactionWhereInput
    none?: CoinTransactionWhereInput
  }

  export type CoinTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoinTransactionTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    feePercentage?: SortOrder
    createdAt?: SortOrder
  }

  export type CoinTransactionTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    feePercentage?: SortOrder
  }

  export type CoinTransactionTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    feePercentage?: SortOrder
    createdAt?: SortOrder
  }

  export type CoinTransactionTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    feePercentage?: SortOrder
    createdAt?: SortOrder
  }

  export type CoinTransactionTypeSumOrderByAggregateInput = {
    id?: SortOrder
    feePercentage?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type GiftTransactionListRelationFilter = {
    every?: GiftTransactionWhereInput
    some?: GiftTransactionWhereInput
    none?: GiftTransactionWhereInput
  }

  export type GiftTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GiftItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coinAmount?: SortOrder
    imagePath?: SortOrder
    createdAt?: SortOrder
  }

  export type GiftItemAvgOrderByAggregateInput = {
    coinAmount?: SortOrder
  }

  export type GiftItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coinAmount?: SortOrder
    imagePath?: SortOrder
    createdAt?: SortOrder
  }

  export type GiftItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coinAmount?: SortOrder
    imagePath?: SortOrder
    createdAt?: SortOrder
  }

  export type GiftItemSumOrderByAggregateInput = {
    coinAmount?: SortOrder
  }

  export type GiftItemRelationFilter = {
    is?: GiftItemWhereInput
    isNot?: GiftItemWhereInput
  }

  export type GiftTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    senderAccountId?: SortOrder
    receiverAccountId?: SortOrder
    coinAmount?: SortOrder
    createdAt?: SortOrder
    giftItemId?: SortOrder
  }

  export type GiftTransactionAvgOrderByAggregateInput = {
    coinAmount?: SortOrder
  }

  export type GiftTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    senderAccountId?: SortOrder
    receiverAccountId?: SortOrder
    coinAmount?: SortOrder
    createdAt?: SortOrder
    giftItemId?: SortOrder
  }

  export type GiftTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    senderAccountId?: SortOrder
    receiverAccountId?: SortOrder
    coinAmount?: SortOrder
    createdAt?: SortOrder
    giftItemId?: SortOrder
  }

  export type GiftTransactionSumOrderByAggregateInput = {
    coinAmount?: SortOrder
  }

  export type EnumPersonRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonRole | EnumPersonRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PersonRole[] | ListEnumPersonRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PersonRole[] | ListEnumPersonRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonRoleFilter<$PrismaModel> | $Enums.PersonRole
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    activatedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    activatedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    activatedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPersonRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonRole | EnumPersonRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PersonRole[] | ListEnumPersonRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PersonRole[] | ListEnumPersonRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonRoleWithAggregatesFilter<$PrismaModel> | $Enums.PersonRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPersonRoleFilter<$PrismaModel>
    _max?: NestedEnumPersonRoleFilter<$PrismaModel>
  }

  export type CoinTransactionTypeCreateNestedOneWithoutCoinTransactionsInput = {
    create?: XOR<CoinTransactionTypeCreateWithoutCoinTransactionsInput, CoinTransactionTypeUncheckedCreateWithoutCoinTransactionsInput>
    connectOrCreate?: CoinTransactionTypeCreateOrConnectWithoutCoinTransactionsInput
    connect?: CoinTransactionTypeWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutCoinTransactionsInput = {
    create?: XOR<PersonCreateWithoutCoinTransactionsInput, PersonUncheckedCreateWithoutCoinTransactionsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCoinTransactionsInput
    connect?: PersonWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCoinTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.CoinTransactionStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CoinTransactionTypeUpdateOneWithoutCoinTransactionsNestedInput = {
    create?: XOR<CoinTransactionTypeCreateWithoutCoinTransactionsInput, CoinTransactionTypeUncheckedCreateWithoutCoinTransactionsInput>
    connectOrCreate?: CoinTransactionTypeCreateOrConnectWithoutCoinTransactionsInput
    upsert?: CoinTransactionTypeUpsertWithoutCoinTransactionsInput
    disconnect?: CoinTransactionTypeWhereInput | boolean
    delete?: CoinTransactionTypeWhereInput | boolean
    connect?: CoinTransactionTypeWhereUniqueInput
    update?: XOR<XOR<CoinTransactionTypeUpdateToOneWithWhereWithoutCoinTransactionsInput, CoinTransactionTypeUpdateWithoutCoinTransactionsInput>, CoinTransactionTypeUncheckedUpdateWithoutCoinTransactionsInput>
  }

  export type PersonUpdateOneRequiredWithoutCoinTransactionsNestedInput = {
    create?: XOR<PersonCreateWithoutCoinTransactionsInput, PersonUncheckedCreateWithoutCoinTransactionsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCoinTransactionsInput
    upsert?: PersonUpsertWithoutCoinTransactionsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutCoinTransactionsInput, PersonUpdateWithoutCoinTransactionsInput>, PersonUncheckedUpdateWithoutCoinTransactionsInput>
  }

  export type CoinTransactionCreateNestedManyWithoutCoinTransactionTypeInput = {
    create?: XOR<CoinTransactionCreateWithoutCoinTransactionTypeInput, CoinTransactionUncheckedCreateWithoutCoinTransactionTypeInput> | CoinTransactionCreateWithoutCoinTransactionTypeInput[] | CoinTransactionUncheckedCreateWithoutCoinTransactionTypeInput[]
    connectOrCreate?: CoinTransactionCreateOrConnectWithoutCoinTransactionTypeInput | CoinTransactionCreateOrConnectWithoutCoinTransactionTypeInput[]
    createMany?: CoinTransactionCreateManyCoinTransactionTypeInputEnvelope
    connect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
  }

  export type CoinTransactionUncheckedCreateNestedManyWithoutCoinTransactionTypeInput = {
    create?: XOR<CoinTransactionCreateWithoutCoinTransactionTypeInput, CoinTransactionUncheckedCreateWithoutCoinTransactionTypeInput> | CoinTransactionCreateWithoutCoinTransactionTypeInput[] | CoinTransactionUncheckedCreateWithoutCoinTransactionTypeInput[]
    connectOrCreate?: CoinTransactionCreateOrConnectWithoutCoinTransactionTypeInput | CoinTransactionCreateOrConnectWithoutCoinTransactionTypeInput[]
    createMany?: CoinTransactionCreateManyCoinTransactionTypeInputEnvelope
    connect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
  }

  export type CoinTransactionUpdateManyWithoutCoinTransactionTypeNestedInput = {
    create?: XOR<CoinTransactionCreateWithoutCoinTransactionTypeInput, CoinTransactionUncheckedCreateWithoutCoinTransactionTypeInput> | CoinTransactionCreateWithoutCoinTransactionTypeInput[] | CoinTransactionUncheckedCreateWithoutCoinTransactionTypeInput[]
    connectOrCreate?: CoinTransactionCreateOrConnectWithoutCoinTransactionTypeInput | CoinTransactionCreateOrConnectWithoutCoinTransactionTypeInput[]
    upsert?: CoinTransactionUpsertWithWhereUniqueWithoutCoinTransactionTypeInput | CoinTransactionUpsertWithWhereUniqueWithoutCoinTransactionTypeInput[]
    createMany?: CoinTransactionCreateManyCoinTransactionTypeInputEnvelope
    set?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    disconnect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    delete?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    connect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    update?: CoinTransactionUpdateWithWhereUniqueWithoutCoinTransactionTypeInput | CoinTransactionUpdateWithWhereUniqueWithoutCoinTransactionTypeInput[]
    updateMany?: CoinTransactionUpdateManyWithWhereWithoutCoinTransactionTypeInput | CoinTransactionUpdateManyWithWhereWithoutCoinTransactionTypeInput[]
    deleteMany?: CoinTransactionScalarWhereInput | CoinTransactionScalarWhereInput[]
  }

  export type CoinTransactionUncheckedUpdateManyWithoutCoinTransactionTypeNestedInput = {
    create?: XOR<CoinTransactionCreateWithoutCoinTransactionTypeInput, CoinTransactionUncheckedCreateWithoutCoinTransactionTypeInput> | CoinTransactionCreateWithoutCoinTransactionTypeInput[] | CoinTransactionUncheckedCreateWithoutCoinTransactionTypeInput[]
    connectOrCreate?: CoinTransactionCreateOrConnectWithoutCoinTransactionTypeInput | CoinTransactionCreateOrConnectWithoutCoinTransactionTypeInput[]
    upsert?: CoinTransactionUpsertWithWhereUniqueWithoutCoinTransactionTypeInput | CoinTransactionUpsertWithWhereUniqueWithoutCoinTransactionTypeInput[]
    createMany?: CoinTransactionCreateManyCoinTransactionTypeInputEnvelope
    set?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    disconnect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    delete?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    connect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    update?: CoinTransactionUpdateWithWhereUniqueWithoutCoinTransactionTypeInput | CoinTransactionUpdateWithWhereUniqueWithoutCoinTransactionTypeInput[]
    updateMany?: CoinTransactionUpdateManyWithWhereWithoutCoinTransactionTypeInput | CoinTransactionUpdateManyWithWhereWithoutCoinTransactionTypeInput[]
    deleteMany?: CoinTransactionScalarWhereInput | CoinTransactionScalarWhereInput[]
  }

  export type GiftTransactionCreateNestedManyWithoutGiftItemInput = {
    create?: XOR<GiftTransactionCreateWithoutGiftItemInput, GiftTransactionUncheckedCreateWithoutGiftItemInput> | GiftTransactionCreateWithoutGiftItemInput[] | GiftTransactionUncheckedCreateWithoutGiftItemInput[]
    connectOrCreate?: GiftTransactionCreateOrConnectWithoutGiftItemInput | GiftTransactionCreateOrConnectWithoutGiftItemInput[]
    createMany?: GiftTransactionCreateManyGiftItemInputEnvelope
    connect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
  }

  export type GiftTransactionUncheckedCreateNestedManyWithoutGiftItemInput = {
    create?: XOR<GiftTransactionCreateWithoutGiftItemInput, GiftTransactionUncheckedCreateWithoutGiftItemInput> | GiftTransactionCreateWithoutGiftItemInput[] | GiftTransactionUncheckedCreateWithoutGiftItemInput[]
    connectOrCreate?: GiftTransactionCreateOrConnectWithoutGiftItemInput | GiftTransactionCreateOrConnectWithoutGiftItemInput[]
    createMany?: GiftTransactionCreateManyGiftItemInputEnvelope
    connect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
  }

  export type GiftTransactionUpdateManyWithoutGiftItemNestedInput = {
    create?: XOR<GiftTransactionCreateWithoutGiftItemInput, GiftTransactionUncheckedCreateWithoutGiftItemInput> | GiftTransactionCreateWithoutGiftItemInput[] | GiftTransactionUncheckedCreateWithoutGiftItemInput[]
    connectOrCreate?: GiftTransactionCreateOrConnectWithoutGiftItemInput | GiftTransactionCreateOrConnectWithoutGiftItemInput[]
    upsert?: GiftTransactionUpsertWithWhereUniqueWithoutGiftItemInput | GiftTransactionUpsertWithWhereUniqueWithoutGiftItemInput[]
    createMany?: GiftTransactionCreateManyGiftItemInputEnvelope
    set?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    disconnect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    delete?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    connect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    update?: GiftTransactionUpdateWithWhereUniqueWithoutGiftItemInput | GiftTransactionUpdateWithWhereUniqueWithoutGiftItemInput[]
    updateMany?: GiftTransactionUpdateManyWithWhereWithoutGiftItemInput | GiftTransactionUpdateManyWithWhereWithoutGiftItemInput[]
    deleteMany?: GiftTransactionScalarWhereInput | GiftTransactionScalarWhereInput[]
  }

  export type GiftTransactionUncheckedUpdateManyWithoutGiftItemNestedInput = {
    create?: XOR<GiftTransactionCreateWithoutGiftItemInput, GiftTransactionUncheckedCreateWithoutGiftItemInput> | GiftTransactionCreateWithoutGiftItemInput[] | GiftTransactionUncheckedCreateWithoutGiftItemInput[]
    connectOrCreate?: GiftTransactionCreateOrConnectWithoutGiftItemInput | GiftTransactionCreateOrConnectWithoutGiftItemInput[]
    upsert?: GiftTransactionUpsertWithWhereUniqueWithoutGiftItemInput | GiftTransactionUpsertWithWhereUniqueWithoutGiftItemInput[]
    createMany?: GiftTransactionCreateManyGiftItemInputEnvelope
    set?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    disconnect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    delete?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    connect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    update?: GiftTransactionUpdateWithWhereUniqueWithoutGiftItemInput | GiftTransactionUpdateWithWhereUniqueWithoutGiftItemInput[]
    updateMany?: GiftTransactionUpdateManyWithWhereWithoutGiftItemInput | GiftTransactionUpdateManyWithWhereWithoutGiftItemInput[]
    deleteMany?: GiftTransactionScalarWhereInput | GiftTransactionScalarWhereInput[]
  }

  export type GiftItemCreateNestedOneWithoutGiftTransactionsInput = {
    create?: XOR<GiftItemCreateWithoutGiftTransactionsInput, GiftItemUncheckedCreateWithoutGiftTransactionsInput>
    connectOrCreate?: GiftItemCreateOrConnectWithoutGiftTransactionsInput
    connect?: GiftItemWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutGiftTransactionsSenderInput = {
    create?: XOR<PersonCreateWithoutGiftTransactionsSenderInput, PersonUncheckedCreateWithoutGiftTransactionsSenderInput>
    connectOrCreate?: PersonCreateOrConnectWithoutGiftTransactionsSenderInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutGiftTransactionReceiverInput = {
    create?: XOR<PersonCreateWithoutGiftTransactionReceiverInput, PersonUncheckedCreateWithoutGiftTransactionReceiverInput>
    connectOrCreate?: PersonCreateOrConnectWithoutGiftTransactionReceiverInput
    connect?: PersonWhereUniqueInput
  }

  export type GiftItemUpdateOneRequiredWithoutGiftTransactionsNestedInput = {
    create?: XOR<GiftItemCreateWithoutGiftTransactionsInput, GiftItemUncheckedCreateWithoutGiftTransactionsInput>
    connectOrCreate?: GiftItemCreateOrConnectWithoutGiftTransactionsInput
    upsert?: GiftItemUpsertWithoutGiftTransactionsInput
    connect?: GiftItemWhereUniqueInput
    update?: XOR<XOR<GiftItemUpdateToOneWithWhereWithoutGiftTransactionsInput, GiftItemUpdateWithoutGiftTransactionsInput>, GiftItemUncheckedUpdateWithoutGiftTransactionsInput>
  }

  export type PersonUpdateOneRequiredWithoutGiftTransactionsSenderNestedInput = {
    create?: XOR<PersonCreateWithoutGiftTransactionsSenderInput, PersonUncheckedCreateWithoutGiftTransactionsSenderInput>
    connectOrCreate?: PersonCreateOrConnectWithoutGiftTransactionsSenderInput
    upsert?: PersonUpsertWithoutGiftTransactionsSenderInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutGiftTransactionsSenderInput, PersonUpdateWithoutGiftTransactionsSenderInput>, PersonUncheckedUpdateWithoutGiftTransactionsSenderInput>
  }

  export type PersonUpdateOneRequiredWithoutGiftTransactionReceiverNestedInput = {
    create?: XOR<PersonCreateWithoutGiftTransactionReceiverInput, PersonUncheckedCreateWithoutGiftTransactionReceiverInput>
    connectOrCreate?: PersonCreateOrConnectWithoutGiftTransactionReceiverInput
    upsert?: PersonUpsertWithoutGiftTransactionReceiverInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutGiftTransactionReceiverInput, PersonUpdateWithoutGiftTransactionReceiverInput>, PersonUncheckedUpdateWithoutGiftTransactionReceiverInput>
  }

  export type CoinTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<CoinTransactionCreateWithoutUserInput, CoinTransactionUncheckedCreateWithoutUserInput> | CoinTransactionCreateWithoutUserInput[] | CoinTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoinTransactionCreateOrConnectWithoutUserInput | CoinTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CoinTransactionCreateManyUserInputEnvelope
    connect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
  }

  export type GiftTransactionCreateNestedManyWithoutSenderInput = {
    create?: XOR<GiftTransactionCreateWithoutSenderInput, GiftTransactionUncheckedCreateWithoutSenderInput> | GiftTransactionCreateWithoutSenderInput[] | GiftTransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GiftTransactionCreateOrConnectWithoutSenderInput | GiftTransactionCreateOrConnectWithoutSenderInput[]
    createMany?: GiftTransactionCreateManySenderInputEnvelope
    connect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
  }

  export type GiftTransactionCreateNestedManyWithoutReceiverInput = {
    create?: XOR<GiftTransactionCreateWithoutReceiverInput, GiftTransactionUncheckedCreateWithoutReceiverInput> | GiftTransactionCreateWithoutReceiverInput[] | GiftTransactionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: GiftTransactionCreateOrConnectWithoutReceiverInput | GiftTransactionCreateOrConnectWithoutReceiverInput[]
    createMany?: GiftTransactionCreateManyReceiverInputEnvelope
    connect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
  }

  export type CoinTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoinTransactionCreateWithoutUserInput, CoinTransactionUncheckedCreateWithoutUserInput> | CoinTransactionCreateWithoutUserInput[] | CoinTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoinTransactionCreateOrConnectWithoutUserInput | CoinTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CoinTransactionCreateManyUserInputEnvelope
    connect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
  }

  export type GiftTransactionUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<GiftTransactionCreateWithoutSenderInput, GiftTransactionUncheckedCreateWithoutSenderInput> | GiftTransactionCreateWithoutSenderInput[] | GiftTransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GiftTransactionCreateOrConnectWithoutSenderInput | GiftTransactionCreateOrConnectWithoutSenderInput[]
    createMany?: GiftTransactionCreateManySenderInputEnvelope
    connect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
  }

  export type GiftTransactionUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<GiftTransactionCreateWithoutReceiverInput, GiftTransactionUncheckedCreateWithoutReceiverInput> | GiftTransactionCreateWithoutReceiverInput[] | GiftTransactionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: GiftTransactionCreateOrConnectWithoutReceiverInput | GiftTransactionCreateOrConnectWithoutReceiverInput[]
    createMany?: GiftTransactionCreateManyReceiverInputEnvelope
    connect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
  }

  export type EnumPersonRoleFieldUpdateOperationsInput = {
    set?: $Enums.PersonRole
  }

  export type CoinTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoinTransactionCreateWithoutUserInput, CoinTransactionUncheckedCreateWithoutUserInput> | CoinTransactionCreateWithoutUserInput[] | CoinTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoinTransactionCreateOrConnectWithoutUserInput | CoinTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CoinTransactionUpsertWithWhereUniqueWithoutUserInput | CoinTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoinTransactionCreateManyUserInputEnvelope
    set?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    disconnect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    delete?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    connect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    update?: CoinTransactionUpdateWithWhereUniqueWithoutUserInput | CoinTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoinTransactionUpdateManyWithWhereWithoutUserInput | CoinTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoinTransactionScalarWhereInput | CoinTransactionScalarWhereInput[]
  }

  export type GiftTransactionUpdateManyWithoutSenderNestedInput = {
    create?: XOR<GiftTransactionCreateWithoutSenderInput, GiftTransactionUncheckedCreateWithoutSenderInput> | GiftTransactionCreateWithoutSenderInput[] | GiftTransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GiftTransactionCreateOrConnectWithoutSenderInput | GiftTransactionCreateOrConnectWithoutSenderInput[]
    upsert?: GiftTransactionUpsertWithWhereUniqueWithoutSenderInput | GiftTransactionUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: GiftTransactionCreateManySenderInputEnvelope
    set?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    disconnect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    delete?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    connect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    update?: GiftTransactionUpdateWithWhereUniqueWithoutSenderInput | GiftTransactionUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: GiftTransactionUpdateManyWithWhereWithoutSenderInput | GiftTransactionUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: GiftTransactionScalarWhereInput | GiftTransactionScalarWhereInput[]
  }

  export type GiftTransactionUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<GiftTransactionCreateWithoutReceiverInput, GiftTransactionUncheckedCreateWithoutReceiverInput> | GiftTransactionCreateWithoutReceiverInput[] | GiftTransactionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: GiftTransactionCreateOrConnectWithoutReceiverInput | GiftTransactionCreateOrConnectWithoutReceiverInput[]
    upsert?: GiftTransactionUpsertWithWhereUniqueWithoutReceiverInput | GiftTransactionUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: GiftTransactionCreateManyReceiverInputEnvelope
    set?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    disconnect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    delete?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    connect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    update?: GiftTransactionUpdateWithWhereUniqueWithoutReceiverInput | GiftTransactionUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: GiftTransactionUpdateManyWithWhereWithoutReceiverInput | GiftTransactionUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: GiftTransactionScalarWhereInput | GiftTransactionScalarWhereInput[]
  }

  export type CoinTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoinTransactionCreateWithoutUserInput, CoinTransactionUncheckedCreateWithoutUserInput> | CoinTransactionCreateWithoutUserInput[] | CoinTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoinTransactionCreateOrConnectWithoutUserInput | CoinTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CoinTransactionUpsertWithWhereUniqueWithoutUserInput | CoinTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoinTransactionCreateManyUserInputEnvelope
    set?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    disconnect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    delete?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    connect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    update?: CoinTransactionUpdateWithWhereUniqueWithoutUserInput | CoinTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoinTransactionUpdateManyWithWhereWithoutUserInput | CoinTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoinTransactionScalarWhereInput | CoinTransactionScalarWhereInput[]
  }

  export type GiftTransactionUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<GiftTransactionCreateWithoutSenderInput, GiftTransactionUncheckedCreateWithoutSenderInput> | GiftTransactionCreateWithoutSenderInput[] | GiftTransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GiftTransactionCreateOrConnectWithoutSenderInput | GiftTransactionCreateOrConnectWithoutSenderInput[]
    upsert?: GiftTransactionUpsertWithWhereUniqueWithoutSenderInput | GiftTransactionUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: GiftTransactionCreateManySenderInputEnvelope
    set?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    disconnect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    delete?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    connect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    update?: GiftTransactionUpdateWithWhereUniqueWithoutSenderInput | GiftTransactionUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: GiftTransactionUpdateManyWithWhereWithoutSenderInput | GiftTransactionUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: GiftTransactionScalarWhereInput | GiftTransactionScalarWhereInput[]
  }

  export type GiftTransactionUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<GiftTransactionCreateWithoutReceiverInput, GiftTransactionUncheckedCreateWithoutReceiverInput> | GiftTransactionCreateWithoutReceiverInput[] | GiftTransactionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: GiftTransactionCreateOrConnectWithoutReceiverInput | GiftTransactionCreateOrConnectWithoutReceiverInput[]
    upsert?: GiftTransactionUpsertWithWhereUniqueWithoutReceiverInput | GiftTransactionUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: GiftTransactionCreateManyReceiverInputEnvelope
    set?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    disconnect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    delete?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    connect?: GiftTransactionWhereUniqueInput | GiftTransactionWhereUniqueInput[]
    update?: GiftTransactionUpdateWithWhereUniqueWithoutReceiverInput | GiftTransactionUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: GiftTransactionUpdateManyWithWhereWithoutReceiverInput | GiftTransactionUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: GiftTransactionScalarWhereInput | GiftTransactionScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumCoinTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CoinTransactionStatus | EnumCoinTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CoinTransactionStatus[] | ListEnumCoinTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoinTransactionStatus[] | ListEnumCoinTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCoinTransactionStatusFilter<$PrismaModel> | $Enums.CoinTransactionStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumCoinTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoinTransactionStatus | EnumCoinTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CoinTransactionStatus[] | ListEnumCoinTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoinTransactionStatus[] | ListEnumCoinTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCoinTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CoinTransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoinTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumCoinTransactionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumPersonRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonRole | EnumPersonRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PersonRole[] | ListEnumPersonRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PersonRole[] | ListEnumPersonRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonRoleFilter<$PrismaModel> | $Enums.PersonRole
  }

  export type NestedEnumPersonRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonRole | EnumPersonRoleFieldRefInput<$PrismaModel>
    in?: $Enums.PersonRole[] | ListEnumPersonRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.PersonRole[] | ListEnumPersonRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonRoleWithAggregatesFilter<$PrismaModel> | $Enums.PersonRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPersonRoleFilter<$PrismaModel>
    _max?: NestedEnumPersonRoleFilter<$PrismaModel>
  }

  export type CoinTransactionTypeCreateWithoutCoinTransactionsInput = {
    name: string
    feePercentage: number
    createdAt?: Date | string
  }

  export type CoinTransactionTypeUncheckedCreateWithoutCoinTransactionsInput = {
    id?: number
    name: string
    feePercentage: number
    createdAt?: Date | string
  }

  export type CoinTransactionTypeCreateOrConnectWithoutCoinTransactionsInput = {
    where: CoinTransactionTypeWhereUniqueInput
    create: XOR<CoinTransactionTypeCreateWithoutCoinTransactionsInput, CoinTransactionTypeUncheckedCreateWithoutCoinTransactionsInput>
  }

  export type PersonCreateWithoutCoinTransactionsInput = {
    id?: string
    email: string
    role?: $Enums.PersonRole
    password: string
    createdAt?: Date | string
    activatedAt: Date | string
    updatedAt?: Date | string
    giftTransactionsSender?: GiftTransactionCreateNestedManyWithoutSenderInput
    giftTransactionReceiver?: GiftTransactionCreateNestedManyWithoutReceiverInput
  }

  export type PersonUncheckedCreateWithoutCoinTransactionsInput = {
    id?: string
    email: string
    role?: $Enums.PersonRole
    password: string
    createdAt?: Date | string
    activatedAt: Date | string
    updatedAt?: Date | string
    giftTransactionsSender?: GiftTransactionUncheckedCreateNestedManyWithoutSenderInput
    giftTransactionReceiver?: GiftTransactionUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type PersonCreateOrConnectWithoutCoinTransactionsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutCoinTransactionsInput, PersonUncheckedCreateWithoutCoinTransactionsInput>
  }

  export type CoinTransactionTypeUpsertWithoutCoinTransactionsInput = {
    update: XOR<CoinTransactionTypeUpdateWithoutCoinTransactionsInput, CoinTransactionTypeUncheckedUpdateWithoutCoinTransactionsInput>
    create: XOR<CoinTransactionTypeCreateWithoutCoinTransactionsInput, CoinTransactionTypeUncheckedCreateWithoutCoinTransactionsInput>
    where?: CoinTransactionTypeWhereInput
  }

  export type CoinTransactionTypeUpdateToOneWithWhereWithoutCoinTransactionsInput = {
    where?: CoinTransactionTypeWhereInput
    data: XOR<CoinTransactionTypeUpdateWithoutCoinTransactionsInput, CoinTransactionTypeUncheckedUpdateWithoutCoinTransactionsInput>
  }

  export type CoinTransactionTypeUpdateWithoutCoinTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    feePercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinTransactionTypeUncheckedUpdateWithoutCoinTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    feePercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUpsertWithoutCoinTransactionsInput = {
    update: XOR<PersonUpdateWithoutCoinTransactionsInput, PersonUncheckedUpdateWithoutCoinTransactionsInput>
    create: XOR<PersonCreateWithoutCoinTransactionsInput, PersonUncheckedCreateWithoutCoinTransactionsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutCoinTransactionsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutCoinTransactionsInput, PersonUncheckedUpdateWithoutCoinTransactionsInput>
  }

  export type PersonUpdateWithoutCoinTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumPersonRoleFieldUpdateOperationsInput | $Enums.PersonRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giftTransactionsSender?: GiftTransactionUpdateManyWithoutSenderNestedInput
    giftTransactionReceiver?: GiftTransactionUpdateManyWithoutReceiverNestedInput
  }

  export type PersonUncheckedUpdateWithoutCoinTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumPersonRoleFieldUpdateOperationsInput | $Enums.PersonRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giftTransactionsSender?: GiftTransactionUncheckedUpdateManyWithoutSenderNestedInput
    giftTransactionReceiver?: GiftTransactionUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type CoinTransactionCreateWithoutCoinTransactionTypeInput = {
    id?: string
    coinAmount: bigint | number
    moneyAmount: number
    transactionFee: number
    status?: $Enums.CoinTransactionStatus
    bankAccountNumber: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: PersonCreateNestedOneWithoutCoinTransactionsInput
  }

  export type CoinTransactionUncheckedCreateWithoutCoinTransactionTypeInput = {
    id?: string
    userAccountId: string
    coinAmount: bigint | number
    moneyAmount: number
    transactionFee: number
    status?: $Enums.CoinTransactionStatus
    bankAccountNumber: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoinTransactionCreateOrConnectWithoutCoinTransactionTypeInput = {
    where: CoinTransactionWhereUniqueInput
    create: XOR<CoinTransactionCreateWithoutCoinTransactionTypeInput, CoinTransactionUncheckedCreateWithoutCoinTransactionTypeInput>
  }

  export type CoinTransactionCreateManyCoinTransactionTypeInputEnvelope = {
    data: CoinTransactionCreateManyCoinTransactionTypeInput | CoinTransactionCreateManyCoinTransactionTypeInput[]
    skipDuplicates?: boolean
  }

  export type CoinTransactionUpsertWithWhereUniqueWithoutCoinTransactionTypeInput = {
    where: CoinTransactionWhereUniqueInput
    update: XOR<CoinTransactionUpdateWithoutCoinTransactionTypeInput, CoinTransactionUncheckedUpdateWithoutCoinTransactionTypeInput>
    create: XOR<CoinTransactionCreateWithoutCoinTransactionTypeInput, CoinTransactionUncheckedCreateWithoutCoinTransactionTypeInput>
  }

  export type CoinTransactionUpdateWithWhereUniqueWithoutCoinTransactionTypeInput = {
    where: CoinTransactionWhereUniqueInput
    data: XOR<CoinTransactionUpdateWithoutCoinTransactionTypeInput, CoinTransactionUncheckedUpdateWithoutCoinTransactionTypeInput>
  }

  export type CoinTransactionUpdateManyWithWhereWithoutCoinTransactionTypeInput = {
    where: CoinTransactionScalarWhereInput
    data: XOR<CoinTransactionUpdateManyMutationInput, CoinTransactionUncheckedUpdateManyWithoutCoinTransactionTypeInput>
  }

  export type CoinTransactionScalarWhereInput = {
    AND?: CoinTransactionScalarWhereInput | CoinTransactionScalarWhereInput[]
    OR?: CoinTransactionScalarWhereInput[]
    NOT?: CoinTransactionScalarWhereInput | CoinTransactionScalarWhereInput[]
    id?: UuidFilter<"CoinTransaction"> | string
    userAccountId?: UuidFilter<"CoinTransaction"> | string
    coinAmount?: BigIntFilter<"CoinTransaction"> | bigint | number
    moneyAmount?: IntFilter<"CoinTransaction"> | number
    transactionFee?: IntFilter<"CoinTransaction"> | number
    status?: EnumCoinTransactionStatusFilter<"CoinTransaction"> | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntFilter<"CoinTransaction"> | bigint | number
    createdAt?: DateTimeFilter<"CoinTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"CoinTransaction"> | Date | string
    transactionTypeId?: IntFilter<"CoinTransaction"> | number
  }

  export type GiftTransactionCreateWithoutGiftItemInput = {
    id?: string
    coinAmount: bigint | number
    createdAt?: Date | string
    sender: PersonCreateNestedOneWithoutGiftTransactionsSenderInput
    receiver: PersonCreateNestedOneWithoutGiftTransactionReceiverInput
  }

  export type GiftTransactionUncheckedCreateWithoutGiftItemInput = {
    id?: string
    senderAccountId: string
    receiverAccountId: string
    coinAmount: bigint | number
    createdAt?: Date | string
  }

  export type GiftTransactionCreateOrConnectWithoutGiftItemInput = {
    where: GiftTransactionWhereUniqueInput
    create: XOR<GiftTransactionCreateWithoutGiftItemInput, GiftTransactionUncheckedCreateWithoutGiftItemInput>
  }

  export type GiftTransactionCreateManyGiftItemInputEnvelope = {
    data: GiftTransactionCreateManyGiftItemInput | GiftTransactionCreateManyGiftItemInput[]
    skipDuplicates?: boolean
  }

  export type GiftTransactionUpsertWithWhereUniqueWithoutGiftItemInput = {
    where: GiftTransactionWhereUniqueInput
    update: XOR<GiftTransactionUpdateWithoutGiftItemInput, GiftTransactionUncheckedUpdateWithoutGiftItemInput>
    create: XOR<GiftTransactionCreateWithoutGiftItemInput, GiftTransactionUncheckedCreateWithoutGiftItemInput>
  }

  export type GiftTransactionUpdateWithWhereUniqueWithoutGiftItemInput = {
    where: GiftTransactionWhereUniqueInput
    data: XOR<GiftTransactionUpdateWithoutGiftItemInput, GiftTransactionUncheckedUpdateWithoutGiftItemInput>
  }

  export type GiftTransactionUpdateManyWithWhereWithoutGiftItemInput = {
    where: GiftTransactionScalarWhereInput
    data: XOR<GiftTransactionUpdateManyMutationInput, GiftTransactionUncheckedUpdateManyWithoutGiftItemInput>
  }

  export type GiftTransactionScalarWhereInput = {
    AND?: GiftTransactionScalarWhereInput | GiftTransactionScalarWhereInput[]
    OR?: GiftTransactionScalarWhereInput[]
    NOT?: GiftTransactionScalarWhereInput | GiftTransactionScalarWhereInput[]
    id?: UuidFilter<"GiftTransaction"> | string
    senderAccountId?: UuidFilter<"GiftTransaction"> | string
    receiverAccountId?: UuidFilter<"GiftTransaction"> | string
    coinAmount?: BigIntFilter<"GiftTransaction"> | bigint | number
    createdAt?: DateTimeFilter<"GiftTransaction"> | Date | string
    giftItemId?: UuidFilter<"GiftTransaction"> | string
  }

  export type GiftItemCreateWithoutGiftTransactionsInput = {
    id?: string
    name: string
    coinAmount: bigint | number
    imagePath: string
    createdAt?: Date | string
  }

  export type GiftItemUncheckedCreateWithoutGiftTransactionsInput = {
    id?: string
    name: string
    coinAmount: bigint | number
    imagePath: string
    createdAt?: Date | string
  }

  export type GiftItemCreateOrConnectWithoutGiftTransactionsInput = {
    where: GiftItemWhereUniqueInput
    create: XOR<GiftItemCreateWithoutGiftTransactionsInput, GiftItemUncheckedCreateWithoutGiftTransactionsInput>
  }

  export type PersonCreateWithoutGiftTransactionsSenderInput = {
    id?: string
    email: string
    role?: $Enums.PersonRole
    password: string
    createdAt?: Date | string
    activatedAt: Date | string
    updatedAt?: Date | string
    coinTransactions?: CoinTransactionCreateNestedManyWithoutUserInput
    giftTransactionReceiver?: GiftTransactionCreateNestedManyWithoutReceiverInput
  }

  export type PersonUncheckedCreateWithoutGiftTransactionsSenderInput = {
    id?: string
    email: string
    role?: $Enums.PersonRole
    password: string
    createdAt?: Date | string
    activatedAt: Date | string
    updatedAt?: Date | string
    coinTransactions?: CoinTransactionUncheckedCreateNestedManyWithoutUserInput
    giftTransactionReceiver?: GiftTransactionUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type PersonCreateOrConnectWithoutGiftTransactionsSenderInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutGiftTransactionsSenderInput, PersonUncheckedCreateWithoutGiftTransactionsSenderInput>
  }

  export type PersonCreateWithoutGiftTransactionReceiverInput = {
    id?: string
    email: string
    role?: $Enums.PersonRole
    password: string
    createdAt?: Date | string
    activatedAt: Date | string
    updatedAt?: Date | string
    coinTransactions?: CoinTransactionCreateNestedManyWithoutUserInput
    giftTransactionsSender?: GiftTransactionCreateNestedManyWithoutSenderInput
  }

  export type PersonUncheckedCreateWithoutGiftTransactionReceiverInput = {
    id?: string
    email: string
    role?: $Enums.PersonRole
    password: string
    createdAt?: Date | string
    activatedAt: Date | string
    updatedAt?: Date | string
    coinTransactions?: CoinTransactionUncheckedCreateNestedManyWithoutUserInput
    giftTransactionsSender?: GiftTransactionUncheckedCreateNestedManyWithoutSenderInput
  }

  export type PersonCreateOrConnectWithoutGiftTransactionReceiverInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutGiftTransactionReceiverInput, PersonUncheckedCreateWithoutGiftTransactionReceiverInput>
  }

  export type GiftItemUpsertWithoutGiftTransactionsInput = {
    update: XOR<GiftItemUpdateWithoutGiftTransactionsInput, GiftItemUncheckedUpdateWithoutGiftTransactionsInput>
    create: XOR<GiftItemCreateWithoutGiftTransactionsInput, GiftItemUncheckedCreateWithoutGiftTransactionsInput>
    where?: GiftItemWhereInput
  }

  export type GiftItemUpdateToOneWithWhereWithoutGiftTransactionsInput = {
    where?: GiftItemWhereInput
    data: XOR<GiftItemUpdateWithoutGiftTransactionsInput, GiftItemUncheckedUpdateWithoutGiftTransactionsInput>
  }

  export type GiftItemUpdateWithoutGiftTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftItemUncheckedUpdateWithoutGiftTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUpsertWithoutGiftTransactionsSenderInput = {
    update: XOR<PersonUpdateWithoutGiftTransactionsSenderInput, PersonUncheckedUpdateWithoutGiftTransactionsSenderInput>
    create: XOR<PersonCreateWithoutGiftTransactionsSenderInput, PersonUncheckedCreateWithoutGiftTransactionsSenderInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutGiftTransactionsSenderInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutGiftTransactionsSenderInput, PersonUncheckedUpdateWithoutGiftTransactionsSenderInput>
  }

  export type PersonUpdateWithoutGiftTransactionsSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumPersonRoleFieldUpdateOperationsInput | $Enums.PersonRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinTransactions?: CoinTransactionUpdateManyWithoutUserNestedInput
    giftTransactionReceiver?: GiftTransactionUpdateManyWithoutReceiverNestedInput
  }

  export type PersonUncheckedUpdateWithoutGiftTransactionsSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumPersonRoleFieldUpdateOperationsInput | $Enums.PersonRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinTransactions?: CoinTransactionUncheckedUpdateManyWithoutUserNestedInput
    giftTransactionReceiver?: GiftTransactionUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type PersonUpsertWithoutGiftTransactionReceiverInput = {
    update: XOR<PersonUpdateWithoutGiftTransactionReceiverInput, PersonUncheckedUpdateWithoutGiftTransactionReceiverInput>
    create: XOR<PersonCreateWithoutGiftTransactionReceiverInput, PersonUncheckedCreateWithoutGiftTransactionReceiverInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutGiftTransactionReceiverInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutGiftTransactionReceiverInput, PersonUncheckedUpdateWithoutGiftTransactionReceiverInput>
  }

  export type PersonUpdateWithoutGiftTransactionReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumPersonRoleFieldUpdateOperationsInput | $Enums.PersonRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinTransactions?: CoinTransactionUpdateManyWithoutUserNestedInput
    giftTransactionsSender?: GiftTransactionUpdateManyWithoutSenderNestedInput
  }

  export type PersonUncheckedUpdateWithoutGiftTransactionReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumPersonRoleFieldUpdateOperationsInput | $Enums.PersonRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinTransactions?: CoinTransactionUncheckedUpdateManyWithoutUserNestedInput
    giftTransactionsSender?: GiftTransactionUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type CoinTransactionCreateWithoutUserInput = {
    id?: string
    coinAmount: bigint | number
    moneyAmount: number
    transactionFee: number
    status?: $Enums.CoinTransactionStatus
    bankAccountNumber: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    coinTransactionType?: CoinTransactionTypeCreateNestedOneWithoutCoinTransactionsInput
  }

  export type CoinTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    coinAmount: bigint | number
    moneyAmount: number
    transactionFee: number
    status?: $Enums.CoinTransactionStatus
    bankAccountNumber: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactionTypeId: number
  }

  export type CoinTransactionCreateOrConnectWithoutUserInput = {
    where: CoinTransactionWhereUniqueInput
    create: XOR<CoinTransactionCreateWithoutUserInput, CoinTransactionUncheckedCreateWithoutUserInput>
  }

  export type CoinTransactionCreateManyUserInputEnvelope = {
    data: CoinTransactionCreateManyUserInput | CoinTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GiftTransactionCreateWithoutSenderInput = {
    id?: string
    coinAmount: bigint | number
    createdAt?: Date | string
    giftItem: GiftItemCreateNestedOneWithoutGiftTransactionsInput
    receiver: PersonCreateNestedOneWithoutGiftTransactionReceiverInput
  }

  export type GiftTransactionUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverAccountId: string
    coinAmount: bigint | number
    createdAt?: Date | string
    giftItemId: string
  }

  export type GiftTransactionCreateOrConnectWithoutSenderInput = {
    where: GiftTransactionWhereUniqueInput
    create: XOR<GiftTransactionCreateWithoutSenderInput, GiftTransactionUncheckedCreateWithoutSenderInput>
  }

  export type GiftTransactionCreateManySenderInputEnvelope = {
    data: GiftTransactionCreateManySenderInput | GiftTransactionCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type GiftTransactionCreateWithoutReceiverInput = {
    id?: string
    coinAmount: bigint | number
    createdAt?: Date | string
    giftItem: GiftItemCreateNestedOneWithoutGiftTransactionsInput
    sender: PersonCreateNestedOneWithoutGiftTransactionsSenderInput
  }

  export type GiftTransactionUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderAccountId: string
    coinAmount: bigint | number
    createdAt?: Date | string
    giftItemId: string
  }

  export type GiftTransactionCreateOrConnectWithoutReceiverInput = {
    where: GiftTransactionWhereUniqueInput
    create: XOR<GiftTransactionCreateWithoutReceiverInput, GiftTransactionUncheckedCreateWithoutReceiverInput>
  }

  export type GiftTransactionCreateManyReceiverInputEnvelope = {
    data: GiftTransactionCreateManyReceiverInput | GiftTransactionCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type CoinTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: CoinTransactionWhereUniqueInput
    update: XOR<CoinTransactionUpdateWithoutUserInput, CoinTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<CoinTransactionCreateWithoutUserInput, CoinTransactionUncheckedCreateWithoutUserInput>
  }

  export type CoinTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: CoinTransactionWhereUniqueInput
    data: XOR<CoinTransactionUpdateWithoutUserInput, CoinTransactionUncheckedUpdateWithoutUserInput>
  }

  export type CoinTransactionUpdateManyWithWhereWithoutUserInput = {
    where: CoinTransactionScalarWhereInput
    data: XOR<CoinTransactionUpdateManyMutationInput, CoinTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type GiftTransactionUpsertWithWhereUniqueWithoutSenderInput = {
    where: GiftTransactionWhereUniqueInput
    update: XOR<GiftTransactionUpdateWithoutSenderInput, GiftTransactionUncheckedUpdateWithoutSenderInput>
    create: XOR<GiftTransactionCreateWithoutSenderInput, GiftTransactionUncheckedCreateWithoutSenderInput>
  }

  export type GiftTransactionUpdateWithWhereUniqueWithoutSenderInput = {
    where: GiftTransactionWhereUniqueInput
    data: XOR<GiftTransactionUpdateWithoutSenderInput, GiftTransactionUncheckedUpdateWithoutSenderInput>
  }

  export type GiftTransactionUpdateManyWithWhereWithoutSenderInput = {
    where: GiftTransactionScalarWhereInput
    data: XOR<GiftTransactionUpdateManyMutationInput, GiftTransactionUncheckedUpdateManyWithoutSenderInput>
  }

  export type GiftTransactionUpsertWithWhereUniqueWithoutReceiverInput = {
    where: GiftTransactionWhereUniqueInput
    update: XOR<GiftTransactionUpdateWithoutReceiverInput, GiftTransactionUncheckedUpdateWithoutReceiverInput>
    create: XOR<GiftTransactionCreateWithoutReceiverInput, GiftTransactionUncheckedCreateWithoutReceiverInput>
  }

  export type GiftTransactionUpdateWithWhereUniqueWithoutReceiverInput = {
    where: GiftTransactionWhereUniqueInput
    data: XOR<GiftTransactionUpdateWithoutReceiverInput, GiftTransactionUncheckedUpdateWithoutReceiverInput>
  }

  export type GiftTransactionUpdateManyWithWhereWithoutReceiverInput = {
    where: GiftTransactionScalarWhereInput
    data: XOR<GiftTransactionUpdateManyMutationInput, GiftTransactionUncheckedUpdateManyWithoutReceiverInput>
  }

  export type CoinTransactionCreateManyCoinTransactionTypeInput = {
    id?: string
    userAccountId: string
    coinAmount: bigint | number
    moneyAmount: number
    transactionFee: number
    status?: $Enums.CoinTransactionStatus
    bankAccountNumber: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoinTransactionUpdateWithoutCoinTransactionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    moneyAmount?: IntFieldUpdateOperationsInput | number
    transactionFee?: IntFieldUpdateOperationsInput | number
    status?: EnumCoinTransactionStatusFieldUpdateOperationsInput | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: PersonUpdateOneRequiredWithoutCoinTransactionsNestedInput
  }

  export type CoinTransactionUncheckedUpdateWithoutCoinTransactionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAccountId?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    moneyAmount?: IntFieldUpdateOperationsInput | number
    transactionFee?: IntFieldUpdateOperationsInput | number
    status?: EnumCoinTransactionStatusFieldUpdateOperationsInput | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinTransactionUncheckedUpdateManyWithoutCoinTransactionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAccountId?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    moneyAmount?: IntFieldUpdateOperationsInput | number
    transactionFee?: IntFieldUpdateOperationsInput | number
    status?: EnumCoinTransactionStatusFieldUpdateOperationsInput | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftTransactionCreateManyGiftItemInput = {
    id?: string
    senderAccountId: string
    receiverAccountId: string
    coinAmount: bigint | number
    createdAt?: Date | string
  }

  export type GiftTransactionUpdateWithoutGiftItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: PersonUpdateOneRequiredWithoutGiftTransactionsSenderNestedInput
    receiver?: PersonUpdateOneRequiredWithoutGiftTransactionReceiverNestedInput
  }

  export type GiftTransactionUncheckedUpdateWithoutGiftItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderAccountId?: StringFieldUpdateOperationsInput | string
    receiverAccountId?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GiftTransactionUncheckedUpdateManyWithoutGiftItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderAccountId?: StringFieldUpdateOperationsInput | string
    receiverAccountId?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinTransactionCreateManyUserInput = {
    id?: string
    coinAmount: bigint | number
    moneyAmount: number
    transactionFee: number
    status?: $Enums.CoinTransactionStatus
    bankAccountNumber: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactionTypeId: number
  }

  export type GiftTransactionCreateManySenderInput = {
    id?: string
    receiverAccountId: string
    coinAmount: bigint | number
    createdAt?: Date | string
    giftItemId: string
  }

  export type GiftTransactionCreateManyReceiverInput = {
    id?: string
    senderAccountId: string
    coinAmount: bigint | number
    createdAt?: Date | string
    giftItemId: string
  }

  export type CoinTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    moneyAmount?: IntFieldUpdateOperationsInput | number
    transactionFee?: IntFieldUpdateOperationsInput | number
    status?: EnumCoinTransactionStatusFieldUpdateOperationsInput | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinTransactionType?: CoinTransactionTypeUpdateOneWithoutCoinTransactionsNestedInput
  }

  export type CoinTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    moneyAmount?: IntFieldUpdateOperationsInput | number
    transactionFee?: IntFieldUpdateOperationsInput | number
    status?: EnumCoinTransactionStatusFieldUpdateOperationsInput | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type CoinTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    moneyAmount?: IntFieldUpdateOperationsInput | number
    transactionFee?: IntFieldUpdateOperationsInput | number
    status?: EnumCoinTransactionStatusFieldUpdateOperationsInput | $Enums.CoinTransactionStatus
    bankAccountNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type GiftTransactionUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giftItem?: GiftItemUpdateOneRequiredWithoutGiftTransactionsNestedInput
    receiver?: PersonUpdateOneRequiredWithoutGiftTransactionReceiverNestedInput
  }

  export type GiftTransactionUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverAccountId?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giftItemId?: StringFieldUpdateOperationsInput | string
  }

  export type GiftTransactionUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverAccountId?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giftItemId?: StringFieldUpdateOperationsInput | string
  }

  export type GiftTransactionUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giftItem?: GiftItemUpdateOneRequiredWithoutGiftTransactionsNestedInput
    sender?: PersonUpdateOneRequiredWithoutGiftTransactionsSenderNestedInput
  }

  export type GiftTransactionUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderAccountId?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giftItemId?: StringFieldUpdateOperationsInput | string
  }

  export type GiftTransactionUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderAccountId?: StringFieldUpdateOperationsInput | string
    coinAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    giftItemId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CoinTransactionTypeCountOutputTypeDefaultArgs instead
     */
    export type CoinTransactionTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoinTransactionTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GiftItemCountOutputTypeDefaultArgs instead
     */
    export type GiftItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GiftItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonCountOutputTypeDefaultArgs instead
     */
    export type PersonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CoinTransactionDefaultArgs instead
     */
    export type CoinTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoinTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CoinTransactionTypeDefaultArgs instead
     */
    export type CoinTransactionTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoinTransactionTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GiftItemDefaultArgs instead
     */
    export type GiftItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GiftItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GiftTransactionDefaultArgs instead
     */
    export type GiftTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GiftTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonDefaultArgs instead
     */
    export type PersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}