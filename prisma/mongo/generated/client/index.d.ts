
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
 * Model UserPhotoProfile
 * 
 */
export type UserPhotoProfile = $Result.DefaultSelection<Prisma.$UserPhotoProfilePayload>
/**
 * Model UserPassion
 * 
 */
export type UserPassion = $Result.DefaultSelection<Prisma.$UserPassionPayload>
/**
 * Model NotificationData
 * 
 */
export type NotificationData = $Result.DefaultSelection<Prisma.$NotificationDataPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Passion
 * 
 */
export type Passion = $Result.DefaultSelection<Prisma.$PassionPayload>
/**
 * Model UserGallery
 * 
 */
export type UserGallery = $Result.DefaultSelection<Prisma.$UserGalleryPayload>
/**
 * Model PhotoGallery
 * 
 */
export type PhotoGallery = $Result.DefaultSelection<Prisma.$PhotoGalleryPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Blocked
 * 
 */
export type Blocked = $Result.DefaultSelection<Prisma.$BlockedPayload>
/**
 * Model UserMatch
 * 
 */
export type UserMatch = $Result.DefaultSelection<Prisma.$UserMatchPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  male: 'male',
  female: 'female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const NotificationType: {
  like: 'like',
  match: 'match',
  anoucement: 'anoucement',
  warning: 'warning'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const MatchStatus: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected',
  ignored: 'ignored'
};

export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type MatchStatus = $Enums.MatchStatus

export const MatchStatus: typeof $Enums.MatchStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.passion`: Exposes CRUD operations for the **Passion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passions
    * const passions = await prisma.passion.findMany()
    * ```
    */
  get passion(): Prisma.PassionDelegate<ExtArgs>;

  /**
   * `prisma.userGallery`: Exposes CRUD operations for the **UserGallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGalleries
    * const userGalleries = await prisma.userGallery.findMany()
    * ```
    */
  get userGallery(): Prisma.UserGalleryDelegate<ExtArgs>;

  /**
   * `prisma.photoGallery`: Exposes CRUD operations for the **PhotoGallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotoGalleries
    * const photoGalleries = await prisma.photoGallery.findMany()
    * ```
    */
  get photoGallery(): Prisma.PhotoGalleryDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.blocked`: Exposes CRUD operations for the **Blocked** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blockeds
    * const blockeds = await prisma.blocked.findMany()
    * ```
    */
  get blocked(): Prisma.BlockedDelegate<ExtArgs>;

  /**
   * `prisma.userMatch`: Exposes CRUD operations for the **UserMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMatches
    * const userMatches = await prisma.userMatch.findMany()
    * ```
    */
  get userMatch(): Prisma.UserMatchDelegate<ExtArgs>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs>;
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
    User: 'User',
    Passion: 'Passion',
    UserGallery: 'UserGallery',
    PhotoGallery: 'PhotoGallery',
    Notification: 'Notification',
    Blocked: 'Blocked',
    UserMatch: 'UserMatch',
    Conversation: 'Conversation'
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
      modelProps: 'user' | 'passion' | 'userGallery' | 'photoGallery' | 'notification' | 'blocked' | 'userMatch' | 'conversation'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Passion: {
        payload: Prisma.$PassionPayload<ExtArgs>
        fields: Prisma.PassionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PassionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>
          }
          findFirst: {
            args: Prisma.PassionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PassionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>
          }
          findMany: {
            args: Prisma.PassionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>[]
          }
          create: {
            args: Prisma.PassionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>
          }
          createMany: {
            args: Prisma.PassionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PassionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>
          }
          update: {
            args: Prisma.PassionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>
          }
          deleteMany: {
            args: Prisma.PassionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PassionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PassionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PassionPayload>
          }
          aggregate: {
            args: Prisma.PassionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePassion>
          }
          groupBy: {
            args: Prisma.PassionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PassionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PassionFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PassionAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PassionCountArgs<ExtArgs>,
            result: $Utils.Optional<PassionCountAggregateOutputType> | number
          }
        }
      }
      UserGallery: {
        payload: Prisma.$UserGalleryPayload<ExtArgs>
        fields: Prisma.UserGalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGalleryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGalleryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGalleryPayload>
          }
          findFirst: {
            args: Prisma.UserGalleryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGalleryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGalleryPayload>
          }
          findMany: {
            args: Prisma.UserGalleryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGalleryPayload>[]
          }
          create: {
            args: Prisma.UserGalleryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGalleryPayload>
          }
          createMany: {
            args: Prisma.UserGalleryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserGalleryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGalleryPayload>
          }
          update: {
            args: Prisma.UserGalleryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGalleryPayload>
          }
          deleteMany: {
            args: Prisma.UserGalleryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserGalleryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserGalleryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGalleryPayload>
          }
          aggregate: {
            args: Prisma.UserGalleryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserGallery>
          }
          groupBy: {
            args: Prisma.UserGalleryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGalleryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserGalleryFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserGalleryAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserGalleryCountArgs<ExtArgs>,
            result: $Utils.Optional<UserGalleryCountAggregateOutputType> | number
          }
        }
      }
      PhotoGallery: {
        payload: Prisma.$PhotoGalleryPayload<ExtArgs>
        fields: Prisma.PhotoGalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoGalleryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoGalleryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>
          }
          findFirst: {
            args: Prisma.PhotoGalleryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoGalleryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>
          }
          findMany: {
            args: Prisma.PhotoGalleryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>[]
          }
          create: {
            args: Prisma.PhotoGalleryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>
          }
          createMany: {
            args: Prisma.PhotoGalleryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PhotoGalleryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>
          }
          update: {
            args: Prisma.PhotoGalleryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>
          }
          deleteMany: {
            args: Prisma.PhotoGalleryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoGalleryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PhotoGalleryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoGalleryPayload>
          }
          aggregate: {
            args: Prisma.PhotoGalleryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePhotoGallery>
          }
          groupBy: {
            args: Prisma.PhotoGalleryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PhotoGalleryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PhotoGalleryFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PhotoGalleryAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PhotoGalleryCountArgs<ExtArgs>,
            result: $Utils.Optional<PhotoGalleryCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotificationFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotificationAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>,
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Blocked: {
        payload: Prisma.$BlockedPayload<ExtArgs>
        fields: Prisma.BlockedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockedFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockedFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockedPayload>
          }
          findFirst: {
            args: Prisma.BlockedFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockedFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockedPayload>
          }
          findMany: {
            args: Prisma.BlockedFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockedPayload>[]
          }
          create: {
            args: Prisma.BlockedCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockedPayload>
          }
          createMany: {
            args: Prisma.BlockedCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlockedDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockedPayload>
          }
          update: {
            args: Prisma.BlockedUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockedPayload>
          }
          deleteMany: {
            args: Prisma.BlockedDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlockedUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlockedUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockedPayload>
          }
          aggregate: {
            args: Prisma.BlockedAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlocked>
          }
          groupBy: {
            args: Prisma.BlockedGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlockedGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BlockedFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.BlockedAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.BlockedCountArgs<ExtArgs>,
            result: $Utils.Optional<BlockedCountAggregateOutputType> | number
          }
        }
      }
      UserMatch: {
        payload: Prisma.$UserMatchPayload<ExtArgs>
        fields: Prisma.UserMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMatchFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMatchFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMatchPayload>
          }
          findFirst: {
            args: Prisma.UserMatchFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMatchFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMatchPayload>
          }
          findMany: {
            args: Prisma.UserMatchFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMatchPayload>[]
          }
          create: {
            args: Prisma.UserMatchCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMatchPayload>
          }
          createMany: {
            args: Prisma.UserMatchCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserMatchDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMatchPayload>
          }
          update: {
            args: Prisma.UserMatchUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMatchPayload>
          }
          deleteMany: {
            args: Prisma.UserMatchDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserMatchUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserMatchUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMatchPayload>
          }
          aggregate: {
            args: Prisma.UserMatchAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserMatch>
          }
          groupBy: {
            args: Prisma.UserMatchGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserMatchGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserMatchFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserMatchAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserMatchCountArgs<ExtArgs>,
            result: $Utils.Optional<UserMatchCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ConversationFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ConversationAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>,
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Notification: number
    Blocking: number
    Blocked: number
    sender: number
    receiver: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Notification?: boolean | UserCountOutputTypeCountNotificationArgs
    Blocking?: boolean | UserCountOutputTypeCountBlockingArgs
    Blocked?: boolean | UserCountOutputTypeCountBlockedArgs
    sender?: boolean | UserCountOutputTypeCountSenderArgs
    receiver?: boolean | UserCountOutputTypeCountReceiverArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSenderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMatchWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMatchWhereInput
  }



  /**
   * Count Type UserGalleryCountOutputType
   */

  export type UserGalleryCountOutputType = {
    PhotoGallery: number
  }

  export type UserGalleryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PhotoGallery?: boolean | UserGalleryCountOutputTypeCountPhotoGalleryArgs
  }

  // Custom InputTypes

  /**
   * UserGalleryCountOutputType without action
   */
  export type UserGalleryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGalleryCountOutputType
     */
    select?: UserGalleryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserGalleryCountOutputType without action
   */
  export type UserGalleryCountOutputTypeCountPhotoGalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoGalleryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model UserPhotoProfile
   */





  export type UserPhotoProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    path?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userPhotoProfile"]>

  export type UserPhotoProfileSelectScalar = {
    path?: boolean
    updatedAt?: boolean
  }


  export type $UserPhotoProfilePayload = {
    name: "UserPhotoProfile"
    objects: {}
    scalars: {
      path: string
      updatedAt: Date
    }
    composites: {}
  }


  type UserPhotoProfileGetPayload<S extends boolean | null | undefined | UserPhotoProfileDefaultArgs> = $Result.GetResult<Prisma.$UserPhotoProfilePayload, S>





  /**
   * Fields of the UserPhotoProfile model
   */ 
  interface UserPhotoProfileFieldRefs {
    readonly path: FieldRef<"UserPhotoProfile", 'String'>
    readonly updatedAt: FieldRef<"UserPhotoProfile", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserPhotoProfile without action
   */
  export type UserPhotoProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPhotoProfile
     */
    select?: UserPhotoProfileSelect<ExtArgs> | null
  }



  /**
   * Model UserPassion
   */





  export type UserPassionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["userPassion"]>

  export type UserPassionSelectScalar = {
    name?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }


  export type $UserPassionPayload = {
    name: "UserPassion"
    objects: {}
    scalars: {
      name: string
      createdAt: Date
      deletedAt: Date | null
    }
    composites: {}
  }


  type UserPassionGetPayload<S extends boolean | null | undefined | UserPassionDefaultArgs> = $Result.GetResult<Prisma.$UserPassionPayload, S>





  /**
   * Fields of the UserPassion model
   */ 
  interface UserPassionFieldRefs {
    readonly name: FieldRef<"UserPassion", 'String'>
    readonly createdAt: FieldRef<"UserPassion", 'DateTime'>
    readonly deletedAt: FieldRef<"UserPassion", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserPassion without action
   */
  export type UserPassionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPassion
     */
    select?: UserPassionSelect<ExtArgs> | null
  }



  /**
   * Model NotificationData
   */





  export type NotificationDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
  }, ExtArgs["result"]["notificationData"]>

  export type NotificationDataSelectScalar = {
    userId?: boolean
  }


  export type $NotificationDataPayload = {
    name: "NotificationData"
    objects: {}
    scalars: {
      userId: string
    }
    composites: {}
  }


  type NotificationDataGetPayload<S extends boolean | null | undefined | NotificationDataDefaultArgs> = $Result.GetResult<Prisma.$NotificationDataPayload, S>





  /**
   * Fields of the NotificationData model
   */ 
  interface NotificationDataFieldRefs {
    readonly userId: FieldRef<"NotificationData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * NotificationData without action
   */
  export type NotificationDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationData
     */
    select?: NotificationDataSelect<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    coinAmount: number | null
  }

  export type UserSumAggregateOutputType = {
    coinAmount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    gender: $Enums.Gender | null
    birth: Date | null
    description: string | null
    coinAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userGalleryId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    gender: $Enums.Gender | null
    birth: Date | null
    description: string | null
    coinAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userGalleryId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    birth: number
    description: number
    coinAmount: number
    createdAt: number
    updatedAt: number
    userGalleryId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    coinAmount?: true
  }

  export type UserSumAggregateInputType = {
    coinAmount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birth?: true
    description?: true
    coinAmount?: true
    createdAt?: true
    updatedAt?: true
    userGalleryId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birth?: true
    description?: true
    coinAmount?: true
    createdAt?: true
    updatedAt?: true
    userGalleryId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birth?: true
    description?: true
    coinAmount?: true
    createdAt?: true
    updatedAt?: true
    userGalleryId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    gender: $Enums.Gender
    birth: Date
    description: string
    coinAmount: number
    createdAt: Date
    updatedAt: Date
    userGalleryId: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photoProfile?: boolean | UserPhotoProfileDefaultArgs<ExtArgs>
    gender?: boolean
    birth?: boolean
    description?: boolean
    coinAmount?: boolean
    passions?: boolean | UserPassionDefaultArgs<ExtArgs>
    createdAt?: boolean
    updatedAt?: boolean
    userGalleryId?: boolean
    userGallery?: boolean | User$userGalleryArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    Blocking?: boolean | User$BlockingArgs<ExtArgs>
    Blocked?: boolean | User$BlockedArgs<ExtArgs>
    sender?: boolean | User$senderArgs<ExtArgs>
    receiver?: boolean | User$receiverArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    birth?: boolean
    description?: boolean
    coinAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userGalleryId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGallery?: boolean | User$userGalleryArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    Blocking?: boolean | User$BlockingArgs<ExtArgs>
    Blocked?: boolean | User$BlockedArgs<ExtArgs>
    sender?: boolean | User$senderArgs<ExtArgs>
    receiver?: boolean | User$receiverArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userGallery: Prisma.$UserGalleryPayload<ExtArgs> | null
      Notification: Prisma.$NotificationPayload<ExtArgs>[]
      Blocking: Prisma.$BlockedPayload<ExtArgs>[]
      Blocked: Prisma.$BlockedPayload<ExtArgs>[]
      sender: Prisma.$UserMatchPayload<ExtArgs>[]
      receiver: Prisma.$UserMatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      gender: $Enums.Gender
      birth: Date
      description: string
      coinAmount: number
      createdAt: Date
      updatedAt: Date
      userGalleryId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {
      photoProfile: Prisma.$UserPhotoProfilePayload
      passions: Prisma.$UserPassionPayload[]
    }
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userGallery<T extends User$userGalleryArgs<ExtArgs> = {}>(args?: Subset<T, User$userGalleryArgs<ExtArgs>>): Prisma__UserGalleryClient<$Result.GetResult<Prisma.$UserGalleryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Notification<T extends User$NotificationArgs<ExtArgs> = {}>(args?: Subset<T, User$NotificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findMany'> | Null>;

    Blocking<T extends User$BlockingArgs<ExtArgs> = {}>(args?: Subset<T, User$BlockingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedPayload<ExtArgs>, T, 'findMany'> | Null>;

    Blocked<T extends User$BlockedArgs<ExtArgs> = {}>(args?: Subset<T, User$BlockedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedPayload<ExtArgs>, T, 'findMany'> | Null>;

    sender<T extends User$senderArgs<ExtArgs> = {}>(args?: Subset<T, User$senderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMatchPayload<ExtArgs>, T, 'findMany'> | Null>;

    receiver<T extends User$receiverArgs<ExtArgs> = {}>(args?: Subset<T, User$receiverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMatchPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly birth: FieldRef<"User", 'DateTime'>
    readonly description: FieldRef<"User", 'String'>
    readonly coinAmount: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly userGalleryId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.userGallery
   */
  export type User$userGalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGallery
     */
    select?: UserGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGalleryInclude<ExtArgs> | null
    where?: UserGalleryWhereInput
  }


  /**
   * User.Notification
   */
  export type User$NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * User.Blocking
   */
  export type User$BlockingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocked
     */
    select?: BlockedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockedInclude<ExtArgs> | null
    where?: BlockedWhereInput
    orderBy?: BlockedOrderByWithRelationInput | BlockedOrderByWithRelationInput[]
    cursor?: BlockedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedScalarFieldEnum | BlockedScalarFieldEnum[]
  }


  /**
   * User.Blocked
   */
  export type User$BlockedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocked
     */
    select?: BlockedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockedInclude<ExtArgs> | null
    where?: BlockedWhereInput
    orderBy?: BlockedOrderByWithRelationInput | BlockedOrderByWithRelationInput[]
    cursor?: BlockedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedScalarFieldEnum | BlockedScalarFieldEnum[]
  }


  /**
   * User.sender
   */
  export type User$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatch
     */
    select?: UserMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMatchInclude<ExtArgs> | null
    where?: UserMatchWhereInput
    orderBy?: UserMatchOrderByWithRelationInput | UserMatchOrderByWithRelationInput[]
    cursor?: UserMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMatchScalarFieldEnum | UserMatchScalarFieldEnum[]
  }


  /**
   * User.receiver
   */
  export type User$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatch
     */
    select?: UserMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMatchInclude<ExtArgs> | null
    where?: UserMatchWhereInput
    orderBy?: UserMatchOrderByWithRelationInput | UserMatchOrderByWithRelationInput[]
    cursor?: UserMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMatchScalarFieldEnum | UserMatchScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Passion
   */

  export type AggregatePassion = {
    _count: PassionCountAggregateOutputType | null
    _min: PassionMinAggregateOutputType | null
    _max: PassionMaxAggregateOutputType | null
  }

  export type PassionMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type PassionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type PassionCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type PassionMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PassionMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PassionCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type PassionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passion to aggregate.
     */
    where?: PassionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passions to fetch.
     */
    orderBy?: PassionOrderByWithRelationInput | PassionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passions
    **/
    _count?: true | PassionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassionMaxAggregateInputType
  }

  export type GetPassionAggregateType<T extends PassionAggregateArgs> = {
        [P in keyof T & keyof AggregatePassion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassion[P]>
      : GetScalarType<T[P], AggregatePassion[P]>
  }




  export type PassionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassionWhereInput
    orderBy?: PassionOrderByWithAggregationInput | PassionOrderByWithAggregationInput[]
    by: PassionScalarFieldEnum[] | PassionScalarFieldEnum
    having?: PassionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassionCountAggregateInputType | true
    _min?: PassionMinAggregateInputType
    _max?: PassionMaxAggregateInputType
  }

  export type PassionGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: PassionCountAggregateOutputType | null
    _min: PassionMinAggregateOutputType | null
    _max: PassionMaxAggregateOutputType | null
  }

  type GetPassionGroupByPayload<T extends PassionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassionGroupByOutputType[P]>
            : GetScalarType<T[P], PassionGroupByOutputType[P]>
        }
      >
    >


  export type PassionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passion"]>

  export type PassionSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }


  export type $PassionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["passion"]>
    composites: {}
  }


  type PassionGetPayload<S extends boolean | null | undefined | PassionDefaultArgs> = $Result.GetResult<Prisma.$PassionPayload, S>

  type PassionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PassionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PassionCountAggregateInputType | true
    }

  export interface PassionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passion'], meta: { name: 'Passion' } }
    /**
     * Find zero or one Passion that matches the filter.
     * @param {PassionFindUniqueArgs} args - Arguments to find a Passion
     * @example
     * // Get one Passion
     * const passion = await prisma.passion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PassionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PassionFindUniqueArgs<ExtArgs>>
    ): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Passion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PassionFindUniqueOrThrowArgs} args - Arguments to find a Passion
     * @example
     * // Get one Passion
     * const passion = await prisma.passion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PassionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PassionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Passion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionFindFirstArgs} args - Arguments to find a Passion
     * @example
     * // Get one Passion
     * const passion = await prisma.passion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PassionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PassionFindFirstArgs<ExtArgs>>
    ): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Passion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionFindFirstOrThrowArgs} args - Arguments to find a Passion
     * @example
     * // Get one Passion
     * const passion = await prisma.passion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PassionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PassionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Passions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passions
     * const passions = await prisma.passion.findMany()
     * 
     * // Get first 10 Passions
     * const passions = await prisma.passion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passionWithIdOnly = await prisma.passion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PassionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PassionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Passion.
     * @param {PassionCreateArgs} args - Arguments to create a Passion.
     * @example
     * // Create one Passion
     * const Passion = await prisma.passion.create({
     *   data: {
     *     // ... data to create a Passion
     *   }
     * })
     * 
    **/
    create<T extends PassionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PassionCreateArgs<ExtArgs>>
    ): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Passions.
     *     @param {PassionCreateManyArgs} args - Arguments to create many Passions.
     *     @example
     *     // Create many Passions
     *     const passion = await prisma.passion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PassionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PassionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Passion.
     * @param {PassionDeleteArgs} args - Arguments to delete one Passion.
     * @example
     * // Delete one Passion
     * const Passion = await prisma.passion.delete({
     *   where: {
     *     // ... filter to delete one Passion
     *   }
     * })
     * 
    **/
    delete<T extends PassionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PassionDeleteArgs<ExtArgs>>
    ): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Passion.
     * @param {PassionUpdateArgs} args - Arguments to update one Passion.
     * @example
     * // Update one Passion
     * const passion = await prisma.passion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PassionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PassionUpdateArgs<ExtArgs>>
    ): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Passions.
     * @param {PassionDeleteManyArgs} args - Arguments to filter Passions to delete.
     * @example
     * // Delete a few Passions
     * const { count } = await prisma.passion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PassionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PassionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passions
     * const passion = await prisma.passion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PassionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PassionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Passion.
     * @param {PassionUpsertArgs} args - Arguments to update or create a Passion.
     * @example
     * // Update or create a Passion
     * const passion = await prisma.passion.upsert({
     *   create: {
     *     // ... data to create a Passion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passion we want to update
     *   }
     * })
    **/
    upsert<T extends PassionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PassionUpsertArgs<ExtArgs>>
    ): Prisma__PassionClient<$Result.GetResult<Prisma.$PassionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Passions that matches the filter.
     * @param {PassionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const passion = await prisma.passion.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PassionFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Passion.
     * @param {PassionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const passion = await prisma.passion.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PassionAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Passions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionCountArgs} args - Arguments to filter Passions to count.
     * @example
     * // Count the number of Passions
     * const count = await prisma.passion.count({
     *   where: {
     *     // ... the filter for the Passions we want to count
     *   }
     * })
    **/
    count<T extends PassionCountArgs>(
      args?: Subset<T, PassionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PassionAggregateArgs>(args: Subset<T, PassionAggregateArgs>): Prisma.PrismaPromise<GetPassionAggregateType<T>>

    /**
     * Group by Passion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassionGroupByArgs} args - Group by arguments.
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
      T extends PassionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassionGroupByArgs['orderBy'] }
        : { orderBy?: PassionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PassionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passion model
   */
  readonly fields: PassionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the Passion model
   */ 
  interface PassionFieldRefs {
    readonly id: FieldRef<"Passion", 'String'>
    readonly name: FieldRef<"Passion", 'String'>
    readonly createdAt: FieldRef<"Passion", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Passion findUnique
   */
  export type PassionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Filter, which Passion to fetch.
     */
    where: PassionWhereUniqueInput
  }


  /**
   * Passion findUniqueOrThrow
   */
  export type PassionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Filter, which Passion to fetch.
     */
    where: PassionWhereUniqueInput
  }


  /**
   * Passion findFirst
   */
  export type PassionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Filter, which Passion to fetch.
     */
    where?: PassionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passions to fetch.
     */
    orderBy?: PassionOrderByWithRelationInput | PassionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passions.
     */
    cursor?: PassionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passions.
     */
    distinct?: PassionScalarFieldEnum | PassionScalarFieldEnum[]
  }


  /**
   * Passion findFirstOrThrow
   */
  export type PassionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Filter, which Passion to fetch.
     */
    where?: PassionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passions to fetch.
     */
    orderBy?: PassionOrderByWithRelationInput | PassionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passions.
     */
    cursor?: PassionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passions.
     */
    distinct?: PassionScalarFieldEnum | PassionScalarFieldEnum[]
  }


  /**
   * Passion findMany
   */
  export type PassionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Filter, which Passions to fetch.
     */
    where?: PassionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passions to fetch.
     */
    orderBy?: PassionOrderByWithRelationInput | PassionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passions.
     */
    cursor?: PassionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passions.
     */
    skip?: number
    distinct?: PassionScalarFieldEnum | PassionScalarFieldEnum[]
  }


  /**
   * Passion create
   */
  export type PassionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * The data needed to create a Passion.
     */
    data: XOR<PassionCreateInput, PassionUncheckedCreateInput>
  }


  /**
   * Passion createMany
   */
  export type PassionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passions.
     */
    data: PassionCreateManyInput | PassionCreateManyInput[]
  }


  /**
   * Passion update
   */
  export type PassionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * The data needed to update a Passion.
     */
    data: XOR<PassionUpdateInput, PassionUncheckedUpdateInput>
    /**
     * Choose, which Passion to update.
     */
    where: PassionWhereUniqueInput
  }


  /**
   * Passion updateMany
   */
  export type PassionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passions.
     */
    data: XOR<PassionUpdateManyMutationInput, PassionUncheckedUpdateManyInput>
    /**
     * Filter which Passions to update
     */
    where?: PassionWhereInput
  }


  /**
   * Passion upsert
   */
  export type PassionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * The filter to search for the Passion to update in case it exists.
     */
    where: PassionWhereUniqueInput
    /**
     * In case the Passion found by the `where` argument doesn't exist, create a new Passion with this data.
     */
    create: XOR<PassionCreateInput, PassionUncheckedCreateInput>
    /**
     * In case the Passion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassionUpdateInput, PassionUncheckedUpdateInput>
  }


  /**
   * Passion delete
   */
  export type PassionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
    /**
     * Filter which Passion to delete.
     */
    where: PassionWhereUniqueInput
  }


  /**
   * Passion deleteMany
   */
  export type PassionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passions to delete
     */
    where?: PassionWhereInput
  }


  /**
   * Passion findRaw
   */
  export type PassionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Passion aggregateRaw
   */
  export type PassionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Passion without action
   */
  export type PassionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passion
     */
    select?: PassionSelect<ExtArgs> | null
  }



  /**
   * Model UserGallery
   */

  export type AggregateUserGallery = {
    _count: UserGalleryCountAggregateOutputType | null
    _min: UserGalleryMinAggregateOutputType | null
    _max: UserGalleryMaxAggregateOutputType | null
  }

  export type UserGalleryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserGalleryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserGalleryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserGalleryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserGalleryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserGalleryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserGalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGallery to aggregate.
     */
    where?: UserGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGalleries to fetch.
     */
    orderBy?: UserGalleryOrderByWithRelationInput | UserGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGalleries
    **/
    _count?: true | UserGalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGalleryMaxAggregateInputType
  }

  export type GetUserGalleryAggregateType<T extends UserGalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGallery[P]>
      : GetScalarType<T[P], AggregateUserGallery[P]>
  }




  export type UserGalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGalleryWhereInput
    orderBy?: UserGalleryOrderByWithAggregationInput | UserGalleryOrderByWithAggregationInput[]
    by: UserGalleryScalarFieldEnum[] | UserGalleryScalarFieldEnum
    having?: UserGalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGalleryCountAggregateInputType | true
    _min?: UserGalleryMinAggregateInputType
    _max?: UserGalleryMaxAggregateInputType
  }

  export type UserGalleryGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    _count: UserGalleryCountAggregateOutputType | null
    _min: UserGalleryMinAggregateOutputType | null
    _max: UserGalleryMaxAggregateOutputType | null
  }

  type GetUserGalleryGroupByPayload<T extends UserGalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGalleryGroupByOutputType[P]>
            : GetScalarType<T[P], UserGalleryGroupByOutputType[P]>
        }
      >
    >


  export type UserGallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserGallery$userArgs<ExtArgs>
    PhotoGallery?: boolean | UserGallery$PhotoGalleryArgs<ExtArgs>
    _count?: boolean | UserGalleryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGallery"]>

  export type UserGallerySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserGalleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserGallery$userArgs<ExtArgs>
    PhotoGallery?: boolean | UserGallery$PhotoGalleryArgs<ExtArgs>
    _count?: boolean | UserGalleryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserGalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGallery"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      PhotoGallery: Prisma.$PhotoGalleryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userGallery"]>
    composites: {}
  }


  type UserGalleryGetPayload<S extends boolean | null | undefined | UserGalleryDefaultArgs> = $Result.GetResult<Prisma.$UserGalleryPayload, S>

  type UserGalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserGalleryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserGalleryCountAggregateInputType | true
    }

  export interface UserGalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGallery'], meta: { name: 'UserGallery' } }
    /**
     * Find zero or one UserGallery that matches the filter.
     * @param {UserGalleryFindUniqueArgs} args - Arguments to find a UserGallery
     * @example
     * // Get one UserGallery
     * const userGallery = await prisma.userGallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserGalleryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserGalleryFindUniqueArgs<ExtArgs>>
    ): Prisma__UserGalleryClient<$Result.GetResult<Prisma.$UserGalleryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserGallery that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserGalleryFindUniqueOrThrowArgs} args - Arguments to find a UserGallery
     * @example
     * // Get one UserGallery
     * const userGallery = await prisma.userGallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserGalleryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGalleryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserGalleryClient<$Result.GetResult<Prisma.$UserGalleryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserGallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGalleryFindFirstArgs} args - Arguments to find a UserGallery
     * @example
     * // Get one UserGallery
     * const userGallery = await prisma.userGallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserGalleryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGalleryFindFirstArgs<ExtArgs>>
    ): Prisma__UserGalleryClient<$Result.GetResult<Prisma.$UserGalleryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserGallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGalleryFindFirstOrThrowArgs} args - Arguments to find a UserGallery
     * @example
     * // Get one UserGallery
     * const userGallery = await prisma.userGallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserGalleryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGalleryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserGalleryClient<$Result.GetResult<Prisma.$UserGalleryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserGalleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGalleryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGalleries
     * const userGalleries = await prisma.userGallery.findMany()
     * 
     * // Get first 10 UserGalleries
     * const userGalleries = await prisma.userGallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGalleryWithIdOnly = await prisma.userGallery.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserGalleryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGalleryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGalleryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserGallery.
     * @param {UserGalleryCreateArgs} args - Arguments to create a UserGallery.
     * @example
     * // Create one UserGallery
     * const UserGallery = await prisma.userGallery.create({
     *   data: {
     *     // ... data to create a UserGallery
     *   }
     * })
     * 
    **/
    create<T extends UserGalleryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserGalleryCreateArgs<ExtArgs>>
    ): Prisma__UserGalleryClient<$Result.GetResult<Prisma.$UserGalleryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserGalleries.
     *     @param {UserGalleryCreateManyArgs} args - Arguments to create many UserGalleries.
     *     @example
     *     // Create many UserGalleries
     *     const userGallery = await prisma.userGallery.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserGalleryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGalleryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserGallery.
     * @param {UserGalleryDeleteArgs} args - Arguments to delete one UserGallery.
     * @example
     * // Delete one UserGallery
     * const UserGallery = await prisma.userGallery.delete({
     *   where: {
     *     // ... filter to delete one UserGallery
     *   }
     * })
     * 
    **/
    delete<T extends UserGalleryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserGalleryDeleteArgs<ExtArgs>>
    ): Prisma__UserGalleryClient<$Result.GetResult<Prisma.$UserGalleryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserGallery.
     * @param {UserGalleryUpdateArgs} args - Arguments to update one UserGallery.
     * @example
     * // Update one UserGallery
     * const userGallery = await prisma.userGallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserGalleryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserGalleryUpdateArgs<ExtArgs>>
    ): Prisma__UserGalleryClient<$Result.GetResult<Prisma.$UserGalleryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserGalleries.
     * @param {UserGalleryDeleteManyArgs} args - Arguments to filter UserGalleries to delete.
     * @example
     * // Delete a few UserGalleries
     * const { count } = await prisma.userGallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserGalleryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGalleryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGalleries
     * const userGallery = await prisma.userGallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserGalleryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserGalleryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserGallery.
     * @param {UserGalleryUpsertArgs} args - Arguments to update or create a UserGallery.
     * @example
     * // Update or create a UserGallery
     * const userGallery = await prisma.userGallery.upsert({
     *   create: {
     *     // ... data to create a UserGallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGallery we want to update
     *   }
     * })
    **/
    upsert<T extends UserGalleryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserGalleryUpsertArgs<ExtArgs>>
    ): Prisma__UserGalleryClient<$Result.GetResult<Prisma.$UserGalleryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more UserGalleries that matches the filter.
     * @param {UserGalleryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userGallery = await prisma.userGallery.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserGalleryFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserGallery.
     * @param {UserGalleryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userGallery = await prisma.userGallery.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserGalleryAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of UserGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGalleryCountArgs} args - Arguments to filter UserGalleries to count.
     * @example
     * // Count the number of UserGalleries
     * const count = await prisma.userGallery.count({
     *   where: {
     *     // ... the filter for the UserGalleries we want to count
     *   }
     * })
    **/
    count<T extends UserGalleryCountArgs>(
      args?: Subset<T, UserGalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserGalleryAggregateArgs>(args: Subset<T, UserGalleryAggregateArgs>): Prisma.PrismaPromise<GetUserGalleryAggregateType<T>>

    /**
     * Group by UserGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGalleryGroupByArgs} args - Group by arguments.
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
      T extends UserGalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGalleryGroupByArgs['orderBy'] }
        : { orderBy?: UserGalleryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGallery model
   */
  readonly fields: UserGalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserGallery$userArgs<ExtArgs> = {}>(args?: Subset<T, UserGallery$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    PhotoGallery<T extends UserGallery$PhotoGalleryArgs<ExtArgs> = {}>(args?: Subset<T, UserGallery$PhotoGalleryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoGalleryPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the UserGallery model
   */ 
  interface UserGalleryFieldRefs {
    readonly id: FieldRef<"UserGallery", 'String'>
    readonly createdAt: FieldRef<"UserGallery", 'DateTime'>
    readonly updatedAt: FieldRef<"UserGallery", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserGallery findUnique
   */
  export type UserGalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGallery
     */
    select?: UserGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGalleryInclude<ExtArgs> | null
    /**
     * Filter, which UserGallery to fetch.
     */
    where: UserGalleryWhereUniqueInput
  }


  /**
   * UserGallery findUniqueOrThrow
   */
  export type UserGalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGallery
     */
    select?: UserGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGalleryInclude<ExtArgs> | null
    /**
     * Filter, which UserGallery to fetch.
     */
    where: UserGalleryWhereUniqueInput
  }


  /**
   * UserGallery findFirst
   */
  export type UserGalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGallery
     */
    select?: UserGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGalleryInclude<ExtArgs> | null
    /**
     * Filter, which UserGallery to fetch.
     */
    where?: UserGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGalleries to fetch.
     */
    orderBy?: UserGalleryOrderByWithRelationInput | UserGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGalleries.
     */
    cursor?: UserGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGalleries.
     */
    distinct?: UserGalleryScalarFieldEnum | UserGalleryScalarFieldEnum[]
  }


  /**
   * UserGallery findFirstOrThrow
   */
  export type UserGalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGallery
     */
    select?: UserGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGalleryInclude<ExtArgs> | null
    /**
     * Filter, which UserGallery to fetch.
     */
    where?: UserGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGalleries to fetch.
     */
    orderBy?: UserGalleryOrderByWithRelationInput | UserGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGalleries.
     */
    cursor?: UserGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGalleries.
     */
    distinct?: UserGalleryScalarFieldEnum | UserGalleryScalarFieldEnum[]
  }


  /**
   * UserGallery findMany
   */
  export type UserGalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGallery
     */
    select?: UserGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGalleryInclude<ExtArgs> | null
    /**
     * Filter, which UserGalleries to fetch.
     */
    where?: UserGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGalleries to fetch.
     */
    orderBy?: UserGalleryOrderByWithRelationInput | UserGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGalleries.
     */
    cursor?: UserGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGalleries.
     */
    skip?: number
    distinct?: UserGalleryScalarFieldEnum | UserGalleryScalarFieldEnum[]
  }


  /**
   * UserGallery create
   */
  export type UserGalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGallery
     */
    select?: UserGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGalleryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGallery.
     */
    data?: XOR<UserGalleryCreateInput, UserGalleryUncheckedCreateInput>
  }


  /**
   * UserGallery createMany
   */
  export type UserGalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGalleries.
     */
    data: UserGalleryCreateManyInput | UserGalleryCreateManyInput[]
  }


  /**
   * UserGallery update
   */
  export type UserGalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGallery
     */
    select?: UserGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGalleryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGallery.
     */
    data: XOR<UserGalleryUpdateInput, UserGalleryUncheckedUpdateInput>
    /**
     * Choose, which UserGallery to update.
     */
    where: UserGalleryWhereUniqueInput
  }


  /**
   * UserGallery updateMany
   */
  export type UserGalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGalleries.
     */
    data: XOR<UserGalleryUpdateManyMutationInput, UserGalleryUncheckedUpdateManyInput>
    /**
     * Filter which UserGalleries to update
     */
    where?: UserGalleryWhereInput
  }


  /**
   * UserGallery upsert
   */
  export type UserGalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGallery
     */
    select?: UserGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGalleryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGallery to update in case it exists.
     */
    where: UserGalleryWhereUniqueInput
    /**
     * In case the UserGallery found by the `where` argument doesn't exist, create a new UserGallery with this data.
     */
    create: XOR<UserGalleryCreateInput, UserGalleryUncheckedCreateInput>
    /**
     * In case the UserGallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGalleryUpdateInput, UserGalleryUncheckedUpdateInput>
  }


  /**
   * UserGallery delete
   */
  export type UserGalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGallery
     */
    select?: UserGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGalleryInclude<ExtArgs> | null
    /**
     * Filter which UserGallery to delete.
     */
    where: UserGalleryWhereUniqueInput
  }


  /**
   * UserGallery deleteMany
   */
  export type UserGalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGalleries to delete
     */
    where?: UserGalleryWhereInput
  }


  /**
   * UserGallery findRaw
   */
  export type UserGalleryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserGallery aggregateRaw
   */
  export type UserGalleryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserGallery.user
   */
  export type UserGallery$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * UserGallery.PhotoGallery
   */
  export type UserGallery$PhotoGalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoGallery
     */
    select?: PhotoGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoGalleryInclude<ExtArgs> | null
    where?: PhotoGalleryWhereInput
    orderBy?: PhotoGalleryOrderByWithRelationInput | PhotoGalleryOrderByWithRelationInput[]
    cursor?: PhotoGalleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoGalleryScalarFieldEnum | PhotoGalleryScalarFieldEnum[]
  }


  /**
   * UserGallery without action
   */
  export type UserGalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGallery
     */
    select?: UserGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGalleryInclude<ExtArgs> | null
  }



  /**
   * Model PhotoGallery
   */

  export type AggregatePhotoGallery = {
    _count: PhotoGalleryCountAggregateOutputType | null
    _min: PhotoGalleryMinAggregateOutputType | null
    _max: PhotoGalleryMaxAggregateOutputType | null
  }

  export type PhotoGalleryMinAggregateOutputType = {
    id: string | null
    path: string | null
    userGalleryId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type PhotoGalleryMaxAggregateOutputType = {
    id: string | null
    path: string | null
    userGalleryId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type PhotoGalleryCountAggregateOutputType = {
    id: number
    path: number
    userGalleryId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type PhotoGalleryMinAggregateInputType = {
    id?: true
    path?: true
    userGalleryId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type PhotoGalleryMaxAggregateInputType = {
    id?: true
    path?: true
    userGalleryId?: true
    createdAt?: true
    deletedAt?: true
  }

  export type PhotoGalleryCountAggregateInputType = {
    id?: true
    path?: true
    userGalleryId?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PhotoGalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoGallery to aggregate.
     */
    where?: PhotoGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoGalleries to fetch.
     */
    orderBy?: PhotoGalleryOrderByWithRelationInput | PhotoGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotoGalleries
    **/
    _count?: true | PhotoGalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoGalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoGalleryMaxAggregateInputType
  }

  export type GetPhotoGalleryAggregateType<T extends PhotoGalleryAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotoGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoGallery[P]>
      : GetScalarType<T[P], AggregatePhotoGallery[P]>
  }




  export type PhotoGalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoGalleryWhereInput
    orderBy?: PhotoGalleryOrderByWithAggregationInput | PhotoGalleryOrderByWithAggregationInput[]
    by: PhotoGalleryScalarFieldEnum[] | PhotoGalleryScalarFieldEnum
    having?: PhotoGalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoGalleryCountAggregateInputType | true
    _min?: PhotoGalleryMinAggregateInputType
    _max?: PhotoGalleryMaxAggregateInputType
  }

  export type PhotoGalleryGroupByOutputType = {
    id: string
    path: string
    userGalleryId: string
    createdAt: Date
    deletedAt: Date | null
    _count: PhotoGalleryCountAggregateOutputType | null
    _min: PhotoGalleryMinAggregateOutputType | null
    _max: PhotoGalleryMaxAggregateOutputType | null
  }

  type GetPhotoGalleryGroupByPayload<T extends PhotoGalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGalleryGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGalleryGroupByOutputType[P]>
        }
      >
    >


  export type PhotoGallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    userGalleryId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    userGallery?: boolean | UserGalleryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoGallery"]>

  export type PhotoGallerySelectScalar = {
    id?: boolean
    path?: boolean
    userGalleryId?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type PhotoGalleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGallery?: boolean | UserGalleryDefaultArgs<ExtArgs>
  }


  export type $PhotoGalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhotoGallery"
    objects: {
      userGallery: Prisma.$UserGalleryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      userGalleryId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["photoGallery"]>
    composites: {}
  }


  type PhotoGalleryGetPayload<S extends boolean | null | undefined | PhotoGalleryDefaultArgs> = $Result.GetResult<Prisma.$PhotoGalleryPayload, S>

  type PhotoGalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhotoGalleryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhotoGalleryCountAggregateInputType | true
    }

  export interface PhotoGalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhotoGallery'], meta: { name: 'PhotoGallery' } }
    /**
     * Find zero or one PhotoGallery that matches the filter.
     * @param {PhotoGalleryFindUniqueArgs} args - Arguments to find a PhotoGallery
     * @example
     * // Get one PhotoGallery
     * const photoGallery = await prisma.photoGallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PhotoGalleryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoGalleryFindUniqueArgs<ExtArgs>>
    ): Prisma__PhotoGalleryClient<$Result.GetResult<Prisma.$PhotoGalleryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PhotoGallery that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PhotoGalleryFindUniqueOrThrowArgs} args - Arguments to find a PhotoGallery
     * @example
     * // Get one PhotoGallery
     * const photoGallery = await prisma.photoGallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PhotoGalleryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoGalleryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoGalleryClient<$Result.GetResult<Prisma.$PhotoGalleryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PhotoGallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGalleryFindFirstArgs} args - Arguments to find a PhotoGallery
     * @example
     * // Get one PhotoGallery
     * const photoGallery = await prisma.photoGallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PhotoGalleryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoGalleryFindFirstArgs<ExtArgs>>
    ): Prisma__PhotoGalleryClient<$Result.GetResult<Prisma.$PhotoGalleryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PhotoGallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGalleryFindFirstOrThrowArgs} args - Arguments to find a PhotoGallery
     * @example
     * // Get one PhotoGallery
     * const photoGallery = await prisma.photoGallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PhotoGalleryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoGalleryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoGalleryClient<$Result.GetResult<Prisma.$PhotoGalleryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PhotoGalleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGalleryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotoGalleries
     * const photoGalleries = await prisma.photoGallery.findMany()
     * 
     * // Get first 10 PhotoGalleries
     * const photoGalleries = await prisma.photoGallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoGalleryWithIdOnly = await prisma.photoGallery.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PhotoGalleryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoGalleryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoGalleryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PhotoGallery.
     * @param {PhotoGalleryCreateArgs} args - Arguments to create a PhotoGallery.
     * @example
     * // Create one PhotoGallery
     * const PhotoGallery = await prisma.photoGallery.create({
     *   data: {
     *     // ... data to create a PhotoGallery
     *   }
     * })
     * 
    **/
    create<T extends PhotoGalleryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoGalleryCreateArgs<ExtArgs>>
    ): Prisma__PhotoGalleryClient<$Result.GetResult<Prisma.$PhotoGalleryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PhotoGalleries.
     *     @param {PhotoGalleryCreateManyArgs} args - Arguments to create many PhotoGalleries.
     *     @example
     *     // Create many PhotoGalleries
     *     const photoGallery = await prisma.photoGallery.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PhotoGalleryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoGalleryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PhotoGallery.
     * @param {PhotoGalleryDeleteArgs} args - Arguments to delete one PhotoGallery.
     * @example
     * // Delete one PhotoGallery
     * const PhotoGallery = await prisma.photoGallery.delete({
     *   where: {
     *     // ... filter to delete one PhotoGallery
     *   }
     * })
     * 
    **/
    delete<T extends PhotoGalleryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoGalleryDeleteArgs<ExtArgs>>
    ): Prisma__PhotoGalleryClient<$Result.GetResult<Prisma.$PhotoGalleryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PhotoGallery.
     * @param {PhotoGalleryUpdateArgs} args - Arguments to update one PhotoGallery.
     * @example
     * // Update one PhotoGallery
     * const photoGallery = await prisma.photoGallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PhotoGalleryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoGalleryUpdateArgs<ExtArgs>>
    ): Prisma__PhotoGalleryClient<$Result.GetResult<Prisma.$PhotoGalleryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PhotoGalleries.
     * @param {PhotoGalleryDeleteManyArgs} args - Arguments to filter PhotoGalleries to delete.
     * @example
     * // Delete a few PhotoGalleries
     * const { count } = await prisma.photoGallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PhotoGalleryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoGalleryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotoGalleries
     * const photoGallery = await prisma.photoGallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PhotoGalleryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoGalleryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhotoGallery.
     * @param {PhotoGalleryUpsertArgs} args - Arguments to update or create a PhotoGallery.
     * @example
     * // Update or create a PhotoGallery
     * const photoGallery = await prisma.photoGallery.upsert({
     *   create: {
     *     // ... data to create a PhotoGallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotoGallery we want to update
     *   }
     * })
    **/
    upsert<T extends PhotoGalleryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoGalleryUpsertArgs<ExtArgs>>
    ): Prisma__PhotoGalleryClient<$Result.GetResult<Prisma.$PhotoGalleryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more PhotoGalleries that matches the filter.
     * @param {PhotoGalleryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const photoGallery = await prisma.photoGallery.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PhotoGalleryFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PhotoGallery.
     * @param {PhotoGalleryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const photoGallery = await prisma.photoGallery.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PhotoGalleryAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of PhotoGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGalleryCountArgs} args - Arguments to filter PhotoGalleries to count.
     * @example
     * // Count the number of PhotoGalleries
     * const count = await prisma.photoGallery.count({
     *   where: {
     *     // ... the filter for the PhotoGalleries we want to count
     *   }
     * })
    **/
    count<T extends PhotoGalleryCountArgs>(
      args?: Subset<T, PhotoGalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoGalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotoGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoGalleryAggregateArgs>(args: Subset<T, PhotoGalleryAggregateArgs>): Prisma.PrismaPromise<GetPhotoGalleryAggregateType<T>>

    /**
     * Group by PhotoGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGalleryGroupByArgs} args - Group by arguments.
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
      T extends PhotoGalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGalleryGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGalleryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotoGalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhotoGallery model
   */
  readonly fields: PhotoGalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotoGallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoGalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userGallery<T extends UserGalleryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserGalleryDefaultArgs<ExtArgs>>): Prisma__UserGalleryClient<$Result.GetResult<Prisma.$UserGalleryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the PhotoGallery model
   */ 
  interface PhotoGalleryFieldRefs {
    readonly id: FieldRef<"PhotoGallery", 'String'>
    readonly path: FieldRef<"PhotoGallery", 'String'>
    readonly userGalleryId: FieldRef<"PhotoGallery", 'String'>
    readonly createdAt: FieldRef<"PhotoGallery", 'DateTime'>
    readonly deletedAt: FieldRef<"PhotoGallery", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * PhotoGallery findUnique
   */
  export type PhotoGalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoGallery
     */
    select?: PhotoGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoGalleryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoGallery to fetch.
     */
    where: PhotoGalleryWhereUniqueInput
  }


  /**
   * PhotoGallery findUniqueOrThrow
   */
  export type PhotoGalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoGallery
     */
    select?: PhotoGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoGalleryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoGallery to fetch.
     */
    where: PhotoGalleryWhereUniqueInput
  }


  /**
   * PhotoGallery findFirst
   */
  export type PhotoGalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoGallery
     */
    select?: PhotoGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoGalleryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoGallery to fetch.
     */
    where?: PhotoGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoGalleries to fetch.
     */
    orderBy?: PhotoGalleryOrderByWithRelationInput | PhotoGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoGalleries.
     */
    cursor?: PhotoGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoGalleries.
     */
    distinct?: PhotoGalleryScalarFieldEnum | PhotoGalleryScalarFieldEnum[]
  }


  /**
   * PhotoGallery findFirstOrThrow
   */
  export type PhotoGalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoGallery
     */
    select?: PhotoGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoGalleryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoGallery to fetch.
     */
    where?: PhotoGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoGalleries to fetch.
     */
    orderBy?: PhotoGalleryOrderByWithRelationInput | PhotoGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoGalleries.
     */
    cursor?: PhotoGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoGalleries.
     */
    distinct?: PhotoGalleryScalarFieldEnum | PhotoGalleryScalarFieldEnum[]
  }


  /**
   * PhotoGallery findMany
   */
  export type PhotoGalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoGallery
     */
    select?: PhotoGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoGalleryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoGalleries to fetch.
     */
    where?: PhotoGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoGalleries to fetch.
     */
    orderBy?: PhotoGalleryOrderByWithRelationInput | PhotoGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotoGalleries.
     */
    cursor?: PhotoGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoGalleries.
     */
    skip?: number
    distinct?: PhotoGalleryScalarFieldEnum | PhotoGalleryScalarFieldEnum[]
  }


  /**
   * PhotoGallery create
   */
  export type PhotoGalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoGallery
     */
    select?: PhotoGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoGalleryInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotoGallery.
     */
    data: XOR<PhotoGalleryCreateInput, PhotoGalleryUncheckedCreateInput>
  }


  /**
   * PhotoGallery createMany
   */
  export type PhotoGalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhotoGalleries.
     */
    data: PhotoGalleryCreateManyInput | PhotoGalleryCreateManyInput[]
  }


  /**
   * PhotoGallery update
   */
  export type PhotoGalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoGallery
     */
    select?: PhotoGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoGalleryInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotoGallery.
     */
    data: XOR<PhotoGalleryUpdateInput, PhotoGalleryUncheckedUpdateInput>
    /**
     * Choose, which PhotoGallery to update.
     */
    where: PhotoGalleryWhereUniqueInput
  }


  /**
   * PhotoGallery updateMany
   */
  export type PhotoGalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhotoGalleries.
     */
    data: XOR<PhotoGalleryUpdateManyMutationInput, PhotoGalleryUncheckedUpdateManyInput>
    /**
     * Filter which PhotoGalleries to update
     */
    where?: PhotoGalleryWhereInput
  }


  /**
   * PhotoGallery upsert
   */
  export type PhotoGalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoGallery
     */
    select?: PhotoGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoGalleryInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotoGallery to update in case it exists.
     */
    where: PhotoGalleryWhereUniqueInput
    /**
     * In case the PhotoGallery found by the `where` argument doesn't exist, create a new PhotoGallery with this data.
     */
    create: XOR<PhotoGalleryCreateInput, PhotoGalleryUncheckedCreateInput>
    /**
     * In case the PhotoGallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoGalleryUpdateInput, PhotoGalleryUncheckedUpdateInput>
  }


  /**
   * PhotoGallery delete
   */
  export type PhotoGalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoGallery
     */
    select?: PhotoGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoGalleryInclude<ExtArgs> | null
    /**
     * Filter which PhotoGallery to delete.
     */
    where: PhotoGalleryWhereUniqueInput
  }


  /**
   * PhotoGallery deleteMany
   */
  export type PhotoGalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoGalleries to delete
     */
    where?: PhotoGalleryWhereInput
  }


  /**
   * PhotoGallery findRaw
   */
  export type PhotoGalleryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PhotoGallery aggregateRaw
   */
  export type PhotoGalleryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PhotoGallery without action
   */
  export type PhotoGalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoGallery
     */
    select?: PhotoGallerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoGalleryInclude<ExtArgs> | null
  }



  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    body: string | null
    readAt: Date | null
    type: $Enums.NotificationType | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    body: string | null
    readAt: Date | null
    type: $Enums.NotificationType | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    body: number
    readAt: number
    type: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    body?: true
    readAt?: true
    type?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    body?: true
    readAt?: true
    type?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    body?: true
    readAt?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    body: string
    readAt: Date | null
    type: $Enums.NotificationType
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    body?: boolean
    data?: boolean | NotificationDataDefaultArgs<ExtArgs>
    readAt?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    body?: boolean
    readAt?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      body: string
      readAt: Date | null
      type: $Enums.NotificationType
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {
      data: Prisma.$NotificationDataPayload | null
    }
  }


  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
    **/
    create<T extends NotificationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Notifications.
     *     @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notification = await prisma.notification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
    **/
    delete<T extends NotificationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * @param {NotificationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notification = await prisma.notification.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: NotificationFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Notification.
     * @param {NotificationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notification = await prisma.notification.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: NotificationAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }


  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }


  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }


  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification findRaw
   */
  export type NotificationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Notification aggregateRaw
   */
  export type NotificationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
  }



  /**
   * Model Blocked
   */

  export type AggregateBlocked = {
    _count: BlockedCountAggregateOutputType | null
    _min: BlockedMinAggregateOutputType | null
    _max: BlockedMaxAggregateOutputType | null
  }

  export type BlockedMinAggregateOutputType = {
    id: string | null
    blockerId: string | null
    blockedId: string | null
    createdAt: Date | null
  }

  export type BlockedMaxAggregateOutputType = {
    id: string | null
    blockerId: string | null
    blockedId: string | null
    createdAt: Date | null
  }

  export type BlockedCountAggregateOutputType = {
    id: number
    blockerId: number
    blockedId: number
    createdAt: number
    _all: number
  }


  export type BlockedMinAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
    createdAt?: true
  }

  export type BlockedMaxAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
    createdAt?: true
  }

  export type BlockedCountAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
    createdAt?: true
    _all?: true
  }

  export type BlockedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocked to aggregate.
     */
    where?: BlockedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blockeds to fetch.
     */
    orderBy?: BlockedOrderByWithRelationInput | BlockedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blockeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blockeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blockeds
    **/
    _count?: true | BlockedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockedMaxAggregateInputType
  }

  export type GetBlockedAggregateType<T extends BlockedAggregateArgs> = {
        [P in keyof T & keyof AggregateBlocked]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlocked[P]>
      : GetScalarType<T[P], AggregateBlocked[P]>
  }




  export type BlockedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedWhereInput
    orderBy?: BlockedOrderByWithAggregationInput | BlockedOrderByWithAggregationInput[]
    by: BlockedScalarFieldEnum[] | BlockedScalarFieldEnum
    having?: BlockedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockedCountAggregateInputType | true
    _min?: BlockedMinAggregateInputType
    _max?: BlockedMaxAggregateInputType
  }

  export type BlockedGroupByOutputType = {
    id: string
    blockerId: string
    blockedId: string
    createdAt: Date
    _count: BlockedCountAggregateOutputType | null
    _min: BlockedMinAggregateOutputType | null
    _max: BlockedMaxAggregateOutputType | null
  }

  type GetBlockedGroupByPayload<T extends BlockedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockedGroupByOutputType[P]>
            : GetScalarType<T[P], BlockedGroupByOutputType[P]>
        }
      >
    >


  export type BlockedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockerId?: boolean
    blockedId?: boolean
    createdAt?: boolean
    userBlocker?: boolean | UserDefaultArgs<ExtArgs>
    userBloked?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blocked"]>

  export type BlockedSelectScalar = {
    id?: boolean
    blockerId?: boolean
    blockedId?: boolean
    createdAt?: boolean
  }

  export type BlockedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBlocker?: boolean | UserDefaultArgs<ExtArgs>
    userBloked?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $BlockedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blocked"
    objects: {
      userBlocker: Prisma.$UserPayload<ExtArgs>
      userBloked: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blockerId: string
      blockedId: string
      createdAt: Date
    }, ExtArgs["result"]["blocked"]>
    composites: {}
  }


  type BlockedGetPayload<S extends boolean | null | undefined | BlockedDefaultArgs> = $Result.GetResult<Prisma.$BlockedPayload, S>

  type BlockedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlockedFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlockedCountAggregateInputType | true
    }

  export interface BlockedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blocked'], meta: { name: 'Blocked' } }
    /**
     * Find zero or one Blocked that matches the filter.
     * @param {BlockedFindUniqueArgs} args - Arguments to find a Blocked
     * @example
     * // Get one Blocked
     * const blocked = await prisma.blocked.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlockedFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlockedFindUniqueArgs<ExtArgs>>
    ): Prisma__BlockedClient<$Result.GetResult<Prisma.$BlockedPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Blocked that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlockedFindUniqueOrThrowArgs} args - Arguments to find a Blocked
     * @example
     * // Get one Blocked
     * const blocked = await prisma.blocked.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlockedFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockedFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlockedClient<$Result.GetResult<Prisma.$BlockedPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Blocked that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedFindFirstArgs} args - Arguments to find a Blocked
     * @example
     * // Get one Blocked
     * const blocked = await prisma.blocked.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlockedFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockedFindFirstArgs<ExtArgs>>
    ): Prisma__BlockedClient<$Result.GetResult<Prisma.$BlockedPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Blocked that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedFindFirstOrThrowArgs} args - Arguments to find a Blocked
     * @example
     * // Get one Blocked
     * const blocked = await prisma.blocked.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlockedFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockedFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlockedClient<$Result.GetResult<Prisma.$BlockedPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Blockeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blockeds
     * const blockeds = await prisma.blocked.findMany()
     * 
     * // Get first 10 Blockeds
     * const blockeds = await prisma.blocked.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockedWithIdOnly = await prisma.blocked.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlockedFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockedFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Blocked.
     * @param {BlockedCreateArgs} args - Arguments to create a Blocked.
     * @example
     * // Create one Blocked
     * const Blocked = await prisma.blocked.create({
     *   data: {
     *     // ... data to create a Blocked
     *   }
     * })
     * 
    **/
    create<T extends BlockedCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockedCreateArgs<ExtArgs>>
    ): Prisma__BlockedClient<$Result.GetResult<Prisma.$BlockedPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Blockeds.
     *     @param {BlockedCreateManyArgs} args - Arguments to create many Blockeds.
     *     @example
     *     // Create many Blockeds
     *     const blocked = await prisma.blocked.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlockedCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockedCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blocked.
     * @param {BlockedDeleteArgs} args - Arguments to delete one Blocked.
     * @example
     * // Delete one Blocked
     * const Blocked = await prisma.blocked.delete({
     *   where: {
     *     // ... filter to delete one Blocked
     *   }
     * })
     * 
    **/
    delete<T extends BlockedDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlockedDeleteArgs<ExtArgs>>
    ): Prisma__BlockedClient<$Result.GetResult<Prisma.$BlockedPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Blocked.
     * @param {BlockedUpdateArgs} args - Arguments to update one Blocked.
     * @example
     * // Update one Blocked
     * const blocked = await prisma.blocked.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlockedUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockedUpdateArgs<ExtArgs>>
    ): Prisma__BlockedClient<$Result.GetResult<Prisma.$BlockedPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Blockeds.
     * @param {BlockedDeleteManyArgs} args - Arguments to filter Blockeds to delete.
     * @example
     * // Delete a few Blockeds
     * const { count } = await prisma.blocked.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlockedDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockedDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blockeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blockeds
     * const blocked = await prisma.blocked.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlockedUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlockedUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blocked.
     * @param {BlockedUpsertArgs} args - Arguments to update or create a Blocked.
     * @example
     * // Update or create a Blocked
     * const blocked = await prisma.blocked.upsert({
     *   create: {
     *     // ... data to create a Blocked
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blocked we want to update
     *   }
     * })
    **/
    upsert<T extends BlockedUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlockedUpsertArgs<ExtArgs>>
    ): Prisma__BlockedClient<$Result.GetResult<Prisma.$BlockedPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Blockeds that matches the filter.
     * @param {BlockedFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const blocked = await prisma.blocked.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: BlockedFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Blocked.
     * @param {BlockedAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const blocked = await prisma.blocked.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: BlockedAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Blockeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedCountArgs} args - Arguments to filter Blockeds to count.
     * @example
     * // Count the number of Blockeds
     * const count = await prisma.blocked.count({
     *   where: {
     *     // ... the filter for the Blockeds we want to count
     *   }
     * })
    **/
    count<T extends BlockedCountArgs>(
      args?: Subset<T, BlockedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blocked.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockedAggregateArgs>(args: Subset<T, BlockedAggregateArgs>): Prisma.PrismaPromise<GetBlockedAggregateType<T>>

    /**
     * Group by Blocked.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedGroupByArgs} args - Group by arguments.
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
      T extends BlockedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockedGroupByArgs['orderBy'] }
        : { orderBy?: BlockedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blocked model
   */
  readonly fields: BlockedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blocked.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userBlocker<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    userBloked<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Blocked model
   */ 
  interface BlockedFieldRefs {
    readonly id: FieldRef<"Blocked", 'String'>
    readonly blockerId: FieldRef<"Blocked", 'String'>
    readonly blockedId: FieldRef<"Blocked", 'String'>
    readonly createdAt: FieldRef<"Blocked", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Blocked findUnique
   */
  export type BlockedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocked
     */
    select?: BlockedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockedInclude<ExtArgs> | null
    /**
     * Filter, which Blocked to fetch.
     */
    where: BlockedWhereUniqueInput
  }


  /**
   * Blocked findUniqueOrThrow
   */
  export type BlockedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocked
     */
    select?: BlockedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockedInclude<ExtArgs> | null
    /**
     * Filter, which Blocked to fetch.
     */
    where: BlockedWhereUniqueInput
  }


  /**
   * Blocked findFirst
   */
  export type BlockedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocked
     */
    select?: BlockedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockedInclude<ExtArgs> | null
    /**
     * Filter, which Blocked to fetch.
     */
    where?: BlockedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blockeds to fetch.
     */
    orderBy?: BlockedOrderByWithRelationInput | BlockedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blockeds.
     */
    cursor?: BlockedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blockeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blockeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blockeds.
     */
    distinct?: BlockedScalarFieldEnum | BlockedScalarFieldEnum[]
  }


  /**
   * Blocked findFirstOrThrow
   */
  export type BlockedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocked
     */
    select?: BlockedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockedInclude<ExtArgs> | null
    /**
     * Filter, which Blocked to fetch.
     */
    where?: BlockedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blockeds to fetch.
     */
    orderBy?: BlockedOrderByWithRelationInput | BlockedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blockeds.
     */
    cursor?: BlockedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blockeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blockeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blockeds.
     */
    distinct?: BlockedScalarFieldEnum | BlockedScalarFieldEnum[]
  }


  /**
   * Blocked findMany
   */
  export type BlockedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocked
     */
    select?: BlockedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockedInclude<ExtArgs> | null
    /**
     * Filter, which Blockeds to fetch.
     */
    where?: BlockedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blockeds to fetch.
     */
    orderBy?: BlockedOrderByWithRelationInput | BlockedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blockeds.
     */
    cursor?: BlockedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blockeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blockeds.
     */
    skip?: number
    distinct?: BlockedScalarFieldEnum | BlockedScalarFieldEnum[]
  }


  /**
   * Blocked create
   */
  export type BlockedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocked
     */
    select?: BlockedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockedInclude<ExtArgs> | null
    /**
     * The data needed to create a Blocked.
     */
    data: XOR<BlockedCreateInput, BlockedUncheckedCreateInput>
  }


  /**
   * Blocked createMany
   */
  export type BlockedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blockeds.
     */
    data: BlockedCreateManyInput | BlockedCreateManyInput[]
  }


  /**
   * Blocked update
   */
  export type BlockedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocked
     */
    select?: BlockedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockedInclude<ExtArgs> | null
    /**
     * The data needed to update a Blocked.
     */
    data: XOR<BlockedUpdateInput, BlockedUncheckedUpdateInput>
    /**
     * Choose, which Blocked to update.
     */
    where: BlockedWhereUniqueInput
  }


  /**
   * Blocked updateMany
   */
  export type BlockedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blockeds.
     */
    data: XOR<BlockedUpdateManyMutationInput, BlockedUncheckedUpdateManyInput>
    /**
     * Filter which Blockeds to update
     */
    where?: BlockedWhereInput
  }


  /**
   * Blocked upsert
   */
  export type BlockedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocked
     */
    select?: BlockedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockedInclude<ExtArgs> | null
    /**
     * The filter to search for the Blocked to update in case it exists.
     */
    where: BlockedWhereUniqueInput
    /**
     * In case the Blocked found by the `where` argument doesn't exist, create a new Blocked with this data.
     */
    create: XOR<BlockedCreateInput, BlockedUncheckedCreateInput>
    /**
     * In case the Blocked was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockedUpdateInput, BlockedUncheckedUpdateInput>
  }


  /**
   * Blocked delete
   */
  export type BlockedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocked
     */
    select?: BlockedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockedInclude<ExtArgs> | null
    /**
     * Filter which Blocked to delete.
     */
    where: BlockedWhereUniqueInput
  }


  /**
   * Blocked deleteMany
   */
  export type BlockedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blockeds to delete
     */
    where?: BlockedWhereInput
  }


  /**
   * Blocked findRaw
   */
  export type BlockedFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Blocked aggregateRaw
   */
  export type BlockedAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Blocked without action
   */
  export type BlockedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocked
     */
    select?: BlockedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BlockedInclude<ExtArgs> | null
  }



  /**
   * Model UserMatch
   */

  export type AggregateUserMatch = {
    _count: UserMatchCountAggregateOutputType | null
    _min: UserMatchMinAggregateOutputType | null
    _max: UserMatchMaxAggregateOutputType | null
  }

  export type UserMatchMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    liked: boolean | null
    status: $Enums.MatchStatus | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserMatchMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    liked: boolean | null
    status: $Enums.MatchStatus | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserMatchCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    liked: number
    status: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type UserMatchMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    liked?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserMatchMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    liked?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserMatchCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    liked?: true
    status?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMatch to aggregate.
     */
    where?: UserMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMatches to fetch.
     */
    orderBy?: UserMatchOrderByWithRelationInput | UserMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMatches
    **/
    _count?: true | UserMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMatchMaxAggregateInputType
  }

  export type GetUserMatchAggregateType<T extends UserMatchAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMatch[P]>
      : GetScalarType<T[P], AggregateUserMatch[P]>
  }




  export type UserMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMatchWhereInput
    orderBy?: UserMatchOrderByWithAggregationInput | UserMatchOrderByWithAggregationInput[]
    by: UserMatchScalarFieldEnum[] | UserMatchScalarFieldEnum
    having?: UserMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMatchCountAggregateInputType | true
    _min?: UserMatchMinAggregateInputType
    _max?: UserMatchMaxAggregateInputType
  }

  export type UserMatchGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    liked: boolean
    status: $Enums.MatchStatus
    updatedAt: Date
    createdAt: Date
    _count: UserMatchCountAggregateOutputType | null
    _min: UserMatchMinAggregateOutputType | null
    _max: UserMatchMaxAggregateOutputType | null
  }

  type GetUserMatchGroupByPayload<T extends UserMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMatchGroupByOutputType[P]>
            : GetScalarType<T[P], UserMatchGroupByOutputType[P]>
        }
      >
    >


  export type UserMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    liked?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | UserMatch$conversationArgs<ExtArgs>
  }, ExtArgs["result"]["userMatch"]>

  export type UserMatchSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    liked?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type UserMatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    conversation?: boolean | UserMatch$conversationArgs<ExtArgs>
  }


  export type $UserMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMatch"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      conversation: Prisma.$ConversationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      liked: boolean
      status: $Enums.MatchStatus
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["userMatch"]>
    composites: {}
  }


  type UserMatchGetPayload<S extends boolean | null | undefined | UserMatchDefaultArgs> = $Result.GetResult<Prisma.$UserMatchPayload, S>

  type UserMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserMatchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserMatchCountAggregateInputType | true
    }

  export interface UserMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMatch'], meta: { name: 'UserMatch' } }
    /**
     * Find zero or one UserMatch that matches the filter.
     * @param {UserMatchFindUniqueArgs} args - Arguments to find a UserMatch
     * @example
     * // Get one UserMatch
     * const userMatch = await prisma.userMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserMatchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserMatchFindUniqueArgs<ExtArgs>>
    ): Prisma__UserMatchClient<$Result.GetResult<Prisma.$UserMatchPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserMatch that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserMatchFindUniqueOrThrowArgs} args - Arguments to find a UserMatch
     * @example
     * // Get one UserMatch
     * const userMatch = await prisma.userMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserMatchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMatchFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserMatchClient<$Result.GetResult<Prisma.$UserMatchPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMatchFindFirstArgs} args - Arguments to find a UserMatch
     * @example
     * // Get one UserMatch
     * const userMatch = await prisma.userMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserMatchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMatchFindFirstArgs<ExtArgs>>
    ): Prisma__UserMatchClient<$Result.GetResult<Prisma.$UserMatchPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMatchFindFirstOrThrowArgs} args - Arguments to find a UserMatch
     * @example
     * // Get one UserMatch
     * const userMatch = await prisma.userMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserMatchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMatchFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserMatchClient<$Result.GetResult<Prisma.$UserMatchPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMatchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMatches
     * const userMatches = await prisma.userMatch.findMany()
     * 
     * // Get first 10 UserMatches
     * const userMatches = await prisma.userMatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMatchWithIdOnly = await prisma.userMatch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserMatchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMatchFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMatchPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserMatch.
     * @param {UserMatchCreateArgs} args - Arguments to create a UserMatch.
     * @example
     * // Create one UserMatch
     * const UserMatch = await prisma.userMatch.create({
     *   data: {
     *     // ... data to create a UserMatch
     *   }
     * })
     * 
    **/
    create<T extends UserMatchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserMatchCreateArgs<ExtArgs>>
    ): Prisma__UserMatchClient<$Result.GetResult<Prisma.$UserMatchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserMatches.
     *     @param {UserMatchCreateManyArgs} args - Arguments to create many UserMatches.
     *     @example
     *     // Create many UserMatches
     *     const userMatch = await prisma.userMatch.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserMatchCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMatchCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserMatch.
     * @param {UserMatchDeleteArgs} args - Arguments to delete one UserMatch.
     * @example
     * // Delete one UserMatch
     * const UserMatch = await prisma.userMatch.delete({
     *   where: {
     *     // ... filter to delete one UserMatch
     *   }
     * })
     * 
    **/
    delete<T extends UserMatchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserMatchDeleteArgs<ExtArgs>>
    ): Prisma__UserMatchClient<$Result.GetResult<Prisma.$UserMatchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserMatch.
     * @param {UserMatchUpdateArgs} args - Arguments to update one UserMatch.
     * @example
     * // Update one UserMatch
     * const userMatch = await prisma.userMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserMatchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserMatchUpdateArgs<ExtArgs>>
    ): Prisma__UserMatchClient<$Result.GetResult<Prisma.$UserMatchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserMatches.
     * @param {UserMatchDeleteManyArgs} args - Arguments to filter UserMatches to delete.
     * @example
     * // Delete a few UserMatches
     * const { count } = await prisma.userMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserMatchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMatchDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMatches
     * const userMatch = await prisma.userMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserMatchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserMatchUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMatch.
     * @param {UserMatchUpsertArgs} args - Arguments to update or create a UserMatch.
     * @example
     * // Update or create a UserMatch
     * const userMatch = await prisma.userMatch.upsert({
     *   create: {
     *     // ... data to create a UserMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMatch we want to update
     *   }
     * })
    **/
    upsert<T extends UserMatchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserMatchUpsertArgs<ExtArgs>>
    ): Prisma__UserMatchClient<$Result.GetResult<Prisma.$UserMatchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more UserMatches that matches the filter.
     * @param {UserMatchFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userMatch = await prisma.userMatch.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserMatchFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserMatch.
     * @param {UserMatchAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userMatch = await prisma.userMatch.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserMatchAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of UserMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMatchCountArgs} args - Arguments to filter UserMatches to count.
     * @example
     * // Count the number of UserMatches
     * const count = await prisma.userMatch.count({
     *   where: {
     *     // ... the filter for the UserMatches we want to count
     *   }
     * })
    **/
    count<T extends UserMatchCountArgs>(
      args?: Subset<T, UserMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserMatchAggregateArgs>(args: Subset<T, UserMatchAggregateArgs>): Prisma.PrismaPromise<GetUserMatchAggregateType<T>>

    /**
     * Group by UserMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMatchGroupByArgs} args - Group by arguments.
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
      T extends UserMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMatchGroupByArgs['orderBy'] }
        : { orderBy?: UserMatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMatch model
   */
  readonly fields: UserMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    conversation<T extends UserMatch$conversationArgs<ExtArgs> = {}>(args?: Subset<T, UserMatch$conversationArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the UserMatch model
   */ 
  interface UserMatchFieldRefs {
    readonly id: FieldRef<"UserMatch", 'String'>
    readonly senderId: FieldRef<"UserMatch", 'String'>
    readonly receiverId: FieldRef<"UserMatch", 'String'>
    readonly liked: FieldRef<"UserMatch", 'Boolean'>
    readonly status: FieldRef<"UserMatch", 'MatchStatus'>
    readonly updatedAt: FieldRef<"UserMatch", 'DateTime'>
    readonly createdAt: FieldRef<"UserMatch", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserMatch findUnique
   */
  export type UserMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatch
     */
    select?: UserMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMatchInclude<ExtArgs> | null
    /**
     * Filter, which UserMatch to fetch.
     */
    where: UserMatchWhereUniqueInput
  }


  /**
   * UserMatch findUniqueOrThrow
   */
  export type UserMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatch
     */
    select?: UserMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMatchInclude<ExtArgs> | null
    /**
     * Filter, which UserMatch to fetch.
     */
    where: UserMatchWhereUniqueInput
  }


  /**
   * UserMatch findFirst
   */
  export type UserMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatch
     */
    select?: UserMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMatchInclude<ExtArgs> | null
    /**
     * Filter, which UserMatch to fetch.
     */
    where?: UserMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMatches to fetch.
     */
    orderBy?: UserMatchOrderByWithRelationInput | UserMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMatches.
     */
    cursor?: UserMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMatches.
     */
    distinct?: UserMatchScalarFieldEnum | UserMatchScalarFieldEnum[]
  }


  /**
   * UserMatch findFirstOrThrow
   */
  export type UserMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatch
     */
    select?: UserMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMatchInclude<ExtArgs> | null
    /**
     * Filter, which UserMatch to fetch.
     */
    where?: UserMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMatches to fetch.
     */
    orderBy?: UserMatchOrderByWithRelationInput | UserMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMatches.
     */
    cursor?: UserMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMatches.
     */
    distinct?: UserMatchScalarFieldEnum | UserMatchScalarFieldEnum[]
  }


  /**
   * UserMatch findMany
   */
  export type UserMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatch
     */
    select?: UserMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMatchInclude<ExtArgs> | null
    /**
     * Filter, which UserMatches to fetch.
     */
    where?: UserMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMatches to fetch.
     */
    orderBy?: UserMatchOrderByWithRelationInput | UserMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMatches.
     */
    cursor?: UserMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMatches.
     */
    skip?: number
    distinct?: UserMatchScalarFieldEnum | UserMatchScalarFieldEnum[]
  }


  /**
   * UserMatch create
   */
  export type UserMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatch
     */
    select?: UserMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMatchInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMatch.
     */
    data: XOR<UserMatchCreateInput, UserMatchUncheckedCreateInput>
  }


  /**
   * UserMatch createMany
   */
  export type UserMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMatches.
     */
    data: UserMatchCreateManyInput | UserMatchCreateManyInput[]
  }


  /**
   * UserMatch update
   */
  export type UserMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatch
     */
    select?: UserMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMatchInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMatch.
     */
    data: XOR<UserMatchUpdateInput, UserMatchUncheckedUpdateInput>
    /**
     * Choose, which UserMatch to update.
     */
    where: UserMatchWhereUniqueInput
  }


  /**
   * UserMatch updateMany
   */
  export type UserMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMatches.
     */
    data: XOR<UserMatchUpdateManyMutationInput, UserMatchUncheckedUpdateManyInput>
    /**
     * Filter which UserMatches to update
     */
    where?: UserMatchWhereInput
  }


  /**
   * UserMatch upsert
   */
  export type UserMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatch
     */
    select?: UserMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMatchInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMatch to update in case it exists.
     */
    where: UserMatchWhereUniqueInput
    /**
     * In case the UserMatch found by the `where` argument doesn't exist, create a new UserMatch with this data.
     */
    create: XOR<UserMatchCreateInput, UserMatchUncheckedCreateInput>
    /**
     * In case the UserMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMatchUpdateInput, UserMatchUncheckedUpdateInput>
  }


  /**
   * UserMatch delete
   */
  export type UserMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatch
     */
    select?: UserMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMatchInclude<ExtArgs> | null
    /**
     * Filter which UserMatch to delete.
     */
    where: UserMatchWhereUniqueInput
  }


  /**
   * UserMatch deleteMany
   */
  export type UserMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMatches to delete
     */
    where?: UserMatchWhereInput
  }


  /**
   * UserMatch findRaw
   */
  export type UserMatchFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserMatch aggregateRaw
   */
  export type UserMatchAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserMatch.conversation
   */
  export type UserMatch$conversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
  }


  /**
   * UserMatch without action
   */
  export type UserMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMatch
     */
    select?: UserMatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMatchInclude<ExtArgs> | null
  }



  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    matchId: string | null
    createdAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    matchId: string | null
    createdAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    matchId: number
    createdAt: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    matchId?: true
    createdAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    matchId?: true
    createdAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    matchId?: true
    createdAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    matchId: string
    createdAt: Date
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    createdAt?: boolean
    match?: boolean | UserMatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    matchId?: boolean
    createdAt?: boolean
  }

  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | UserMatchDefaultArgs<ExtArgs>
  }


  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      match: Prisma.$UserMatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchId: string
      createdAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }


  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConversationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Conversation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConversationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConversationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
    **/
    create<T extends ConversationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Conversations.
     *     @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     *     @example
     *     // Create many Conversations
     *     const conversation = await prisma.conversation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConversationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
    **/
    delete<T extends ConversationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConversationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConversationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConversationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
    **/
    upsert<T extends ConversationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Conversations that matches the filter.
     * @param {ConversationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const conversation = await prisma.conversation.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ConversationFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Conversation.
     * @param {ConversationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const conversation = await prisma.conversation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ConversationAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
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
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    match<T extends UserMatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserMatchDefaultArgs<ExtArgs>>): Prisma__UserMatchClient<$Result.GetResult<Prisma.$UserMatchPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Conversation model
   */ 
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly matchId: FieldRef<"Conversation", 'String'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }


  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
  }


  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
  }


  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }


  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
  }


  /**
   * Conversation findRaw
   */
  export type ConversationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Conversation aggregateRaw
   */
  export type ConversationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    birth: 'birth',
    description: 'description',
    coinAmount: 'coinAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userGalleryId: 'userGalleryId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PassionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type PassionScalarFieldEnum = (typeof PassionScalarFieldEnum)[keyof typeof PassionScalarFieldEnum]


  export const UserGalleryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserGalleryScalarFieldEnum = (typeof UserGalleryScalarFieldEnum)[keyof typeof UserGalleryScalarFieldEnum]


  export const PhotoGalleryScalarFieldEnum: {
    id: 'id',
    path: 'path',
    userGalleryId: 'userGalleryId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type PhotoGalleryScalarFieldEnum = (typeof PhotoGalleryScalarFieldEnum)[keyof typeof PhotoGalleryScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    body: 'body',
    readAt: 'readAt',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const BlockedScalarFieldEnum: {
    id: 'id',
    blockerId: 'blockerId',
    blockedId: 'blockedId',
    createdAt: 'createdAt'
  };

  export type BlockedScalarFieldEnum = (typeof BlockedScalarFieldEnum)[keyof typeof BlockedScalarFieldEnum]


  export const UserMatchScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    liked: 'liked',
    status: 'status',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type UserMatchScalarFieldEnum = (typeof UserMatchScalarFieldEnum)[keyof typeof UserMatchScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    createdAt: 'createdAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


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
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MatchStatus'
   */
  export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>
    


  /**
   * Reference to a field of type 'MatchStatus[]'
   */
  export type ListEnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    photoProfile?: XOR<UserPhotoProfileCompositeFilter, UserPhotoProfileObjectEqualityInput>
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    birth?: DateTimeFilter<"User"> | Date | string
    description?: StringFilter<"User"> | string
    coinAmount?: IntFilter<"User"> | number
    passions?: UserPassionCompositeListFilter | UserPassionObjectEqualityInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userGalleryId?: StringNullableFilter<"User"> | string | null
    userGallery?: XOR<UserGalleryNullableRelationFilter, UserGalleryWhereInput> | null
    Notification?: NotificationListRelationFilter
    Blocking?: BlockedListRelationFilter
    Blocked?: BlockedListRelationFilter
    sender?: UserMatchListRelationFilter
    receiver?: UserMatchListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    photoProfile?: UserPhotoProfileOrderByInput
    gender?: SortOrder
    birth?: SortOrder
    description?: SortOrder
    coinAmount?: SortOrder
    passions?: UserPassionOrderByCompositeAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userGalleryId?: SortOrder
    userGallery?: UserGalleryOrderByWithRelationInput
    Notification?: NotificationOrderByRelationAggregateInput
    Blocking?: BlockedOrderByRelationAggregateInput
    Blocked?: BlockedOrderByRelationAggregateInput
    sender?: UserMatchOrderByRelationAggregateInput
    receiver?: UserMatchOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userGalleryId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    photoProfile?: XOR<UserPhotoProfileCompositeFilter, UserPhotoProfileObjectEqualityInput>
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    birth?: DateTimeFilter<"User"> | Date | string
    description?: StringFilter<"User"> | string
    coinAmount?: IntFilter<"User"> | number
    passions?: UserPassionCompositeListFilter | UserPassionObjectEqualityInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userGallery?: XOR<UserGalleryNullableRelationFilter, UserGalleryWhereInput> | null
    Notification?: NotificationListRelationFilter
    Blocking?: BlockedListRelationFilter
    Blocked?: BlockedListRelationFilter
    sender?: UserMatchListRelationFilter
    receiver?: UserMatchListRelationFilter
  }, "id" | "userGalleryId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    description?: SortOrder
    coinAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userGalleryId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    birth?: DateTimeWithAggregatesFilter<"User"> | Date | string
    description?: StringWithAggregatesFilter<"User"> | string
    coinAmount?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    userGalleryId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PassionWhereInput = {
    AND?: PassionWhereInput | PassionWhereInput[]
    OR?: PassionWhereInput[]
    NOT?: PassionWhereInput | PassionWhereInput[]
    id?: StringFilter<"Passion"> | string
    name?: StringFilter<"Passion"> | string
    createdAt?: DateTimeFilter<"Passion"> | Date | string
  }

  export type PassionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PassionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PassionWhereInput | PassionWhereInput[]
    OR?: PassionWhereInput[]
    NOT?: PassionWhereInput | PassionWhereInput[]
    name?: StringFilter<"Passion"> | string
    createdAt?: DateTimeFilter<"Passion"> | Date | string
  }, "id">

  export type PassionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: PassionCountOrderByAggregateInput
    _max?: PassionMaxOrderByAggregateInput
    _min?: PassionMinOrderByAggregateInput
  }

  export type PassionScalarWhereWithAggregatesInput = {
    AND?: PassionScalarWhereWithAggregatesInput | PassionScalarWhereWithAggregatesInput[]
    OR?: PassionScalarWhereWithAggregatesInput[]
    NOT?: PassionScalarWhereWithAggregatesInput | PassionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Passion"> | string
    name?: StringWithAggregatesFilter<"Passion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Passion"> | Date | string
  }

  export type UserGalleryWhereInput = {
    AND?: UserGalleryWhereInput | UserGalleryWhereInput[]
    OR?: UserGalleryWhereInput[]
    NOT?: UserGalleryWhereInput | UserGalleryWhereInput[]
    id?: StringFilter<"UserGallery"> | string
    createdAt?: DateTimeFilter<"UserGallery"> | Date | string
    updatedAt?: DateTimeFilter<"UserGallery"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    PhotoGallery?: PhotoGalleryListRelationFilter
  }

  export type UserGalleryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    PhotoGallery?: PhotoGalleryOrderByRelationAggregateInput
  }

  export type UserGalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserGalleryWhereInput | UserGalleryWhereInput[]
    OR?: UserGalleryWhereInput[]
    NOT?: UserGalleryWhereInput | UserGalleryWhereInput[]
    createdAt?: DateTimeFilter<"UserGallery"> | Date | string
    updatedAt?: DateTimeFilter<"UserGallery"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    PhotoGallery?: PhotoGalleryListRelationFilter
  }, "id">

  export type UserGalleryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserGalleryCountOrderByAggregateInput
    _max?: UserGalleryMaxOrderByAggregateInput
    _min?: UserGalleryMinOrderByAggregateInput
  }

  export type UserGalleryScalarWhereWithAggregatesInput = {
    AND?: UserGalleryScalarWhereWithAggregatesInput | UserGalleryScalarWhereWithAggregatesInput[]
    OR?: UserGalleryScalarWhereWithAggregatesInput[]
    NOT?: UserGalleryScalarWhereWithAggregatesInput | UserGalleryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserGallery"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserGallery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserGallery"> | Date | string
  }

  export type PhotoGalleryWhereInput = {
    AND?: PhotoGalleryWhereInput | PhotoGalleryWhereInput[]
    OR?: PhotoGalleryWhereInput[]
    NOT?: PhotoGalleryWhereInput | PhotoGalleryWhereInput[]
    id?: StringFilter<"PhotoGallery"> | string
    path?: StringFilter<"PhotoGallery"> | string
    userGalleryId?: StringFilter<"PhotoGallery"> | string
    createdAt?: DateTimeFilter<"PhotoGallery"> | Date | string
    deletedAt?: DateTimeNullableFilter<"PhotoGallery"> | Date | string | null
    userGallery?: XOR<UserGalleryRelationFilter, UserGalleryWhereInput>
  }

  export type PhotoGalleryOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    userGalleryId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    userGallery?: UserGalleryOrderByWithRelationInput
  }

  export type PhotoGalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoGalleryWhereInput | PhotoGalleryWhereInput[]
    OR?: PhotoGalleryWhereInput[]
    NOT?: PhotoGalleryWhereInput | PhotoGalleryWhereInput[]
    path?: StringFilter<"PhotoGallery"> | string
    userGalleryId?: StringFilter<"PhotoGallery"> | string
    createdAt?: DateTimeFilter<"PhotoGallery"> | Date | string
    deletedAt?: DateTimeNullableFilter<"PhotoGallery"> | Date | string | null
    userGallery?: XOR<UserGalleryRelationFilter, UserGalleryWhereInput>
  }, "id">

  export type PhotoGalleryOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    userGalleryId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    _count?: PhotoGalleryCountOrderByAggregateInput
    _max?: PhotoGalleryMaxOrderByAggregateInput
    _min?: PhotoGalleryMinOrderByAggregateInput
  }

  export type PhotoGalleryScalarWhereWithAggregatesInput = {
    AND?: PhotoGalleryScalarWhereWithAggregatesInput | PhotoGalleryScalarWhereWithAggregatesInput[]
    OR?: PhotoGalleryScalarWhereWithAggregatesInput[]
    NOT?: PhotoGalleryScalarWhereWithAggregatesInput | PhotoGalleryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhotoGallery"> | string
    path?: StringWithAggregatesFilter<"PhotoGallery"> | string
    userGalleryId?: StringWithAggregatesFilter<"PhotoGallery"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PhotoGallery"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"PhotoGallery"> | Date | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    data?: XOR<NotificationDataNullableCompositeFilter, NotificationDataObjectEqualityInput> | null
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    data?: NotificationDataOrderByInput
    readAt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    data?: XOR<NotificationDataNullableCompositeFilter, NotificationDataObjectEqualityInput> | null
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    readAt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    body?: StringWithAggregatesFilter<"Notification"> | string
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type BlockedWhereInput = {
    AND?: BlockedWhereInput | BlockedWhereInput[]
    OR?: BlockedWhereInput[]
    NOT?: BlockedWhereInput | BlockedWhereInput[]
    id?: StringFilter<"Blocked"> | string
    blockerId?: StringFilter<"Blocked"> | string
    blockedId?: StringFilter<"Blocked"> | string
    createdAt?: DateTimeFilter<"Blocked"> | Date | string
    userBlocker?: XOR<UserRelationFilter, UserWhereInput>
    userBloked?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BlockedOrderByWithRelationInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
    userBlocker?: UserOrderByWithRelationInput
    userBloked?: UserOrderByWithRelationInput
  }

  export type BlockedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlockedWhereInput | BlockedWhereInput[]
    OR?: BlockedWhereInput[]
    NOT?: BlockedWhereInput | BlockedWhereInput[]
    blockerId?: StringFilter<"Blocked"> | string
    blockedId?: StringFilter<"Blocked"> | string
    createdAt?: DateTimeFilter<"Blocked"> | Date | string
    userBlocker?: XOR<UserRelationFilter, UserWhereInput>
    userBloked?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type BlockedOrderByWithAggregationInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
    _count?: BlockedCountOrderByAggregateInput
    _max?: BlockedMaxOrderByAggregateInput
    _min?: BlockedMinOrderByAggregateInput
  }

  export type BlockedScalarWhereWithAggregatesInput = {
    AND?: BlockedScalarWhereWithAggregatesInput | BlockedScalarWhereWithAggregatesInput[]
    OR?: BlockedScalarWhereWithAggregatesInput[]
    NOT?: BlockedScalarWhereWithAggregatesInput | BlockedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blocked"> | string
    blockerId?: StringWithAggregatesFilter<"Blocked"> | string
    blockedId?: StringWithAggregatesFilter<"Blocked"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Blocked"> | Date | string
  }

  export type UserMatchWhereInput = {
    AND?: UserMatchWhereInput | UserMatchWhereInput[]
    OR?: UserMatchWhereInput[]
    NOT?: UserMatchWhereInput | UserMatchWhereInput[]
    id?: StringFilter<"UserMatch"> | string
    senderId?: StringFilter<"UserMatch"> | string
    receiverId?: StringFilter<"UserMatch"> | string
    liked?: BoolFilter<"UserMatch"> | boolean
    status?: EnumMatchStatusFilter<"UserMatch"> | $Enums.MatchStatus
    updatedAt?: DateTimeFilter<"UserMatch"> | Date | string
    createdAt?: DateTimeFilter<"UserMatch"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
    receiver?: XOR<UserRelationFilter, UserWhereInput>
    conversation?: XOR<ConversationNullableRelationFilter, ConversationWhereInput> | null
  }

  export type UserMatchOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    liked?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    conversation?: ConversationOrderByWithRelationInput
  }

  export type UserMatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserMatchWhereInput | UserMatchWhereInput[]
    OR?: UserMatchWhereInput[]
    NOT?: UserMatchWhereInput | UserMatchWhereInput[]
    senderId?: StringFilter<"UserMatch"> | string
    receiverId?: StringFilter<"UserMatch"> | string
    liked?: BoolFilter<"UserMatch"> | boolean
    status?: EnumMatchStatusFilter<"UserMatch"> | $Enums.MatchStatus
    updatedAt?: DateTimeFilter<"UserMatch"> | Date | string
    createdAt?: DateTimeFilter<"UserMatch"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
    receiver?: XOR<UserRelationFilter, UserWhereInput>
    conversation?: XOR<ConversationNullableRelationFilter, ConversationWhereInput> | null
  }, "id">

  export type UserMatchOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    liked?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserMatchCountOrderByAggregateInput
    _max?: UserMatchMaxOrderByAggregateInput
    _min?: UserMatchMinOrderByAggregateInput
  }

  export type UserMatchScalarWhereWithAggregatesInput = {
    AND?: UserMatchScalarWhereWithAggregatesInput | UserMatchScalarWhereWithAggregatesInput[]
    OR?: UserMatchScalarWhereWithAggregatesInput[]
    NOT?: UserMatchScalarWhereWithAggregatesInput | UserMatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserMatch"> | string
    senderId?: StringWithAggregatesFilter<"UserMatch"> | string
    receiverId?: StringWithAggregatesFilter<"UserMatch"> | string
    liked?: BoolWithAggregatesFilter<"UserMatch"> | boolean
    status?: EnumMatchStatusWithAggregatesFilter<"UserMatch"> | $Enums.MatchStatus
    updatedAt?: DateTimeWithAggregatesFilter<"UserMatch"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserMatch"> | Date | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    matchId?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    match?: XOR<UserMatchRelationFilter, UserMatchWhereInput>
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    createdAt?: SortOrder
    match?: UserMatchOrderByWithRelationInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchId?: string
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    match?: XOR<UserMatchRelationFilter, UserMatchWhereInput>
  }, "id" | "matchId">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    createdAt?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    matchId?: StringWithAggregatesFilter<"Conversation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userGallery?: UserGalleryCreateNestedOneWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Blocking?: BlockedCreateNestedManyWithoutUserBlockerInput
    Blocked?: BlockedCreateNestedManyWithoutUserBlokedInput
    sender?: UserMatchCreateNestedManyWithoutSenderInput
    receiver?: UserMatchCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userGalleryId?: string | null
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Blocking?: BlockedUncheckedCreateNestedManyWithoutUserBlockerInput
    Blocked?: BlockedUncheckedCreateNestedManyWithoutUserBlokedInput
    sender?: UserMatchUncheckedCreateNestedManyWithoutSenderInput
    receiver?: UserMatchUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGallery?: UserGalleryUpdateOneWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Blocking?: BlockedUpdateManyWithoutUserBlockerNestedInput
    Blocked?: BlockedUpdateManyWithoutUserBlokedNestedInput
    sender?: UserMatchUpdateManyWithoutSenderNestedInput
    receiver?: UserMatchUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGalleryId?: NullableStringFieldUpdateOperationsInput | string | null
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Blocking?: BlockedUncheckedUpdateManyWithoutUserBlockerNestedInput
    Blocked?: BlockedUncheckedUpdateManyWithoutUserBlokedNestedInput
    sender?: UserMatchUncheckedUpdateManyWithoutSenderNestedInput
    receiver?: UserMatchUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userGalleryId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGalleryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PassionCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type PassionUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type PassionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassionUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassionCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type PassionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassionUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGalleryCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutUserGalleryInput
    PhotoGallery?: PhotoGalleryCreateNestedManyWithoutUserGalleryInput
  }

  export type UserGalleryUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutUserGalleryInput
    PhotoGallery?: PhotoGalleryUncheckedCreateNestedManyWithoutUserGalleryInput
  }

  export type UserGalleryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutUserGalleryNestedInput
    PhotoGallery?: PhotoGalleryUpdateManyWithoutUserGalleryNestedInput
  }

  export type UserGalleryUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutUserGalleryNestedInput
    PhotoGallery?: PhotoGalleryUncheckedUpdateManyWithoutUserGalleryNestedInput
  }

  export type UserGalleryCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGalleryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGalleryUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoGalleryCreateInput = {
    id?: string
    path: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userGallery: UserGalleryCreateNestedOneWithoutPhotoGalleryInput
  }

  export type PhotoGalleryUncheckedCreateInput = {
    id?: string
    path: string
    userGalleryId: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PhotoGalleryUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userGallery?: UserGalleryUpdateOneRequiredWithoutPhotoGalleryNestedInput
  }

  export type PhotoGalleryUncheckedUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    userGalleryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhotoGalleryCreateManyInput = {
    id?: string
    path: string
    userGalleryId: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PhotoGalleryUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhotoGalleryUncheckedUpdateManyInput = {
    path?: StringFieldUpdateOperationsInput | string
    userGalleryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    body: string
    data?: XOR<NotificationDataNullableCreateEnvelopeInput, NotificationDataCreateInput> | null
    readAt?: Date | string | null
    type: $Enums.NotificationType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    body: string
    data?: XOR<NotificationDataNullableCreateEnvelopeInput, NotificationDataCreateInput> | null
    readAt?: Date | string | null
    type: $Enums.NotificationType
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: XOR<NotificationDataNullableUpdateEnvelopeInput, NotificationDataCreateInput> | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: XOR<NotificationDataNullableUpdateEnvelopeInput, NotificationDataCreateInput> | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    body: string
    data?: XOR<NotificationDataNullableCreateEnvelopeInput, NotificationDataCreateInput> | null
    readAt?: Date | string | null
    type: $Enums.NotificationType
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: XOR<NotificationDataNullableUpdateEnvelopeInput, NotificationDataCreateInput> | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: XOR<NotificationDataNullableUpdateEnvelopeInput, NotificationDataCreateInput> | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedCreateInput = {
    id?: string
    createdAt?: Date | string
    userBlocker: UserCreateNestedOneWithoutBlockingInput
    userBloked: UserCreateNestedOneWithoutBlockedInput
  }

  export type BlockedUncheckedCreateInput = {
    id?: string
    blockerId: string
    blockedId: string
    createdAt?: Date | string
  }

  export type BlockedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBlocker?: UserUpdateOneRequiredWithoutBlockingNestedInput
    userBloked?: UserUpdateOneRequiredWithoutBlockedNestedInput
  }

  export type BlockedUncheckedUpdateInput = {
    blockerId?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedCreateManyInput = {
    id?: string
    blockerId: string
    blockedId: string
    createdAt?: Date | string
  }

  export type BlockedUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUncheckedUpdateManyInput = {
    blockerId?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMatchCreateInput = {
    id?: string
    liked: boolean
    status: $Enums.MatchStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSenderInput
    receiver: UserCreateNestedOneWithoutReceiverInput
    conversation?: ConversationCreateNestedOneWithoutMatchInput
  }

  export type UserMatchUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    liked: boolean
    status: $Enums.MatchStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    conversation?: ConversationUncheckedCreateNestedOneWithoutMatchInput
  }

  export type UserMatchUpdateInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSenderNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceiverNestedInput
    conversation?: ConversationUpdateOneWithoutMatchNestedInput
  }

  export type UserMatchUncheckedUpdateInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    liked?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type UserMatchCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    liked: boolean
    status: $Enums.MatchStatus
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserMatchUpdateManyMutationInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMatchUncheckedUpdateManyInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    liked?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateInput = {
    id?: string
    createdAt?: Date | string
    match: UserMatchCreateNestedOneWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    matchId: string
    createdAt?: Date | string
  }

  export type ConversationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: UserMatchUpdateOneRequiredWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    matchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateManyInput = {
    id?: string
    matchId: string
    createdAt?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    matchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserPhotoProfileCompositeFilter = {
    equals?: UserPhotoProfileObjectEqualityInput
    is?: UserPhotoProfileWhereInput
    isNot?: UserPhotoProfileWhereInput
  }

  export type UserPhotoProfileObjectEqualityInput = {
    path: string
    updatedAt: Date | string
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type UserPassionCompositeListFilter = {
    equals?: UserPassionObjectEqualityInput[]
    every?: UserPassionWhereInput
    some?: UserPassionWhereInput
    none?: UserPassionWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type UserPassionObjectEqualityInput = {
    name: string
    createdAt: Date | string
    deletedAt?: Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type UserGalleryNullableRelationFilter = {
    is?: UserGalleryWhereInput | null
    isNot?: UserGalleryWhereInput | null
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type BlockedListRelationFilter = {
    every?: BlockedWhereInput
    some?: BlockedWhereInput
    none?: BlockedWhereInput
  }

  export type UserMatchListRelationFilter = {
    every?: UserMatchWhereInput
    some?: UserMatchWhereInput
    none?: UserMatchWhereInput
  }

  export type UserPhotoProfileOrderByInput = {
    path?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPassionOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    description?: SortOrder
    coinAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userGalleryId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    coinAmount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    description?: SortOrder
    coinAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userGalleryId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    description?: SortOrder
    coinAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userGalleryId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    coinAmount?: SortOrder
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

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type PassionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PassionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PassionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PhotoGalleryListRelationFilter = {
    every?: PhotoGalleryWhereInput
    some?: PhotoGalleryWhereInput
    none?: PhotoGalleryWhereInput
  }

  export type PhotoGalleryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserGalleryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGalleryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type UserGalleryRelationFilter = {
    is?: UserGalleryWhereInput
    isNot?: UserGalleryWhereInput
  }

  export type PhotoGalleryCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    userGalleryId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PhotoGalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    userGalleryId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PhotoGalleryMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    userGalleryId?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NotificationDataNullableCompositeFilter = {
    equals?: NotificationDataObjectEqualityInput | null
    is?: NotificationDataWhereInput | null
    isNot?: NotificationDataWhereInput | null
    isSet?: boolean
  }

  export type NotificationDataObjectEqualityInput = {
    userId: string
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NotificationDataOrderByInput = {
    userId?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    readAt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    readAt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    readAt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type BlockedCountOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockedMaxOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockedMinOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type ConversationNullableRelationFilter = {
    is?: ConversationWhereInput | null
    isNot?: ConversationWhereInput | null
  }

  export type UserMatchCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    liked?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMatchMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    liked?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMatchMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    liked?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type UserMatchRelationFilter = {
    is?: UserMatchWhereInput
    isNot?: UserMatchWhereInput
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPhotoProfileCreateEnvelopeInput = {
    set?: UserPhotoProfileCreateInput
  }

  export type UserPhotoProfileCreateInput = {
    path: string
    updatedAt?: Date | string
  }

  export type UserPassionListCreateEnvelopeInput = {
    set?: UserPassionCreateInput | UserPassionCreateInput[]
  }

  export type UserPassionCreateInput = {
    name: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserGalleryCreateNestedOneWithoutUserInput = {
    create?: XOR<UserGalleryCreateWithoutUserInput, UserGalleryUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGalleryCreateOrConnectWithoutUserInput
    connect?: UserGalleryWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BlockedCreateNestedManyWithoutUserBlockerInput = {
    create?: XOR<BlockedCreateWithoutUserBlockerInput, BlockedUncheckedCreateWithoutUserBlockerInput> | BlockedCreateWithoutUserBlockerInput[] | BlockedUncheckedCreateWithoutUserBlockerInput[]
    connectOrCreate?: BlockedCreateOrConnectWithoutUserBlockerInput | BlockedCreateOrConnectWithoutUserBlockerInput[]
    createMany?: BlockedCreateManyUserBlockerInputEnvelope
    connect?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
  }

  export type BlockedCreateNestedManyWithoutUserBlokedInput = {
    create?: XOR<BlockedCreateWithoutUserBlokedInput, BlockedUncheckedCreateWithoutUserBlokedInput> | BlockedCreateWithoutUserBlokedInput[] | BlockedUncheckedCreateWithoutUserBlokedInput[]
    connectOrCreate?: BlockedCreateOrConnectWithoutUserBlokedInput | BlockedCreateOrConnectWithoutUserBlokedInput[]
    createMany?: BlockedCreateManyUserBlokedInputEnvelope
    connect?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
  }

  export type UserMatchCreateNestedManyWithoutSenderInput = {
    create?: XOR<UserMatchCreateWithoutSenderInput, UserMatchUncheckedCreateWithoutSenderInput> | UserMatchCreateWithoutSenderInput[] | UserMatchUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: UserMatchCreateOrConnectWithoutSenderInput | UserMatchCreateOrConnectWithoutSenderInput[]
    createMany?: UserMatchCreateManySenderInputEnvelope
    connect?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
  }

  export type UserMatchCreateNestedManyWithoutReceiverInput = {
    create?: XOR<UserMatchCreateWithoutReceiverInput, UserMatchUncheckedCreateWithoutReceiverInput> | UserMatchCreateWithoutReceiverInput[] | UserMatchUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: UserMatchCreateOrConnectWithoutReceiverInput | UserMatchCreateOrConnectWithoutReceiverInput[]
    createMany?: UserMatchCreateManyReceiverInputEnvelope
    connect?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BlockedUncheckedCreateNestedManyWithoutUserBlockerInput = {
    create?: XOR<BlockedCreateWithoutUserBlockerInput, BlockedUncheckedCreateWithoutUserBlockerInput> | BlockedCreateWithoutUserBlockerInput[] | BlockedUncheckedCreateWithoutUserBlockerInput[]
    connectOrCreate?: BlockedCreateOrConnectWithoutUserBlockerInput | BlockedCreateOrConnectWithoutUserBlockerInput[]
    createMany?: BlockedCreateManyUserBlockerInputEnvelope
    connect?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
  }

  export type BlockedUncheckedCreateNestedManyWithoutUserBlokedInput = {
    create?: XOR<BlockedCreateWithoutUserBlokedInput, BlockedUncheckedCreateWithoutUserBlokedInput> | BlockedCreateWithoutUserBlokedInput[] | BlockedUncheckedCreateWithoutUserBlokedInput[]
    connectOrCreate?: BlockedCreateOrConnectWithoutUserBlokedInput | BlockedCreateOrConnectWithoutUserBlokedInput[]
    createMany?: BlockedCreateManyUserBlokedInputEnvelope
    connect?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
  }

  export type UserMatchUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<UserMatchCreateWithoutSenderInput, UserMatchUncheckedCreateWithoutSenderInput> | UserMatchCreateWithoutSenderInput[] | UserMatchUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: UserMatchCreateOrConnectWithoutSenderInput | UserMatchCreateOrConnectWithoutSenderInput[]
    createMany?: UserMatchCreateManySenderInputEnvelope
    connect?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
  }

  export type UserMatchUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<UserMatchCreateWithoutReceiverInput, UserMatchUncheckedCreateWithoutReceiverInput> | UserMatchCreateWithoutReceiverInput[] | UserMatchUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: UserMatchCreateOrConnectWithoutReceiverInput | UserMatchCreateOrConnectWithoutReceiverInput[]
    createMany?: UserMatchCreateManyReceiverInputEnvelope
    connect?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserPhotoProfileUpdateEnvelopeInput = {
    set?: UserPhotoProfileCreateInput
    update?: UserPhotoProfileUpdateInput
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserPassionListUpdateEnvelopeInput = {
    set?: UserPassionCreateInput | UserPassionCreateInput[]
    push?: UserPassionCreateInput | UserPassionCreateInput[]
    updateMany?: UserPassionUpdateManyInput
    deleteMany?: UserPassionDeleteManyInput
  }

  export type UserGalleryUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserGalleryCreateWithoutUserInput, UserGalleryUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGalleryCreateOrConnectWithoutUserInput
    upsert?: UserGalleryUpsertWithoutUserInput
    disconnect?: boolean
    delete?: UserGalleryWhereInput | boolean
    connect?: UserGalleryWhereUniqueInput
    update?: XOR<XOR<UserGalleryUpdateToOneWithWhereWithoutUserInput, UserGalleryUpdateWithoutUserInput>, UserGalleryUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BlockedUpdateManyWithoutUserBlockerNestedInput = {
    create?: XOR<BlockedCreateWithoutUserBlockerInput, BlockedUncheckedCreateWithoutUserBlockerInput> | BlockedCreateWithoutUserBlockerInput[] | BlockedUncheckedCreateWithoutUserBlockerInput[]
    connectOrCreate?: BlockedCreateOrConnectWithoutUserBlockerInput | BlockedCreateOrConnectWithoutUserBlockerInput[]
    upsert?: BlockedUpsertWithWhereUniqueWithoutUserBlockerInput | BlockedUpsertWithWhereUniqueWithoutUserBlockerInput[]
    createMany?: BlockedCreateManyUserBlockerInputEnvelope
    set?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    disconnect?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    delete?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    connect?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    update?: BlockedUpdateWithWhereUniqueWithoutUserBlockerInput | BlockedUpdateWithWhereUniqueWithoutUserBlockerInput[]
    updateMany?: BlockedUpdateManyWithWhereWithoutUserBlockerInput | BlockedUpdateManyWithWhereWithoutUserBlockerInput[]
    deleteMany?: BlockedScalarWhereInput | BlockedScalarWhereInput[]
  }

  export type BlockedUpdateManyWithoutUserBlokedNestedInput = {
    create?: XOR<BlockedCreateWithoutUserBlokedInput, BlockedUncheckedCreateWithoutUserBlokedInput> | BlockedCreateWithoutUserBlokedInput[] | BlockedUncheckedCreateWithoutUserBlokedInput[]
    connectOrCreate?: BlockedCreateOrConnectWithoutUserBlokedInput | BlockedCreateOrConnectWithoutUserBlokedInput[]
    upsert?: BlockedUpsertWithWhereUniqueWithoutUserBlokedInput | BlockedUpsertWithWhereUniqueWithoutUserBlokedInput[]
    createMany?: BlockedCreateManyUserBlokedInputEnvelope
    set?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    disconnect?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    delete?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    connect?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    update?: BlockedUpdateWithWhereUniqueWithoutUserBlokedInput | BlockedUpdateWithWhereUniqueWithoutUserBlokedInput[]
    updateMany?: BlockedUpdateManyWithWhereWithoutUserBlokedInput | BlockedUpdateManyWithWhereWithoutUserBlokedInput[]
    deleteMany?: BlockedScalarWhereInput | BlockedScalarWhereInput[]
  }

  export type UserMatchUpdateManyWithoutSenderNestedInput = {
    create?: XOR<UserMatchCreateWithoutSenderInput, UserMatchUncheckedCreateWithoutSenderInput> | UserMatchCreateWithoutSenderInput[] | UserMatchUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: UserMatchCreateOrConnectWithoutSenderInput | UserMatchCreateOrConnectWithoutSenderInput[]
    upsert?: UserMatchUpsertWithWhereUniqueWithoutSenderInput | UserMatchUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: UserMatchCreateManySenderInputEnvelope
    set?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    disconnect?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    delete?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    connect?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    update?: UserMatchUpdateWithWhereUniqueWithoutSenderInput | UserMatchUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: UserMatchUpdateManyWithWhereWithoutSenderInput | UserMatchUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: UserMatchScalarWhereInput | UserMatchScalarWhereInput[]
  }

  export type UserMatchUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<UserMatchCreateWithoutReceiverInput, UserMatchUncheckedCreateWithoutReceiverInput> | UserMatchCreateWithoutReceiverInput[] | UserMatchUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: UserMatchCreateOrConnectWithoutReceiverInput | UserMatchCreateOrConnectWithoutReceiverInput[]
    upsert?: UserMatchUpsertWithWhereUniqueWithoutReceiverInput | UserMatchUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: UserMatchCreateManyReceiverInputEnvelope
    set?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    disconnect?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    delete?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    connect?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    update?: UserMatchUpdateWithWhereUniqueWithoutReceiverInput | UserMatchUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: UserMatchUpdateManyWithWhereWithoutReceiverInput | UserMatchUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: UserMatchScalarWhereInput | UserMatchScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BlockedUncheckedUpdateManyWithoutUserBlockerNestedInput = {
    create?: XOR<BlockedCreateWithoutUserBlockerInput, BlockedUncheckedCreateWithoutUserBlockerInput> | BlockedCreateWithoutUserBlockerInput[] | BlockedUncheckedCreateWithoutUserBlockerInput[]
    connectOrCreate?: BlockedCreateOrConnectWithoutUserBlockerInput | BlockedCreateOrConnectWithoutUserBlockerInput[]
    upsert?: BlockedUpsertWithWhereUniqueWithoutUserBlockerInput | BlockedUpsertWithWhereUniqueWithoutUserBlockerInput[]
    createMany?: BlockedCreateManyUserBlockerInputEnvelope
    set?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    disconnect?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    delete?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    connect?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    update?: BlockedUpdateWithWhereUniqueWithoutUserBlockerInput | BlockedUpdateWithWhereUniqueWithoutUserBlockerInput[]
    updateMany?: BlockedUpdateManyWithWhereWithoutUserBlockerInput | BlockedUpdateManyWithWhereWithoutUserBlockerInput[]
    deleteMany?: BlockedScalarWhereInput | BlockedScalarWhereInput[]
  }

  export type BlockedUncheckedUpdateManyWithoutUserBlokedNestedInput = {
    create?: XOR<BlockedCreateWithoutUserBlokedInput, BlockedUncheckedCreateWithoutUserBlokedInput> | BlockedCreateWithoutUserBlokedInput[] | BlockedUncheckedCreateWithoutUserBlokedInput[]
    connectOrCreate?: BlockedCreateOrConnectWithoutUserBlokedInput | BlockedCreateOrConnectWithoutUserBlokedInput[]
    upsert?: BlockedUpsertWithWhereUniqueWithoutUserBlokedInput | BlockedUpsertWithWhereUniqueWithoutUserBlokedInput[]
    createMany?: BlockedCreateManyUserBlokedInputEnvelope
    set?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    disconnect?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    delete?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    connect?: BlockedWhereUniqueInput | BlockedWhereUniqueInput[]
    update?: BlockedUpdateWithWhereUniqueWithoutUserBlokedInput | BlockedUpdateWithWhereUniqueWithoutUserBlokedInput[]
    updateMany?: BlockedUpdateManyWithWhereWithoutUserBlokedInput | BlockedUpdateManyWithWhereWithoutUserBlokedInput[]
    deleteMany?: BlockedScalarWhereInput | BlockedScalarWhereInput[]
  }

  export type UserMatchUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<UserMatchCreateWithoutSenderInput, UserMatchUncheckedCreateWithoutSenderInput> | UserMatchCreateWithoutSenderInput[] | UserMatchUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: UserMatchCreateOrConnectWithoutSenderInput | UserMatchCreateOrConnectWithoutSenderInput[]
    upsert?: UserMatchUpsertWithWhereUniqueWithoutSenderInput | UserMatchUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: UserMatchCreateManySenderInputEnvelope
    set?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    disconnect?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    delete?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    connect?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    update?: UserMatchUpdateWithWhereUniqueWithoutSenderInput | UserMatchUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: UserMatchUpdateManyWithWhereWithoutSenderInput | UserMatchUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: UserMatchScalarWhereInput | UserMatchScalarWhereInput[]
  }

  export type UserMatchUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<UserMatchCreateWithoutReceiverInput, UserMatchUncheckedCreateWithoutReceiverInput> | UserMatchCreateWithoutReceiverInput[] | UserMatchUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: UserMatchCreateOrConnectWithoutReceiverInput | UserMatchCreateOrConnectWithoutReceiverInput[]
    upsert?: UserMatchUpsertWithWhereUniqueWithoutReceiverInput | UserMatchUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: UserMatchCreateManyReceiverInputEnvelope
    set?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    disconnect?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    delete?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    connect?: UserMatchWhereUniqueInput | UserMatchWhereUniqueInput[]
    update?: UserMatchUpdateWithWhereUniqueWithoutReceiverInput | UserMatchUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: UserMatchUpdateManyWithWhereWithoutReceiverInput | UserMatchUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: UserMatchScalarWhereInput | UserMatchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserGalleryInput = {
    create?: XOR<UserCreateWithoutUserGalleryInput, UserUncheckedCreateWithoutUserGalleryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGalleryInput
    connect?: UserWhereUniqueInput
  }

  export type PhotoGalleryCreateNestedManyWithoutUserGalleryInput = {
    create?: XOR<PhotoGalleryCreateWithoutUserGalleryInput, PhotoGalleryUncheckedCreateWithoutUserGalleryInput> | PhotoGalleryCreateWithoutUserGalleryInput[] | PhotoGalleryUncheckedCreateWithoutUserGalleryInput[]
    connectOrCreate?: PhotoGalleryCreateOrConnectWithoutUserGalleryInput | PhotoGalleryCreateOrConnectWithoutUserGalleryInput[]
    createMany?: PhotoGalleryCreateManyUserGalleryInputEnvelope
    connect?: PhotoGalleryWhereUniqueInput | PhotoGalleryWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutUserGalleryInput = {
    create?: XOR<UserCreateWithoutUserGalleryInput, UserUncheckedCreateWithoutUserGalleryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGalleryInput
    connect?: UserWhereUniqueInput
  }

  export type PhotoGalleryUncheckedCreateNestedManyWithoutUserGalleryInput = {
    create?: XOR<PhotoGalleryCreateWithoutUserGalleryInput, PhotoGalleryUncheckedCreateWithoutUserGalleryInput> | PhotoGalleryCreateWithoutUserGalleryInput[] | PhotoGalleryUncheckedCreateWithoutUserGalleryInput[]
    connectOrCreate?: PhotoGalleryCreateOrConnectWithoutUserGalleryInput | PhotoGalleryCreateOrConnectWithoutUserGalleryInput[]
    createMany?: PhotoGalleryCreateManyUserGalleryInputEnvelope
    connect?: PhotoGalleryWhereUniqueInput | PhotoGalleryWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutUserGalleryNestedInput = {
    create?: XOR<UserCreateWithoutUserGalleryInput, UserUncheckedCreateWithoutUserGalleryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGalleryInput
    upsert?: UserUpsertWithoutUserGalleryInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserGalleryInput, UserUpdateWithoutUserGalleryInput>, UserUncheckedUpdateWithoutUserGalleryInput>
  }

  export type PhotoGalleryUpdateManyWithoutUserGalleryNestedInput = {
    create?: XOR<PhotoGalleryCreateWithoutUserGalleryInput, PhotoGalleryUncheckedCreateWithoutUserGalleryInput> | PhotoGalleryCreateWithoutUserGalleryInput[] | PhotoGalleryUncheckedCreateWithoutUserGalleryInput[]
    connectOrCreate?: PhotoGalleryCreateOrConnectWithoutUserGalleryInput | PhotoGalleryCreateOrConnectWithoutUserGalleryInput[]
    upsert?: PhotoGalleryUpsertWithWhereUniqueWithoutUserGalleryInput | PhotoGalleryUpsertWithWhereUniqueWithoutUserGalleryInput[]
    createMany?: PhotoGalleryCreateManyUserGalleryInputEnvelope
    set?: PhotoGalleryWhereUniqueInput | PhotoGalleryWhereUniqueInput[]
    disconnect?: PhotoGalleryWhereUniqueInput | PhotoGalleryWhereUniqueInput[]
    delete?: PhotoGalleryWhereUniqueInput | PhotoGalleryWhereUniqueInput[]
    connect?: PhotoGalleryWhereUniqueInput | PhotoGalleryWhereUniqueInput[]
    update?: PhotoGalleryUpdateWithWhereUniqueWithoutUserGalleryInput | PhotoGalleryUpdateWithWhereUniqueWithoutUserGalleryInput[]
    updateMany?: PhotoGalleryUpdateManyWithWhereWithoutUserGalleryInput | PhotoGalleryUpdateManyWithWhereWithoutUserGalleryInput[]
    deleteMany?: PhotoGalleryScalarWhereInput | PhotoGalleryScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutUserGalleryNestedInput = {
    create?: XOR<UserCreateWithoutUserGalleryInput, UserUncheckedCreateWithoutUserGalleryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGalleryInput
    upsert?: UserUpsertWithoutUserGalleryInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserGalleryInput, UserUpdateWithoutUserGalleryInput>, UserUncheckedUpdateWithoutUserGalleryInput>
  }

  export type PhotoGalleryUncheckedUpdateManyWithoutUserGalleryNestedInput = {
    create?: XOR<PhotoGalleryCreateWithoutUserGalleryInput, PhotoGalleryUncheckedCreateWithoutUserGalleryInput> | PhotoGalleryCreateWithoutUserGalleryInput[] | PhotoGalleryUncheckedCreateWithoutUserGalleryInput[]
    connectOrCreate?: PhotoGalleryCreateOrConnectWithoutUserGalleryInput | PhotoGalleryCreateOrConnectWithoutUserGalleryInput[]
    upsert?: PhotoGalleryUpsertWithWhereUniqueWithoutUserGalleryInput | PhotoGalleryUpsertWithWhereUniqueWithoutUserGalleryInput[]
    createMany?: PhotoGalleryCreateManyUserGalleryInputEnvelope
    set?: PhotoGalleryWhereUniqueInput | PhotoGalleryWhereUniqueInput[]
    disconnect?: PhotoGalleryWhereUniqueInput | PhotoGalleryWhereUniqueInput[]
    delete?: PhotoGalleryWhereUniqueInput | PhotoGalleryWhereUniqueInput[]
    connect?: PhotoGalleryWhereUniqueInput | PhotoGalleryWhereUniqueInput[]
    update?: PhotoGalleryUpdateWithWhereUniqueWithoutUserGalleryInput | PhotoGalleryUpdateWithWhereUniqueWithoutUserGalleryInput[]
    updateMany?: PhotoGalleryUpdateManyWithWhereWithoutUserGalleryInput | PhotoGalleryUpdateManyWithWhereWithoutUserGalleryInput[]
    deleteMany?: PhotoGalleryScalarWhereInput | PhotoGalleryScalarWhereInput[]
  }

  export type UserGalleryCreateNestedOneWithoutPhotoGalleryInput = {
    create?: XOR<UserGalleryCreateWithoutPhotoGalleryInput, UserGalleryUncheckedCreateWithoutPhotoGalleryInput>
    connectOrCreate?: UserGalleryCreateOrConnectWithoutPhotoGalleryInput
    connect?: UserGalleryWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type UserGalleryUpdateOneRequiredWithoutPhotoGalleryNestedInput = {
    create?: XOR<UserGalleryCreateWithoutPhotoGalleryInput, UserGalleryUncheckedCreateWithoutPhotoGalleryInput>
    connectOrCreate?: UserGalleryCreateOrConnectWithoutPhotoGalleryInput
    upsert?: UserGalleryUpsertWithoutPhotoGalleryInput
    connect?: UserGalleryWhereUniqueInput
    update?: XOR<XOR<UserGalleryUpdateToOneWithWhereWithoutPhotoGalleryInput, UserGalleryUpdateWithoutPhotoGalleryInput>, UserGalleryUncheckedUpdateWithoutPhotoGalleryInput>
  }

  export type NotificationDataNullableCreateEnvelopeInput = {
    set?: NotificationDataCreateInput | null
  }

  export type NotificationDataCreateInput = {
    userId: string
  }

  export type UserCreateNestedOneWithoutNotificationInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    connect?: UserWhereUniqueInput
  }

  export type NotificationDataNullableUpdateEnvelopeInput = {
    set?: NotificationDataCreateInput | null
    upsert?: NotificationDataUpsertInput
    unset?: boolean
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    upsert?: UserUpsertWithoutNotificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationInput, UserUpdateWithoutNotificationInput>, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserCreateNestedOneWithoutBlockingInput = {
    create?: XOR<UserCreateWithoutBlockingInput, UserUncheckedCreateWithoutBlockingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockingInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBlockedInput = {
    create?: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBlockingNestedInput = {
    create?: XOR<UserCreateWithoutBlockingInput, UserUncheckedCreateWithoutBlockingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockingInput
    upsert?: UserUpsertWithoutBlockingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockingInput, UserUpdateWithoutBlockingInput>, UserUncheckedUpdateWithoutBlockingInput>
  }

  export type UserUpdateOneRequiredWithoutBlockedNestedInput = {
    create?: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedInput
    upsert?: UserUpsertWithoutBlockedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockedInput, UserUpdateWithoutBlockedInput>, UserUncheckedUpdateWithoutBlockedInput>
  }

  export type UserCreateNestedOneWithoutSenderInput = {
    create?: XOR<UserCreateWithoutSenderInput, UserUncheckedCreateWithoutSenderInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceiverInput = {
    create?: XOR<UserCreateWithoutReceiverInput, UserUncheckedCreateWithoutReceiverInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverInput
    connect?: UserWhereUniqueInput
  }

  export type ConversationCreateNestedOneWithoutMatchInput = {
    create?: XOR<ConversationCreateWithoutMatchInput, ConversationUncheckedCreateWithoutMatchInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMatchInput
    connect?: ConversationWhereUniqueInput
  }

  export type ConversationUncheckedCreateNestedOneWithoutMatchInput = {
    create?: XOR<ConversationCreateWithoutMatchInput, ConversationUncheckedCreateWithoutMatchInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMatchInput
    connect?: ConversationWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus
  }

  export type UserUpdateOneRequiredWithoutSenderNestedInput = {
    create?: XOR<UserCreateWithoutSenderInput, UserUncheckedCreateWithoutSenderInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderInput
    upsert?: UserUpsertWithoutSenderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSenderInput, UserUpdateWithoutSenderInput>, UserUncheckedUpdateWithoutSenderInput>
  }

  export type UserUpdateOneRequiredWithoutReceiverNestedInput = {
    create?: XOR<UserCreateWithoutReceiverInput, UserUncheckedCreateWithoutReceiverInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverInput
    upsert?: UserUpsertWithoutReceiverInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceiverInput, UserUpdateWithoutReceiverInput>, UserUncheckedUpdateWithoutReceiverInput>
  }

  export type ConversationUpdateOneWithoutMatchNestedInput = {
    create?: XOR<ConversationCreateWithoutMatchInput, ConversationUncheckedCreateWithoutMatchInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMatchInput
    upsert?: ConversationUpsertWithoutMatchInput
    disconnect?: ConversationWhereInput | boolean
    delete?: ConversationWhereInput | boolean
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMatchInput, ConversationUpdateWithoutMatchInput>, ConversationUncheckedUpdateWithoutMatchInput>
  }

  export type ConversationUncheckedUpdateOneWithoutMatchNestedInput = {
    create?: XOR<ConversationCreateWithoutMatchInput, ConversationUncheckedCreateWithoutMatchInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMatchInput
    upsert?: ConversationUpsertWithoutMatchInput
    disconnect?: ConversationWhereInput | boolean
    delete?: ConversationWhereInput | boolean
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMatchInput, ConversationUpdateWithoutMatchInput>, ConversationUncheckedUpdateWithoutMatchInput>
  }

  export type UserMatchCreateNestedOneWithoutConversationInput = {
    create?: XOR<UserMatchCreateWithoutConversationInput, UserMatchUncheckedCreateWithoutConversationInput>
    connectOrCreate?: UserMatchCreateOrConnectWithoutConversationInput
    connect?: UserMatchWhereUniqueInput
  }

  export type UserMatchUpdateOneRequiredWithoutConversationNestedInput = {
    create?: XOR<UserMatchCreateWithoutConversationInput, UserMatchUncheckedCreateWithoutConversationInput>
    connectOrCreate?: UserMatchCreateOrConnectWithoutConversationInput
    upsert?: UserMatchUpsertWithoutConversationInput
    connect?: UserMatchWhereUniqueInput
    update?: XOR<XOR<UserMatchUpdateToOneWithWhereWithoutConversationInput, UserMatchUpdateWithoutConversationInput>, UserMatchUncheckedUpdateWithoutConversationInput>
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

  export type UserPhotoProfileWhereInput = {
    AND?: UserPhotoProfileWhereInput | UserPhotoProfileWhereInput[]
    OR?: UserPhotoProfileWhereInput[]
    NOT?: UserPhotoProfileWhereInput | UserPhotoProfileWhereInput[]
    path?: StringFilter<"UserPhotoProfile"> | string
    updatedAt?: DateTimeFilter<"UserPhotoProfile"> | Date | string
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type UserPassionWhereInput = {
    AND?: UserPassionWhereInput | UserPassionWhereInput[]
    OR?: UserPassionWhereInput[]
    NOT?: UserPassionWhereInput | UserPassionWhereInput[]
    name?: StringFilter<"UserPassion"> | string
    createdAt?: DateTimeFilter<"UserPassion"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserPassion"> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NotificationDataWhereInput = {
    AND?: NotificationDataWhereInput | NotificationDataWhereInput[]
    OR?: NotificationDataWhereInput[]
    NOT?: NotificationDataWhereInput | NotificationDataWhereInput[]
    userId?: StringFilter<"NotificationData"> | string
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type UserGalleryCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PhotoGallery?: PhotoGalleryCreateNestedManyWithoutUserGalleryInput
  }

  export type UserGalleryUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PhotoGallery?: PhotoGalleryUncheckedCreateNestedManyWithoutUserGalleryInput
  }

  export type UserGalleryCreateOrConnectWithoutUserInput = {
    where: UserGalleryWhereUniqueInput
    create: XOR<UserGalleryCreateWithoutUserInput, UserGalleryUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    body: string
    data?: XOR<NotificationDataNullableCreateEnvelopeInput, NotificationDataCreateInput> | null
    readAt?: Date | string | null
    type: $Enums.NotificationType
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    body: string
    data?: XOR<NotificationDataNullableCreateEnvelopeInput, NotificationDataCreateInput> | null
    readAt?: Date | string | null
    type: $Enums.NotificationType
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type BlockedCreateWithoutUserBlockerInput = {
    id?: string
    createdAt?: Date | string
    userBloked: UserCreateNestedOneWithoutBlockedInput
  }

  export type BlockedUncheckedCreateWithoutUserBlockerInput = {
    id?: string
    blockedId: string
    createdAt?: Date | string
  }

  export type BlockedCreateOrConnectWithoutUserBlockerInput = {
    where: BlockedWhereUniqueInput
    create: XOR<BlockedCreateWithoutUserBlockerInput, BlockedUncheckedCreateWithoutUserBlockerInput>
  }

  export type BlockedCreateManyUserBlockerInputEnvelope = {
    data: BlockedCreateManyUserBlockerInput | BlockedCreateManyUserBlockerInput[]
  }

  export type BlockedCreateWithoutUserBlokedInput = {
    id?: string
    createdAt?: Date | string
    userBlocker: UserCreateNestedOneWithoutBlockingInput
  }

  export type BlockedUncheckedCreateWithoutUserBlokedInput = {
    id?: string
    blockerId: string
    createdAt?: Date | string
  }

  export type BlockedCreateOrConnectWithoutUserBlokedInput = {
    where: BlockedWhereUniqueInput
    create: XOR<BlockedCreateWithoutUserBlokedInput, BlockedUncheckedCreateWithoutUserBlokedInput>
  }

  export type BlockedCreateManyUserBlokedInputEnvelope = {
    data: BlockedCreateManyUserBlokedInput | BlockedCreateManyUserBlokedInput[]
  }

  export type UserMatchCreateWithoutSenderInput = {
    id?: string
    liked: boolean
    status: $Enums.MatchStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceiverInput
    conversation?: ConversationCreateNestedOneWithoutMatchInput
  }

  export type UserMatchUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId: string
    liked: boolean
    status: $Enums.MatchStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    conversation?: ConversationUncheckedCreateNestedOneWithoutMatchInput
  }

  export type UserMatchCreateOrConnectWithoutSenderInput = {
    where: UserMatchWhereUniqueInput
    create: XOR<UserMatchCreateWithoutSenderInput, UserMatchUncheckedCreateWithoutSenderInput>
  }

  export type UserMatchCreateManySenderInputEnvelope = {
    data: UserMatchCreateManySenderInput | UserMatchCreateManySenderInput[]
  }

  export type UserMatchCreateWithoutReceiverInput = {
    id?: string
    liked: boolean
    status: $Enums.MatchStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSenderInput
    conversation?: ConversationCreateNestedOneWithoutMatchInput
  }

  export type UserMatchUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    liked: boolean
    status: $Enums.MatchStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    conversation?: ConversationUncheckedCreateNestedOneWithoutMatchInput
  }

  export type UserMatchCreateOrConnectWithoutReceiverInput = {
    where: UserMatchWhereUniqueInput
    create: XOR<UserMatchCreateWithoutReceiverInput, UserMatchUncheckedCreateWithoutReceiverInput>
  }

  export type UserMatchCreateManyReceiverInputEnvelope = {
    data: UserMatchCreateManyReceiverInput | UserMatchCreateManyReceiverInput[]
  }

  export type UserPhotoProfileUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPassionUpdateManyInput = {
    where: UserPassionWhereInput
    data: UserPassionUpdateInput
  }

  export type UserPassionDeleteManyInput = {
    where: UserPassionWhereInput
  }

  export type UserGalleryUpsertWithoutUserInput = {
    update: XOR<UserGalleryUpdateWithoutUserInput, UserGalleryUncheckedUpdateWithoutUserInput>
    create: XOR<UserGalleryCreateWithoutUserInput, UserGalleryUncheckedCreateWithoutUserInput>
    where?: UserGalleryWhereInput
  }

  export type UserGalleryUpdateToOneWithWhereWithoutUserInput = {
    where?: UserGalleryWhereInput
    data: XOR<UserGalleryUpdateWithoutUserInput, UserGalleryUncheckedUpdateWithoutUserInput>
  }

  export type UserGalleryUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PhotoGallery?: PhotoGalleryUpdateManyWithoutUserGalleryNestedInput
  }

  export type UserGalleryUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PhotoGallery?: PhotoGalleryUncheckedUpdateManyWithoutUserGalleryNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type BlockedUpsertWithWhereUniqueWithoutUserBlockerInput = {
    where: BlockedWhereUniqueInput
    update: XOR<BlockedUpdateWithoutUserBlockerInput, BlockedUncheckedUpdateWithoutUserBlockerInput>
    create: XOR<BlockedCreateWithoutUserBlockerInput, BlockedUncheckedCreateWithoutUserBlockerInput>
  }

  export type BlockedUpdateWithWhereUniqueWithoutUserBlockerInput = {
    where: BlockedWhereUniqueInput
    data: XOR<BlockedUpdateWithoutUserBlockerInput, BlockedUncheckedUpdateWithoutUserBlockerInput>
  }

  export type BlockedUpdateManyWithWhereWithoutUserBlockerInput = {
    where: BlockedScalarWhereInput
    data: XOR<BlockedUpdateManyMutationInput, BlockedUncheckedUpdateManyWithoutUserBlockerInput>
  }

  export type BlockedScalarWhereInput = {
    AND?: BlockedScalarWhereInput | BlockedScalarWhereInput[]
    OR?: BlockedScalarWhereInput[]
    NOT?: BlockedScalarWhereInput | BlockedScalarWhereInput[]
    id?: StringFilter<"Blocked"> | string
    blockerId?: StringFilter<"Blocked"> | string
    blockedId?: StringFilter<"Blocked"> | string
    createdAt?: DateTimeFilter<"Blocked"> | Date | string
  }

  export type BlockedUpsertWithWhereUniqueWithoutUserBlokedInput = {
    where: BlockedWhereUniqueInput
    update: XOR<BlockedUpdateWithoutUserBlokedInput, BlockedUncheckedUpdateWithoutUserBlokedInput>
    create: XOR<BlockedCreateWithoutUserBlokedInput, BlockedUncheckedCreateWithoutUserBlokedInput>
  }

  export type BlockedUpdateWithWhereUniqueWithoutUserBlokedInput = {
    where: BlockedWhereUniqueInput
    data: XOR<BlockedUpdateWithoutUserBlokedInput, BlockedUncheckedUpdateWithoutUserBlokedInput>
  }

  export type BlockedUpdateManyWithWhereWithoutUserBlokedInput = {
    where: BlockedScalarWhereInput
    data: XOR<BlockedUpdateManyMutationInput, BlockedUncheckedUpdateManyWithoutUserBlokedInput>
  }

  export type UserMatchUpsertWithWhereUniqueWithoutSenderInput = {
    where: UserMatchWhereUniqueInput
    update: XOR<UserMatchUpdateWithoutSenderInput, UserMatchUncheckedUpdateWithoutSenderInput>
    create: XOR<UserMatchCreateWithoutSenderInput, UserMatchUncheckedCreateWithoutSenderInput>
  }

  export type UserMatchUpdateWithWhereUniqueWithoutSenderInput = {
    where: UserMatchWhereUniqueInput
    data: XOR<UserMatchUpdateWithoutSenderInput, UserMatchUncheckedUpdateWithoutSenderInput>
  }

  export type UserMatchUpdateManyWithWhereWithoutSenderInput = {
    where: UserMatchScalarWhereInput
    data: XOR<UserMatchUpdateManyMutationInput, UserMatchUncheckedUpdateManyWithoutSenderInput>
  }

  export type UserMatchScalarWhereInput = {
    AND?: UserMatchScalarWhereInput | UserMatchScalarWhereInput[]
    OR?: UserMatchScalarWhereInput[]
    NOT?: UserMatchScalarWhereInput | UserMatchScalarWhereInput[]
    id?: StringFilter<"UserMatch"> | string
    senderId?: StringFilter<"UserMatch"> | string
    receiverId?: StringFilter<"UserMatch"> | string
    liked?: BoolFilter<"UserMatch"> | boolean
    status?: EnumMatchStatusFilter<"UserMatch"> | $Enums.MatchStatus
    updatedAt?: DateTimeFilter<"UserMatch"> | Date | string
    createdAt?: DateTimeFilter<"UserMatch"> | Date | string
  }

  export type UserMatchUpsertWithWhereUniqueWithoutReceiverInput = {
    where: UserMatchWhereUniqueInput
    update: XOR<UserMatchUpdateWithoutReceiverInput, UserMatchUncheckedUpdateWithoutReceiverInput>
    create: XOR<UserMatchCreateWithoutReceiverInput, UserMatchUncheckedCreateWithoutReceiverInput>
  }

  export type UserMatchUpdateWithWhereUniqueWithoutReceiverInput = {
    where: UserMatchWhereUniqueInput
    data: XOR<UserMatchUpdateWithoutReceiverInput, UserMatchUncheckedUpdateWithoutReceiverInput>
  }

  export type UserMatchUpdateManyWithWhereWithoutReceiverInput = {
    where: UserMatchScalarWhereInput
    data: XOR<UserMatchUpdateManyMutationInput, UserMatchUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutUserGalleryInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Blocking?: BlockedCreateNestedManyWithoutUserBlockerInput
    Blocked?: BlockedCreateNestedManyWithoutUserBlokedInput
    sender?: UserMatchCreateNestedManyWithoutSenderInput
    receiver?: UserMatchCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutUserGalleryInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Blocking?: BlockedUncheckedCreateNestedManyWithoutUserBlockerInput
    Blocked?: BlockedUncheckedCreateNestedManyWithoutUserBlokedInput
    sender?: UserMatchUncheckedCreateNestedManyWithoutSenderInput
    receiver?: UserMatchUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutUserGalleryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserGalleryInput, UserUncheckedCreateWithoutUserGalleryInput>
  }

  export type PhotoGalleryCreateWithoutUserGalleryInput = {
    id?: string
    path: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PhotoGalleryUncheckedCreateWithoutUserGalleryInput = {
    id?: string
    path: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PhotoGalleryCreateOrConnectWithoutUserGalleryInput = {
    where: PhotoGalleryWhereUniqueInput
    create: XOR<PhotoGalleryCreateWithoutUserGalleryInput, PhotoGalleryUncheckedCreateWithoutUserGalleryInput>
  }

  export type PhotoGalleryCreateManyUserGalleryInputEnvelope = {
    data: PhotoGalleryCreateManyUserGalleryInput | PhotoGalleryCreateManyUserGalleryInput[]
  }

  export type UserUpsertWithoutUserGalleryInput = {
    update: XOR<UserUpdateWithoutUserGalleryInput, UserUncheckedUpdateWithoutUserGalleryInput>
    create: XOR<UserCreateWithoutUserGalleryInput, UserUncheckedCreateWithoutUserGalleryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserGalleryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserGalleryInput, UserUncheckedUpdateWithoutUserGalleryInput>
  }

  export type UserUpdateWithoutUserGalleryInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Blocking?: BlockedUpdateManyWithoutUserBlockerNestedInput
    Blocked?: BlockedUpdateManyWithoutUserBlokedNestedInput
    sender?: UserMatchUpdateManyWithoutSenderNestedInput
    receiver?: UserMatchUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutUserGalleryInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Blocking?: BlockedUncheckedUpdateManyWithoutUserBlockerNestedInput
    Blocked?: BlockedUncheckedUpdateManyWithoutUserBlokedNestedInput
    sender?: UserMatchUncheckedUpdateManyWithoutSenderNestedInput
    receiver?: UserMatchUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type PhotoGalleryUpsertWithWhereUniqueWithoutUserGalleryInput = {
    where: PhotoGalleryWhereUniqueInput
    update: XOR<PhotoGalleryUpdateWithoutUserGalleryInput, PhotoGalleryUncheckedUpdateWithoutUserGalleryInput>
    create: XOR<PhotoGalleryCreateWithoutUserGalleryInput, PhotoGalleryUncheckedCreateWithoutUserGalleryInput>
  }

  export type PhotoGalleryUpdateWithWhereUniqueWithoutUserGalleryInput = {
    where: PhotoGalleryWhereUniqueInput
    data: XOR<PhotoGalleryUpdateWithoutUserGalleryInput, PhotoGalleryUncheckedUpdateWithoutUserGalleryInput>
  }

  export type PhotoGalleryUpdateManyWithWhereWithoutUserGalleryInput = {
    where: PhotoGalleryScalarWhereInput
    data: XOR<PhotoGalleryUpdateManyMutationInput, PhotoGalleryUncheckedUpdateManyWithoutUserGalleryInput>
  }

  export type PhotoGalleryScalarWhereInput = {
    AND?: PhotoGalleryScalarWhereInput | PhotoGalleryScalarWhereInput[]
    OR?: PhotoGalleryScalarWhereInput[]
    NOT?: PhotoGalleryScalarWhereInput | PhotoGalleryScalarWhereInput[]
    id?: StringFilter<"PhotoGallery"> | string
    path?: StringFilter<"PhotoGallery"> | string
    userGalleryId?: StringFilter<"PhotoGallery"> | string
    createdAt?: DateTimeFilter<"PhotoGallery"> | Date | string
    deletedAt?: DateTimeNullableFilter<"PhotoGallery"> | Date | string | null
  }

  export type UserGalleryCreateWithoutPhotoGalleryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutUserGalleryInput
  }

  export type UserGalleryUncheckedCreateWithoutPhotoGalleryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutUserGalleryInput
  }

  export type UserGalleryCreateOrConnectWithoutPhotoGalleryInput = {
    where: UserGalleryWhereUniqueInput
    create: XOR<UserGalleryCreateWithoutPhotoGalleryInput, UserGalleryUncheckedCreateWithoutPhotoGalleryInput>
  }

  export type UserGalleryUpsertWithoutPhotoGalleryInput = {
    update: XOR<UserGalleryUpdateWithoutPhotoGalleryInput, UserGalleryUncheckedUpdateWithoutPhotoGalleryInput>
    create: XOR<UserGalleryCreateWithoutPhotoGalleryInput, UserGalleryUncheckedCreateWithoutPhotoGalleryInput>
    where?: UserGalleryWhereInput
  }

  export type UserGalleryUpdateToOneWithWhereWithoutPhotoGalleryInput = {
    where?: UserGalleryWhereInput
    data: XOR<UserGalleryUpdateWithoutPhotoGalleryInput, UserGalleryUncheckedUpdateWithoutPhotoGalleryInput>
  }

  export type UserGalleryUpdateWithoutPhotoGalleryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutUserGalleryNestedInput
  }

  export type UserGalleryUncheckedUpdateWithoutPhotoGalleryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutUserGalleryNestedInput
  }

  export type UserCreateWithoutNotificationInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userGallery?: UserGalleryCreateNestedOneWithoutUserInput
    Blocking?: BlockedCreateNestedManyWithoutUserBlockerInput
    Blocked?: BlockedCreateNestedManyWithoutUserBlokedInput
    sender?: UserMatchCreateNestedManyWithoutSenderInput
    receiver?: UserMatchCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutNotificationInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userGalleryId?: string | null
    Blocking?: BlockedUncheckedCreateNestedManyWithoutUserBlockerInput
    Blocked?: BlockedUncheckedCreateNestedManyWithoutUserBlokedInput
    sender?: UserMatchUncheckedCreateNestedManyWithoutSenderInput
    receiver?: UserMatchUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutNotificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationDataUpsertInput = {
    set: NotificationDataCreateInput | null
    update: NotificationDataUpdateInput
  }

  export type UserUpsertWithoutNotificationInput = {
    update: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserUpdateWithoutNotificationInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGallery?: UserGalleryUpdateOneWithoutUserNestedInput
    Blocking?: BlockedUpdateManyWithoutUserBlockerNestedInput
    Blocked?: BlockedUpdateManyWithoutUserBlokedNestedInput
    sender?: UserMatchUpdateManyWithoutSenderNestedInput
    receiver?: UserMatchUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGalleryId?: NullableStringFieldUpdateOperationsInput | string | null
    Blocking?: BlockedUncheckedUpdateManyWithoutUserBlockerNestedInput
    Blocked?: BlockedUncheckedUpdateManyWithoutUserBlokedNestedInput
    sender?: UserMatchUncheckedUpdateManyWithoutSenderNestedInput
    receiver?: UserMatchUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutBlockingInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userGallery?: UserGalleryCreateNestedOneWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Blocked?: BlockedCreateNestedManyWithoutUserBlokedInput
    sender?: UserMatchCreateNestedManyWithoutSenderInput
    receiver?: UserMatchCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutBlockingInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userGalleryId?: string | null
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Blocked?: BlockedUncheckedCreateNestedManyWithoutUserBlokedInput
    sender?: UserMatchUncheckedCreateNestedManyWithoutSenderInput
    receiver?: UserMatchUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutBlockingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockingInput, UserUncheckedCreateWithoutBlockingInput>
  }

  export type UserCreateWithoutBlockedInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userGallery?: UserGalleryCreateNestedOneWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Blocking?: BlockedCreateNestedManyWithoutUserBlockerInput
    sender?: UserMatchCreateNestedManyWithoutSenderInput
    receiver?: UserMatchCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutBlockedInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userGalleryId?: string | null
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Blocking?: BlockedUncheckedCreateNestedManyWithoutUserBlockerInput
    sender?: UserMatchUncheckedCreateNestedManyWithoutSenderInput
    receiver?: UserMatchUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutBlockedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput>
  }

  export type UserUpsertWithoutBlockingInput = {
    update: XOR<UserUpdateWithoutBlockingInput, UserUncheckedUpdateWithoutBlockingInput>
    create: XOR<UserCreateWithoutBlockingInput, UserUncheckedCreateWithoutBlockingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockingInput, UserUncheckedUpdateWithoutBlockingInput>
  }

  export type UserUpdateWithoutBlockingInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGallery?: UserGalleryUpdateOneWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Blocked?: BlockedUpdateManyWithoutUserBlokedNestedInput
    sender?: UserMatchUpdateManyWithoutSenderNestedInput
    receiver?: UserMatchUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockingInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGalleryId?: NullableStringFieldUpdateOperationsInput | string | null
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Blocked?: BlockedUncheckedUpdateManyWithoutUserBlokedNestedInput
    sender?: UserMatchUncheckedUpdateManyWithoutSenderNestedInput
    receiver?: UserMatchUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutBlockedInput = {
    update: XOR<UserUpdateWithoutBlockedInput, UserUncheckedUpdateWithoutBlockedInput>
    create: XOR<UserCreateWithoutBlockedInput, UserUncheckedCreateWithoutBlockedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockedInput, UserUncheckedUpdateWithoutBlockedInput>
  }

  export type UserUpdateWithoutBlockedInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGallery?: UserGalleryUpdateOneWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Blocking?: BlockedUpdateManyWithoutUserBlockerNestedInput
    sender?: UserMatchUpdateManyWithoutSenderNestedInput
    receiver?: UserMatchUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockedInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGalleryId?: NullableStringFieldUpdateOperationsInput | string | null
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Blocking?: BlockedUncheckedUpdateManyWithoutUserBlockerNestedInput
    sender?: UserMatchUncheckedUpdateManyWithoutSenderNestedInput
    receiver?: UserMatchUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutSenderInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userGallery?: UserGalleryCreateNestedOneWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Blocking?: BlockedCreateNestedManyWithoutUserBlockerInput
    Blocked?: BlockedCreateNestedManyWithoutUserBlokedInput
    receiver?: UserMatchCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSenderInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userGalleryId?: string | null
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Blocking?: BlockedUncheckedCreateNestedManyWithoutUserBlockerInput
    Blocked?: BlockedUncheckedCreateNestedManyWithoutUserBlokedInput
    receiver?: UserMatchUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSenderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSenderInput, UserUncheckedCreateWithoutSenderInput>
  }

  export type UserCreateWithoutReceiverInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userGallery?: UserGalleryCreateNestedOneWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    Blocking?: BlockedCreateNestedManyWithoutUserBlockerInput
    Blocked?: BlockedCreateNestedManyWithoutUserBlokedInput
    sender?: UserMatchCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceiverInput = {
    id: string
    name: string
    photoProfile: XOR<UserPhotoProfileCreateEnvelopeInput, UserPhotoProfileCreateInput>
    gender: $Enums.Gender
    birth: Date | string
    description: string
    coinAmount?: number
    passions?: XOR<UserPassionListCreateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userGalleryId?: string | null
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Blocking?: BlockedUncheckedCreateNestedManyWithoutUserBlockerInput
    Blocked?: BlockedUncheckedCreateNestedManyWithoutUserBlokedInput
    sender?: UserMatchUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceiverInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceiverInput, UserUncheckedCreateWithoutReceiverInput>
  }

  export type ConversationCreateWithoutMatchInput = {
    id?: string
    createdAt?: Date | string
  }

  export type ConversationUncheckedCreateWithoutMatchInput = {
    id?: string
    createdAt?: Date | string
  }

  export type ConversationCreateOrConnectWithoutMatchInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMatchInput, ConversationUncheckedCreateWithoutMatchInput>
  }

  export type UserUpsertWithoutSenderInput = {
    update: XOR<UserUpdateWithoutSenderInput, UserUncheckedUpdateWithoutSenderInput>
    create: XOR<UserCreateWithoutSenderInput, UserUncheckedCreateWithoutSenderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSenderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSenderInput, UserUncheckedUpdateWithoutSenderInput>
  }

  export type UserUpdateWithoutSenderInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGallery?: UserGalleryUpdateOneWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Blocking?: BlockedUpdateManyWithoutUserBlockerNestedInput
    Blocked?: BlockedUpdateManyWithoutUserBlokedNestedInput
    receiver?: UserMatchUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSenderInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGalleryId?: NullableStringFieldUpdateOperationsInput | string | null
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Blocking?: BlockedUncheckedUpdateManyWithoutUserBlockerNestedInput
    Blocked?: BlockedUncheckedUpdateManyWithoutUserBlokedNestedInput
    receiver?: UserMatchUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceiverInput = {
    update: XOR<UserUpdateWithoutReceiverInput, UserUncheckedUpdateWithoutReceiverInput>
    create: XOR<UserCreateWithoutReceiverInput, UserUncheckedCreateWithoutReceiverInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceiverInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceiverInput, UserUncheckedUpdateWithoutReceiverInput>
  }

  export type UserUpdateWithoutReceiverInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGallery?: UserGalleryUpdateOneWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    Blocking?: BlockedUpdateManyWithoutUserBlockerNestedInput
    Blocked?: BlockedUpdateManyWithoutUserBlokedNestedInput
    sender?: UserMatchUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceiverInput = {
    name?: StringFieldUpdateOperationsInput | string
    photoProfile?: XOR<UserPhotoProfileUpdateEnvelopeInput, UserPhotoProfileCreateInput>
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    coinAmount?: IntFieldUpdateOperationsInput | number
    passions?: XOR<UserPassionListUpdateEnvelopeInput, UserPassionCreateInput> | UserPassionCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGalleryId?: NullableStringFieldUpdateOperationsInput | string | null
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Blocking?: BlockedUncheckedUpdateManyWithoutUserBlockerNestedInput
    Blocked?: BlockedUncheckedUpdateManyWithoutUserBlokedNestedInput
    sender?: UserMatchUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ConversationUpsertWithoutMatchInput = {
    update: XOR<ConversationUpdateWithoutMatchInput, ConversationUncheckedUpdateWithoutMatchInput>
    create: XOR<ConversationCreateWithoutMatchInput, ConversationUncheckedCreateWithoutMatchInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMatchInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMatchInput, ConversationUncheckedUpdateWithoutMatchInput>
  }

  export type ConversationUpdateWithoutMatchInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateWithoutMatchInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMatchCreateWithoutConversationInput = {
    id?: string
    liked: boolean
    status: $Enums.MatchStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSenderInput
    receiver: UserCreateNestedOneWithoutReceiverInput
  }

  export type UserMatchUncheckedCreateWithoutConversationInput = {
    id?: string
    senderId: string
    receiverId: string
    liked: boolean
    status: $Enums.MatchStatus
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserMatchCreateOrConnectWithoutConversationInput = {
    where: UserMatchWhereUniqueInput
    create: XOR<UserMatchCreateWithoutConversationInput, UserMatchUncheckedCreateWithoutConversationInput>
  }

  export type UserMatchUpsertWithoutConversationInput = {
    update: XOR<UserMatchUpdateWithoutConversationInput, UserMatchUncheckedUpdateWithoutConversationInput>
    create: XOR<UserMatchCreateWithoutConversationInput, UserMatchUncheckedCreateWithoutConversationInput>
    where?: UserMatchWhereInput
  }

  export type UserMatchUpdateToOneWithWhereWithoutConversationInput = {
    where?: UserMatchWhereInput
    data: XOR<UserMatchUpdateWithoutConversationInput, UserMatchUncheckedUpdateWithoutConversationInput>
  }

  export type UserMatchUpdateWithoutConversationInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSenderNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceiverNestedInput
  }

  export type UserMatchUncheckedUpdateWithoutConversationInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    liked?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    body: string
    data?: XOR<NotificationDataNullableCreateEnvelopeInput, NotificationDataCreateInput> | null
    readAt?: Date | string | null
    type: $Enums.NotificationType
    createdAt?: Date | string
  }

  export type BlockedCreateManyUserBlockerInput = {
    id?: string
    blockedId: string
    createdAt?: Date | string
  }

  export type BlockedCreateManyUserBlokedInput = {
    id?: string
    blockerId: string
    createdAt?: Date | string
  }

  export type UserMatchCreateManySenderInput = {
    id?: string
    receiverId: string
    liked: boolean
    status: $Enums.MatchStatus
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserMatchCreateManyReceiverInput = {
    id?: string
    senderId: string
    liked: boolean
    status: $Enums.MatchStatus
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserPassionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: XOR<NotificationDataNullableUpdateEnvelopeInput, NotificationDataCreateInput> | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: XOR<NotificationDataNullableUpdateEnvelopeInput, NotificationDataCreateInput> | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    data?: XOR<NotificationDataNullableUpdateEnvelopeInput, NotificationDataCreateInput> | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUpdateWithoutUserBlockerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBloked?: UserUpdateOneRequiredWithoutBlockedNestedInput
  }

  export type BlockedUncheckedUpdateWithoutUserBlockerInput = {
    blockedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUncheckedUpdateManyWithoutUserBlockerInput = {
    blockedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUpdateWithoutUserBlokedInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBlocker?: UserUpdateOneRequiredWithoutBlockingNestedInput
  }

  export type BlockedUncheckedUpdateWithoutUserBlokedInput = {
    blockerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUncheckedUpdateManyWithoutUserBlokedInput = {
    blockerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMatchUpdateWithoutSenderInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceiverNestedInput
    conversation?: ConversationUpdateOneWithoutMatchNestedInput
  }

  export type UserMatchUncheckedUpdateWithoutSenderInput = {
    receiverId?: StringFieldUpdateOperationsInput | string
    liked?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type UserMatchUncheckedUpdateManyWithoutSenderInput = {
    receiverId?: StringFieldUpdateOperationsInput | string
    liked?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMatchUpdateWithoutReceiverInput = {
    liked?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSenderNestedInput
    conversation?: ConversationUpdateOneWithoutMatchNestedInput
  }

  export type UserMatchUncheckedUpdateWithoutReceiverInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    liked?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type UserMatchUncheckedUpdateManyWithoutReceiverInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    liked?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoGalleryCreateManyUserGalleryInput = {
    id?: string
    path: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PhotoGalleryUpdateWithoutUserGalleryInput = {
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhotoGalleryUncheckedUpdateWithoutUserGalleryInput = {
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhotoGalleryUncheckedUpdateManyWithoutUserGalleryInput = {
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationDataUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserGalleryCountOutputTypeDefaultArgs instead
     */
    export type UserGalleryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserGalleryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPhotoProfileDefaultArgs instead
     */
    export type UserPhotoProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPhotoProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPassionDefaultArgs instead
     */
    export type UserPassionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPassionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDataDefaultArgs instead
     */
    export type NotificationDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PassionDefaultArgs instead
     */
    export type PassionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PassionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserGalleryDefaultArgs instead
     */
    export type UserGalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserGalleryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhotoGalleryDefaultArgs instead
     */
    export type PhotoGalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhotoGalleryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlockedDefaultArgs instead
     */
    export type BlockedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlockedDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserMatchDefaultArgs instead
     */
    export type UserMatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserMatchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationDefaultArgs instead
     */
    export type ConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversationDefaultArgs<ExtArgs>

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