
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
 * Model Tour
 * 
 */
export type Tour = $Result.DefaultSelection<Prisma.$TourPayload>
/**
 * Model PricingGroup
 * 
 */
export type PricingGroup = $Result.DefaultSelection<Prisma.$PricingGroupPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Destination
 * 
 */
export type Destination = $Result.DefaultSelection<Prisma.$DestinationPayload>
/**
 * Model TourToCategory
 * 
 */
export type TourToCategory = $Result.DefaultSelection<Prisma.$TourToCategoryPayload>
/**
 * Model TourToDestination
 * 
 */
export type TourToDestination = $Result.DefaultSelection<Prisma.$TourToDestinationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tours
 * const tours = await prisma.tour.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Tours
   * const tours = await prisma.tour.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tour`: Exposes CRUD operations for the **Tour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tours
    * const tours = await prisma.tour.findMany()
    * ```
    */
  get tour(): Prisma.TourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricingGroup`: Exposes CRUD operations for the **PricingGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingGroups
    * const pricingGroups = await prisma.pricingGroup.findMany()
    * ```
    */
  get pricingGroup(): Prisma.PricingGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destination`: Exposes CRUD operations for the **Destination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destination.findMany()
    * ```
    */
  get destination(): Prisma.DestinationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourToCategory`: Exposes CRUD operations for the **TourToCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourToCategories
    * const tourToCategories = await prisma.tourToCategory.findMany()
    * ```
    */
  get tourToCategory(): Prisma.TourToCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourToDestination`: Exposes CRUD operations for the **TourToDestination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourToDestinations
    * const tourToDestinations = await prisma.tourToDestination.findMany()
    * ```
    */
  get tourToDestination(): Prisma.TourToDestinationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Tour: 'Tour',
    PricingGroup: 'PricingGroup',
    Category: 'Category',
    Destination: 'Destination',
    TourToCategory: 'TourToCategory',
    TourToDestination: 'TourToDestination'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tour" | "pricingGroup" | "category" | "destination" | "tourToCategory" | "tourToDestination"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tour: {
        payload: Prisma.$TourPayload<ExtArgs>
        fields: Prisma.TourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findFirst: {
            args: Prisma.TourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findMany: {
            args: Prisma.TourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          create: {
            args: Prisma.TourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          createMany: {
            args: Prisma.TourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          delete: {
            args: Prisma.TourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          update: {
            args: Prisma.TourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          deleteMany: {
            args: Prisma.TourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          upsert: {
            args: Prisma.TourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          aggregate: {
            args: Prisma.TourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTour>
          }
          groupBy: {
            args: Prisma.TourGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourCountArgs<ExtArgs>
            result: $Utils.Optional<TourCountAggregateOutputType> | number
          }
        }
      }
      PricingGroup: {
        payload: Prisma.$PricingGroupPayload<ExtArgs>
        fields: Prisma.PricingGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingGroupPayload>
          }
          findFirst: {
            args: Prisma.PricingGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingGroupPayload>
          }
          findMany: {
            args: Prisma.PricingGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingGroupPayload>[]
          }
          create: {
            args: Prisma.PricingGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingGroupPayload>
          }
          createMany: {
            args: Prisma.PricingGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingGroupPayload>[]
          }
          delete: {
            args: Prisma.PricingGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingGroupPayload>
          }
          update: {
            args: Prisma.PricingGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingGroupPayload>
          }
          deleteMany: {
            args: Prisma.PricingGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PricingGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingGroupPayload>[]
          }
          upsert: {
            args: Prisma.PricingGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingGroupPayload>
          }
          aggregate: {
            args: Prisma.PricingGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingGroup>
          }
          groupBy: {
            args: Prisma.PricingGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingGroupCountArgs<ExtArgs>
            result: $Utils.Optional<PricingGroupCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Destination: {
        payload: Prisma.$DestinationPayload<ExtArgs>
        fields: Prisma.DestinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findFirst: {
            args: Prisma.DestinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findMany: {
            args: Prisma.DestinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          create: {
            args: Prisma.DestinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          createMany: {
            args: Prisma.DestinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          delete: {
            args: Prisma.DestinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          update: {
            args: Prisma.DestinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          deleteMany: {
            args: Prisma.DestinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          upsert: {
            args: Prisma.DestinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          aggregate: {
            args: Prisma.DestinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestination>
          }
          groupBy: {
            args: Prisma.DestinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationCountAggregateOutputType> | number
          }
        }
      }
      TourToCategory: {
        payload: Prisma.$TourToCategoryPayload<ExtArgs>
        fields: Prisma.TourToCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourToCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourToCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToCategoryPayload>
          }
          findFirst: {
            args: Prisma.TourToCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourToCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToCategoryPayload>
          }
          findMany: {
            args: Prisma.TourToCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToCategoryPayload>[]
          }
          create: {
            args: Prisma.TourToCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToCategoryPayload>
          }
          createMany: {
            args: Prisma.TourToCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourToCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToCategoryPayload>[]
          }
          delete: {
            args: Prisma.TourToCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToCategoryPayload>
          }
          update: {
            args: Prisma.TourToCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToCategoryPayload>
          }
          deleteMany: {
            args: Prisma.TourToCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourToCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourToCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToCategoryPayload>[]
          }
          upsert: {
            args: Prisma.TourToCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToCategoryPayload>
          }
          aggregate: {
            args: Prisma.TourToCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourToCategory>
          }
          groupBy: {
            args: Prisma.TourToCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourToCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourToCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<TourToCategoryCountAggregateOutputType> | number
          }
        }
      }
      TourToDestination: {
        payload: Prisma.$TourToDestinationPayload<ExtArgs>
        fields: Prisma.TourToDestinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourToDestinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToDestinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourToDestinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToDestinationPayload>
          }
          findFirst: {
            args: Prisma.TourToDestinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToDestinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourToDestinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToDestinationPayload>
          }
          findMany: {
            args: Prisma.TourToDestinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToDestinationPayload>[]
          }
          create: {
            args: Prisma.TourToDestinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToDestinationPayload>
          }
          createMany: {
            args: Prisma.TourToDestinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourToDestinationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToDestinationPayload>[]
          }
          delete: {
            args: Prisma.TourToDestinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToDestinationPayload>
          }
          update: {
            args: Prisma.TourToDestinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToDestinationPayload>
          }
          deleteMany: {
            args: Prisma.TourToDestinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourToDestinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourToDestinationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToDestinationPayload>[]
          }
          upsert: {
            args: Prisma.TourToDestinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourToDestinationPayload>
          }
          aggregate: {
            args: Prisma.TourToDestinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourToDestination>
          }
          groupBy: {
            args: Prisma.TourToDestinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourToDestinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourToDestinationCountArgs<ExtArgs>
            result: $Utils.Optional<TourToDestinationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tour?: TourOmit
    pricingGroup?: PricingGroupOmit
    category?: CategoryOmit
    destination?: DestinationOmit
    tourToCategory?: TourToCategoryOmit
    tourToDestination?: TourToDestinationOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type TourCountOutputType
   */

  export type TourCountOutputType = {
    pricing_groups: number
    categories: number
    destinations: number
  }

  export type TourCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricing_groups?: boolean | TourCountOutputTypeCountPricing_groupsArgs
    categories?: boolean | TourCountOutputTypeCountCategoriesArgs
    destinations?: boolean | TourCountOutputTypeCountDestinationsArgs
  }

  // Custom InputTypes
  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourCountOutputType
     */
    select?: TourCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountPricing_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingGroupWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourToCategoryWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountDestinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourToDestinationWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    tours: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | CategoryCountOutputTypeCountToursArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourToCategoryWhereInput
  }


  /**
   * Count Type DestinationCountOutputType
   */

  export type DestinationCountOutputType = {
    tours: number
  }

  export type DestinationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | DestinationCountOutputTypeCountToursArgs
  }

  // Custom InputTypes
  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCountOutputType
     */
    select?: DestinationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourToDestinationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tour
   */

  export type AggregateTour = {
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  export type TourAvgAggregateOutputType = {
    id: number | null
    reviews_number: number | null
    adult_price: number | null
    child_price: number | null
    infant_price: number | null
    duration_in_days: number | null
    offer: number | null
    start_from: number | null
    rate: number | null
  }

  export type TourSumAggregateOutputType = {
    id: number | null
    reviews_number: number | null
    adult_price: number | null
    child_price: number | null
    infant_price: number | null
    duration_in_days: number | null
    offer: number | null
    start_from: number | null
    rate: number | null
  }

  export type TourMinAggregateOutputType = {
    id: number | null
    slug: string | null
    reviews_number: number | null
    adult_price: number | null
    child_price: number | null
    infant_price: number | null
    enabled: boolean | null
    duration_in_days: number | null
    offer: number | null
    offer_end_date: Date | null
    start_from: number | null
    rate: number | null
    overview_text: string | null
    title: string | null
    duration: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    reviews_number: number | null
    adult_price: number | null
    child_price: number | null
    infant_price: number | null
    enabled: boolean | null
    duration_in_days: number | null
    offer: number | null
    offer_end_date: Date | null
    start_from: number | null
    rate: number | null
    overview_text: string | null
    title: string | null
    duration: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourCountAggregateOutputType = {
    id: number
    slug: number
    reviews_number: number
    adult_price: number
    child_price: number
    infant_price: number
    enabled: number
    gallery: number
    duration_in_days: number
    offer: number
    offer_end_date: number
    start_from: number
    rate: number
    overview_text: number
    title: number
    highlights: number
    excluded: number
    included: number
    duration: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TourAvgAggregateInputType = {
    id?: true
    reviews_number?: true
    adult_price?: true
    child_price?: true
    infant_price?: true
    duration_in_days?: true
    offer?: true
    start_from?: true
    rate?: true
  }

  export type TourSumAggregateInputType = {
    id?: true
    reviews_number?: true
    adult_price?: true
    child_price?: true
    infant_price?: true
    duration_in_days?: true
    offer?: true
    start_from?: true
    rate?: true
  }

  export type TourMinAggregateInputType = {
    id?: true
    slug?: true
    reviews_number?: true
    adult_price?: true
    child_price?: true
    infant_price?: true
    enabled?: true
    duration_in_days?: true
    offer?: true
    offer_end_date?: true
    start_from?: true
    rate?: true
    overview_text?: true
    title?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourMaxAggregateInputType = {
    id?: true
    slug?: true
    reviews_number?: true
    adult_price?: true
    child_price?: true
    infant_price?: true
    enabled?: true
    duration_in_days?: true
    offer?: true
    offer_end_date?: true
    start_from?: true
    rate?: true
    overview_text?: true
    title?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourCountAggregateInputType = {
    id?: true
    slug?: true
    reviews_number?: true
    adult_price?: true
    child_price?: true
    infant_price?: true
    enabled?: true
    gallery?: true
    duration_in_days?: true
    offer?: true
    offer_end_date?: true
    start_from?: true
    rate?: true
    overview_text?: true
    title?: true
    highlights?: true
    excluded?: true
    included?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tour to aggregate.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tours
    **/
    _count?: true | TourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourMaxAggregateInputType
  }

  export type GetTourAggregateType<T extends TourAggregateArgs> = {
        [P in keyof T & keyof AggregateTour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTour[P]>
      : GetScalarType<T[P], AggregateTour[P]>
  }




  export type TourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
    orderBy?: TourOrderByWithAggregationInput | TourOrderByWithAggregationInput[]
    by: TourScalarFieldEnum[] | TourScalarFieldEnum
    having?: TourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourCountAggregateInputType | true
    _avg?: TourAvgAggregateInputType
    _sum?: TourSumAggregateInputType
    _min?: TourMinAggregateInputType
    _max?: TourMaxAggregateInputType
  }

  export type TourGroupByOutputType = {
    id: number
    slug: string
    reviews_number: number
    adult_price: number
    child_price: number
    infant_price: number
    enabled: boolean
    gallery: string[]
    duration_in_days: number
    offer: number
    offer_end_date: Date | null
    start_from: number
    rate: number
    overview_text: string
    title: string
    highlights: string[]
    excluded: string[]
    included: string[]
    duration: string
    createdAt: Date
    updatedAt: Date
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  type GetTourGroupByPayload<T extends TourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourGroupByOutputType[P]>
            : GetScalarType<T[P], TourGroupByOutputType[P]>
        }
      >
    >


  export type TourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    reviews_number?: boolean
    adult_price?: boolean
    child_price?: boolean
    infant_price?: boolean
    enabled?: boolean
    gallery?: boolean
    duration_in_days?: boolean
    offer?: boolean
    offer_end_date?: boolean
    start_from?: boolean
    rate?: boolean
    overview_text?: boolean
    title?: boolean
    highlights?: boolean
    excluded?: boolean
    included?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pricing_groups?: boolean | Tour$pricing_groupsArgs<ExtArgs>
    categories?: boolean | Tour$categoriesArgs<ExtArgs>
    destinations?: boolean | Tour$destinationsArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    reviews_number?: boolean
    adult_price?: boolean
    child_price?: boolean
    infant_price?: boolean
    enabled?: boolean
    gallery?: boolean
    duration_in_days?: boolean
    offer?: boolean
    offer_end_date?: boolean
    start_from?: boolean
    rate?: boolean
    overview_text?: boolean
    title?: boolean
    highlights?: boolean
    excluded?: boolean
    included?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tour"]>

  export type TourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    reviews_number?: boolean
    adult_price?: boolean
    child_price?: boolean
    infant_price?: boolean
    enabled?: boolean
    gallery?: boolean
    duration_in_days?: boolean
    offer?: boolean
    offer_end_date?: boolean
    start_from?: boolean
    rate?: boolean
    overview_text?: boolean
    title?: boolean
    highlights?: boolean
    excluded?: boolean
    included?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tour"]>

  export type TourSelectScalar = {
    id?: boolean
    slug?: boolean
    reviews_number?: boolean
    adult_price?: boolean
    child_price?: boolean
    infant_price?: boolean
    enabled?: boolean
    gallery?: boolean
    duration_in_days?: boolean
    offer?: boolean
    offer_end_date?: boolean
    start_from?: boolean
    rate?: boolean
    overview_text?: boolean
    title?: boolean
    highlights?: boolean
    excluded?: boolean
    included?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "reviews_number" | "adult_price" | "child_price" | "infant_price" | "enabled" | "gallery" | "duration_in_days" | "offer" | "offer_end_date" | "start_from" | "rate" | "overview_text" | "title" | "highlights" | "excluded" | "included" | "duration" | "createdAt" | "updatedAt", ExtArgs["result"]["tour"]>
  export type TourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricing_groups?: boolean | Tour$pricing_groupsArgs<ExtArgs>
    categories?: boolean | Tour$categoriesArgs<ExtArgs>
    destinations?: boolean | Tour$destinationsArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tour"
    objects: {
      pricing_groups: Prisma.$PricingGroupPayload<ExtArgs>[]
      categories: Prisma.$TourToCategoryPayload<ExtArgs>[]
      destinations: Prisma.$TourToDestinationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      reviews_number: number
      adult_price: number
      child_price: number
      infant_price: number
      enabled: boolean
      gallery: string[]
      duration_in_days: number
      offer: number
      offer_end_date: Date | null
      start_from: number
      rate: number
      overview_text: string
      title: string
      highlights: string[]
      excluded: string[]
      included: string[]
      duration: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tour"]>
    composites: {}
  }

  type TourGetPayload<S extends boolean | null | undefined | TourDefaultArgs> = $Result.GetResult<Prisma.$TourPayload, S>

  type TourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourCountAggregateInputType | true
    }

  export interface TourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tour'], meta: { name: 'Tour' } }
    /**
     * Find zero or one Tour that matches the filter.
     * @param {TourFindUniqueArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourFindUniqueArgs>(args: SelectSubset<T, TourFindUniqueArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourFindUniqueOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourFindUniqueOrThrowArgs>(args: SelectSubset<T, TourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourFindFirstArgs>(args?: SelectSubset<T, TourFindFirstArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourFindFirstOrThrowArgs>(args?: SelectSubset<T, TourFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tours
     * const tours = await prisma.tour.findMany()
     * 
     * // Get first 10 Tours
     * const tours = await prisma.tour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourWithIdOnly = await prisma.tour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourFindManyArgs>(args?: SelectSubset<T, TourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tour.
     * @param {TourCreateArgs} args - Arguments to create a Tour.
     * @example
     * // Create one Tour
     * const Tour = await prisma.tour.create({
     *   data: {
     *     // ... data to create a Tour
     *   }
     * })
     * 
     */
    create<T extends TourCreateArgs>(args: SelectSubset<T, TourCreateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tours.
     * @param {TourCreateManyArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourCreateManyArgs>(args?: SelectSubset<T, TourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tours and returns the data saved in the database.
     * @param {TourCreateManyAndReturnArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourCreateManyAndReturnArgs>(args?: SelectSubset<T, TourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tour.
     * @param {TourDeleteArgs} args - Arguments to delete one Tour.
     * @example
     * // Delete one Tour
     * const Tour = await prisma.tour.delete({
     *   where: {
     *     // ... filter to delete one Tour
     *   }
     * })
     * 
     */
    delete<T extends TourDeleteArgs>(args: SelectSubset<T, TourDeleteArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tour.
     * @param {TourUpdateArgs} args - Arguments to update one Tour.
     * @example
     * // Update one Tour
     * const tour = await prisma.tour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourUpdateArgs>(args: SelectSubset<T, TourUpdateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tours.
     * @param {TourDeleteManyArgs} args - Arguments to filter Tours to delete.
     * @example
     * // Delete a few Tours
     * const { count } = await prisma.tour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourDeleteManyArgs>(args?: SelectSubset<T, TourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourUpdateManyArgs>(args: SelectSubset<T, TourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours and returns the data updated in the database.
     * @param {TourUpdateManyAndReturnArgs} args - Arguments to update many Tours.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourUpdateManyAndReturnArgs>(args: SelectSubset<T, TourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tour.
     * @param {TourUpsertArgs} args - Arguments to update or create a Tour.
     * @example
     * // Update or create a Tour
     * const tour = await prisma.tour.upsert({
     *   create: {
     *     // ... data to create a Tour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tour we want to update
     *   }
     * })
     */
    upsert<T extends TourUpsertArgs>(args: SelectSubset<T, TourUpsertArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourCountArgs} args - Arguments to filter Tours to count.
     * @example
     * // Count the number of Tours
     * const count = await prisma.tour.count({
     *   where: {
     *     // ... the filter for the Tours we want to count
     *   }
     * })
    **/
    count<T extends TourCountArgs>(
      args?: Subset<T, TourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourAggregateArgs>(args: Subset<T, TourAggregateArgs>): Prisma.PrismaPromise<GetTourAggregateType<T>>

    /**
     * Group by Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGroupByArgs} args - Group by arguments.
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
      T extends TourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourGroupByArgs['orderBy'] }
        : { orderBy?: TourGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tour model
   */
  readonly fields: TourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pricing_groups<T extends Tour$pricing_groupsArgs<ExtArgs> = {}>(args?: Subset<T, Tour$pricing_groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Tour$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Tour$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourToCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    destinations<T extends Tour$destinationsArgs<ExtArgs> = {}>(args?: Subset<T, Tour$destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourToDestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tour model
   */
  interface TourFieldRefs {
    readonly id: FieldRef<"Tour", 'Int'>
    readonly slug: FieldRef<"Tour", 'String'>
    readonly reviews_number: FieldRef<"Tour", 'Int'>
    readonly adult_price: FieldRef<"Tour", 'Float'>
    readonly child_price: FieldRef<"Tour", 'Float'>
    readonly infant_price: FieldRef<"Tour", 'Float'>
    readonly enabled: FieldRef<"Tour", 'Boolean'>
    readonly gallery: FieldRef<"Tour", 'String[]'>
    readonly duration_in_days: FieldRef<"Tour", 'Int'>
    readonly offer: FieldRef<"Tour", 'Float'>
    readonly offer_end_date: FieldRef<"Tour", 'DateTime'>
    readonly start_from: FieldRef<"Tour", 'Float'>
    readonly rate: FieldRef<"Tour", 'Float'>
    readonly overview_text: FieldRef<"Tour", 'String'>
    readonly title: FieldRef<"Tour", 'String'>
    readonly highlights: FieldRef<"Tour", 'String[]'>
    readonly excluded: FieldRef<"Tour", 'String[]'>
    readonly included: FieldRef<"Tour", 'String[]'>
    readonly duration: FieldRef<"Tour", 'String'>
    readonly createdAt: FieldRef<"Tour", 'DateTime'>
    readonly updatedAt: FieldRef<"Tour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tour findUnique
   */
  export type TourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findUniqueOrThrow
   */
  export type TourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findFirst
   */
  export type TourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findFirstOrThrow
   */
  export type TourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findMany
   */
  export type TourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tours to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour create
   */
  export type TourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to create a Tour.
     */
    data: XOR<TourCreateInput, TourUncheckedCreateInput>
  }

  /**
   * Tour createMany
   */
  export type TourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tour createManyAndReturn
   */
  export type TourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tour update
   */
  export type TourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to update a Tour.
     */
    data: XOR<TourUpdateInput, TourUncheckedUpdateInput>
    /**
     * Choose, which Tour to update.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour updateMany
   */
  export type TourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
  }

  /**
   * Tour updateManyAndReturn
   */
  export type TourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
  }

  /**
   * Tour upsert
   */
  export type TourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The filter to search for the Tour to update in case it exists.
     */
    where: TourWhereUniqueInput
    /**
     * In case the Tour found by the `where` argument doesn't exist, create a new Tour with this data.
     */
    create: XOR<TourCreateInput, TourUncheckedCreateInput>
    /**
     * In case the Tour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourUpdateInput, TourUncheckedUpdateInput>
  }

  /**
   * Tour delete
   */
  export type TourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter which Tour to delete.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour deleteMany
   */
  export type TourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tours to delete
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to delete.
     */
    limit?: number
  }

  /**
   * Tour.pricing_groups
   */
  export type Tour$pricing_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingGroup
     */
    select?: PricingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingGroup
     */
    omit?: PricingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingGroupInclude<ExtArgs> | null
    where?: PricingGroupWhereInput
    orderBy?: PricingGroupOrderByWithRelationInput | PricingGroupOrderByWithRelationInput[]
    cursor?: PricingGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingGroupScalarFieldEnum | PricingGroupScalarFieldEnum[]
  }

  /**
   * Tour.categories
   */
  export type Tour$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryInclude<ExtArgs> | null
    where?: TourToCategoryWhereInput
    orderBy?: TourToCategoryOrderByWithRelationInput | TourToCategoryOrderByWithRelationInput[]
    cursor?: TourToCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourToCategoryScalarFieldEnum | TourToCategoryScalarFieldEnum[]
  }

  /**
   * Tour.destinations
   */
  export type Tour$destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationInclude<ExtArgs> | null
    where?: TourToDestinationWhereInput
    orderBy?: TourToDestinationOrderByWithRelationInput | TourToDestinationOrderByWithRelationInput[]
    cursor?: TourToDestinationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourToDestinationScalarFieldEnum | TourToDestinationScalarFieldEnum[]
  }

  /**
   * Tour without action
   */
  export type TourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
  }


  /**
   * Model PricingGroup
   */

  export type AggregatePricingGroup = {
    _count: PricingGroupCountAggregateOutputType | null
    _avg: PricingGroupAvgAggregateOutputType | null
    _sum: PricingGroupSumAggregateOutputType | null
    _min: PricingGroupMinAggregateOutputType | null
    _max: PricingGroupMaxAggregateOutputType | null
  }

  export type PricingGroupAvgAggregateOutputType = {
    id: number | null
    from: number | null
    to: number | null
    price: number | null
    child_price: number | null
    tourId: number | null
  }

  export type PricingGroupSumAggregateOutputType = {
    id: number | null
    from: number | null
    to: number | null
    price: number | null
    child_price: number | null
    tourId: number | null
  }

  export type PricingGroupMinAggregateOutputType = {
    id: number | null
    from: number | null
    to: number | null
    price: number | null
    child_price: number | null
    tourId: number | null
  }

  export type PricingGroupMaxAggregateOutputType = {
    id: number | null
    from: number | null
    to: number | null
    price: number | null
    child_price: number | null
    tourId: number | null
  }

  export type PricingGroupCountAggregateOutputType = {
    id: number
    from: number
    to: number
    price: number
    child_price: number
    tourId: number
    _all: number
  }


  export type PricingGroupAvgAggregateInputType = {
    id?: true
    from?: true
    to?: true
    price?: true
    child_price?: true
    tourId?: true
  }

  export type PricingGroupSumAggregateInputType = {
    id?: true
    from?: true
    to?: true
    price?: true
    child_price?: true
    tourId?: true
  }

  export type PricingGroupMinAggregateInputType = {
    id?: true
    from?: true
    to?: true
    price?: true
    child_price?: true
    tourId?: true
  }

  export type PricingGroupMaxAggregateInputType = {
    id?: true
    from?: true
    to?: true
    price?: true
    child_price?: true
    tourId?: true
  }

  export type PricingGroupCountAggregateInputType = {
    id?: true
    from?: true
    to?: true
    price?: true
    child_price?: true
    tourId?: true
    _all?: true
  }

  export type PricingGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingGroup to aggregate.
     */
    where?: PricingGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingGroups to fetch.
     */
    orderBy?: PricingGroupOrderByWithRelationInput | PricingGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingGroups
    **/
    _count?: true | PricingGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingGroupMaxAggregateInputType
  }

  export type GetPricingGroupAggregateType<T extends PricingGroupAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingGroup[P]>
      : GetScalarType<T[P], AggregatePricingGroup[P]>
  }




  export type PricingGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingGroupWhereInput
    orderBy?: PricingGroupOrderByWithAggregationInput | PricingGroupOrderByWithAggregationInput[]
    by: PricingGroupScalarFieldEnum[] | PricingGroupScalarFieldEnum
    having?: PricingGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingGroupCountAggregateInputType | true
    _avg?: PricingGroupAvgAggregateInputType
    _sum?: PricingGroupSumAggregateInputType
    _min?: PricingGroupMinAggregateInputType
    _max?: PricingGroupMaxAggregateInputType
  }

  export type PricingGroupGroupByOutputType = {
    id: number
    from: number
    to: number
    price: number
    child_price: number
    tourId: number
    _count: PricingGroupCountAggregateOutputType | null
    _avg: PricingGroupAvgAggregateOutputType | null
    _sum: PricingGroupSumAggregateOutputType | null
    _min: PricingGroupMinAggregateOutputType | null
    _max: PricingGroupMaxAggregateOutputType | null
  }

  type GetPricingGroupGroupByPayload<T extends PricingGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingGroupGroupByOutputType[P]>
            : GetScalarType<T[P], PricingGroupGroupByOutputType[P]>
        }
      >
    >


  export type PricingGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from?: boolean
    to?: boolean
    price?: boolean
    child_price?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingGroup"]>

  export type PricingGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from?: boolean
    to?: boolean
    price?: boolean
    child_price?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingGroup"]>

  export type PricingGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from?: boolean
    to?: boolean
    price?: boolean
    child_price?: boolean
    tourId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingGroup"]>

  export type PricingGroupSelectScalar = {
    id?: boolean
    from?: boolean
    to?: boolean
    price?: boolean
    child_price?: boolean
    tourId?: boolean
  }

  export type PricingGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "from" | "to" | "price" | "child_price" | "tourId", ExtArgs["result"]["pricingGroup"]>
  export type PricingGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type PricingGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type PricingGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $PricingGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingGroup"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      from: number
      to: number
      price: number
      child_price: number
      tourId: number
    }, ExtArgs["result"]["pricingGroup"]>
    composites: {}
  }

  type PricingGroupGetPayload<S extends boolean | null | undefined | PricingGroupDefaultArgs> = $Result.GetResult<Prisma.$PricingGroupPayload, S>

  type PricingGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingGroupCountAggregateInputType | true
    }

  export interface PricingGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingGroup'], meta: { name: 'PricingGroup' } }
    /**
     * Find zero or one PricingGroup that matches the filter.
     * @param {PricingGroupFindUniqueArgs} args - Arguments to find a PricingGroup
     * @example
     * // Get one PricingGroup
     * const pricingGroup = await prisma.pricingGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingGroupFindUniqueArgs>(args: SelectSubset<T, PricingGroupFindUniqueArgs<ExtArgs>>): Prisma__PricingGroupClient<$Result.GetResult<Prisma.$PricingGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PricingGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingGroupFindUniqueOrThrowArgs} args - Arguments to find a PricingGroup
     * @example
     * // Get one PricingGroup
     * const pricingGroup = await prisma.pricingGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingGroupClient<$Result.GetResult<Prisma.$PricingGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingGroupFindFirstArgs} args - Arguments to find a PricingGroup
     * @example
     * // Get one PricingGroup
     * const pricingGroup = await prisma.pricingGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingGroupFindFirstArgs>(args?: SelectSubset<T, PricingGroupFindFirstArgs<ExtArgs>>): Prisma__PricingGroupClient<$Result.GetResult<Prisma.$PricingGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingGroupFindFirstOrThrowArgs} args - Arguments to find a PricingGroup
     * @example
     * // Get one PricingGroup
     * const pricingGroup = await prisma.pricingGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingGroupClient<$Result.GetResult<Prisma.$PricingGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PricingGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingGroups
     * const pricingGroups = await prisma.pricingGroup.findMany()
     * 
     * // Get first 10 PricingGroups
     * const pricingGroups = await prisma.pricingGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingGroupWithIdOnly = await prisma.pricingGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingGroupFindManyArgs>(args?: SelectSubset<T, PricingGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PricingGroup.
     * @param {PricingGroupCreateArgs} args - Arguments to create a PricingGroup.
     * @example
     * // Create one PricingGroup
     * const PricingGroup = await prisma.pricingGroup.create({
     *   data: {
     *     // ... data to create a PricingGroup
     *   }
     * })
     * 
     */
    create<T extends PricingGroupCreateArgs>(args: SelectSubset<T, PricingGroupCreateArgs<ExtArgs>>): Prisma__PricingGroupClient<$Result.GetResult<Prisma.$PricingGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PricingGroups.
     * @param {PricingGroupCreateManyArgs} args - Arguments to create many PricingGroups.
     * @example
     * // Create many PricingGroups
     * const pricingGroup = await prisma.pricingGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingGroupCreateManyArgs>(args?: SelectSubset<T, PricingGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingGroups and returns the data saved in the database.
     * @param {PricingGroupCreateManyAndReturnArgs} args - Arguments to create many PricingGroups.
     * @example
     * // Create many PricingGroups
     * const pricingGroup = await prisma.pricingGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingGroups and only return the `id`
     * const pricingGroupWithIdOnly = await prisma.pricingGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PricingGroup.
     * @param {PricingGroupDeleteArgs} args - Arguments to delete one PricingGroup.
     * @example
     * // Delete one PricingGroup
     * const PricingGroup = await prisma.pricingGroup.delete({
     *   where: {
     *     // ... filter to delete one PricingGroup
     *   }
     * })
     * 
     */
    delete<T extends PricingGroupDeleteArgs>(args: SelectSubset<T, PricingGroupDeleteArgs<ExtArgs>>): Prisma__PricingGroupClient<$Result.GetResult<Prisma.$PricingGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PricingGroup.
     * @param {PricingGroupUpdateArgs} args - Arguments to update one PricingGroup.
     * @example
     * // Update one PricingGroup
     * const pricingGroup = await prisma.pricingGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingGroupUpdateArgs>(args: SelectSubset<T, PricingGroupUpdateArgs<ExtArgs>>): Prisma__PricingGroupClient<$Result.GetResult<Prisma.$PricingGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PricingGroups.
     * @param {PricingGroupDeleteManyArgs} args - Arguments to filter PricingGroups to delete.
     * @example
     * // Delete a few PricingGroups
     * const { count } = await prisma.pricingGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingGroupDeleteManyArgs>(args?: SelectSubset<T, PricingGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingGroups
     * const pricingGroup = await prisma.pricingGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingGroupUpdateManyArgs>(args: SelectSubset<T, PricingGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingGroups and returns the data updated in the database.
     * @param {PricingGroupUpdateManyAndReturnArgs} args - Arguments to update many PricingGroups.
     * @example
     * // Update many PricingGroups
     * const pricingGroup = await prisma.pricingGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PricingGroups and only return the `id`
     * const pricingGroupWithIdOnly = await prisma.pricingGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PricingGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, PricingGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PricingGroup.
     * @param {PricingGroupUpsertArgs} args - Arguments to update or create a PricingGroup.
     * @example
     * // Update or create a PricingGroup
     * const pricingGroup = await prisma.pricingGroup.upsert({
     *   create: {
     *     // ... data to create a PricingGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingGroup we want to update
     *   }
     * })
     */
    upsert<T extends PricingGroupUpsertArgs>(args: SelectSubset<T, PricingGroupUpsertArgs<ExtArgs>>): Prisma__PricingGroupClient<$Result.GetResult<Prisma.$PricingGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PricingGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingGroupCountArgs} args - Arguments to filter PricingGroups to count.
     * @example
     * // Count the number of PricingGroups
     * const count = await prisma.pricingGroup.count({
     *   where: {
     *     // ... the filter for the PricingGroups we want to count
     *   }
     * })
    **/
    count<T extends PricingGroupCountArgs>(
      args?: Subset<T, PricingGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricingGroupAggregateArgs>(args: Subset<T, PricingGroupAggregateArgs>): Prisma.PrismaPromise<GetPricingGroupAggregateType<T>>

    /**
     * Group by PricingGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingGroupGroupByArgs} args - Group by arguments.
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
      T extends PricingGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingGroupGroupByArgs['orderBy'] }
        : { orderBy?: PricingGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PricingGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingGroup model
   */
  readonly fields: PricingGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PricingGroup model
   */
  interface PricingGroupFieldRefs {
    readonly id: FieldRef<"PricingGroup", 'Int'>
    readonly from: FieldRef<"PricingGroup", 'Int'>
    readonly to: FieldRef<"PricingGroup", 'Int'>
    readonly price: FieldRef<"PricingGroup", 'Float'>
    readonly child_price: FieldRef<"PricingGroup", 'Float'>
    readonly tourId: FieldRef<"PricingGroup", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PricingGroup findUnique
   */
  export type PricingGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingGroup
     */
    select?: PricingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingGroup
     */
    omit?: PricingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingGroupInclude<ExtArgs> | null
    /**
     * Filter, which PricingGroup to fetch.
     */
    where: PricingGroupWhereUniqueInput
  }

  /**
   * PricingGroup findUniqueOrThrow
   */
  export type PricingGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingGroup
     */
    select?: PricingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingGroup
     */
    omit?: PricingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingGroupInclude<ExtArgs> | null
    /**
     * Filter, which PricingGroup to fetch.
     */
    where: PricingGroupWhereUniqueInput
  }

  /**
   * PricingGroup findFirst
   */
  export type PricingGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingGroup
     */
    select?: PricingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingGroup
     */
    omit?: PricingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingGroupInclude<ExtArgs> | null
    /**
     * Filter, which PricingGroup to fetch.
     */
    where?: PricingGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingGroups to fetch.
     */
    orderBy?: PricingGroupOrderByWithRelationInput | PricingGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingGroups.
     */
    cursor?: PricingGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingGroups.
     */
    distinct?: PricingGroupScalarFieldEnum | PricingGroupScalarFieldEnum[]
  }

  /**
   * PricingGroup findFirstOrThrow
   */
  export type PricingGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingGroup
     */
    select?: PricingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingGroup
     */
    omit?: PricingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingGroupInclude<ExtArgs> | null
    /**
     * Filter, which PricingGroup to fetch.
     */
    where?: PricingGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingGroups to fetch.
     */
    orderBy?: PricingGroupOrderByWithRelationInput | PricingGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingGroups.
     */
    cursor?: PricingGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingGroups.
     */
    distinct?: PricingGroupScalarFieldEnum | PricingGroupScalarFieldEnum[]
  }

  /**
   * PricingGroup findMany
   */
  export type PricingGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingGroup
     */
    select?: PricingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingGroup
     */
    omit?: PricingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingGroupInclude<ExtArgs> | null
    /**
     * Filter, which PricingGroups to fetch.
     */
    where?: PricingGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingGroups to fetch.
     */
    orderBy?: PricingGroupOrderByWithRelationInput | PricingGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingGroups.
     */
    cursor?: PricingGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingGroups.
     */
    skip?: number
    distinct?: PricingGroupScalarFieldEnum | PricingGroupScalarFieldEnum[]
  }

  /**
   * PricingGroup create
   */
  export type PricingGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingGroup
     */
    select?: PricingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingGroup
     */
    omit?: PricingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingGroup.
     */
    data: XOR<PricingGroupCreateInput, PricingGroupUncheckedCreateInput>
  }

  /**
   * PricingGroup createMany
   */
  export type PricingGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingGroups.
     */
    data: PricingGroupCreateManyInput | PricingGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingGroup createManyAndReturn
   */
  export type PricingGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingGroup
     */
    select?: PricingGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingGroup
     */
    omit?: PricingGroupOmit<ExtArgs> | null
    /**
     * The data used to create many PricingGroups.
     */
    data: PricingGroupCreateManyInput | PricingGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingGroup update
   */
  export type PricingGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingGroup
     */
    select?: PricingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingGroup
     */
    omit?: PricingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingGroup.
     */
    data: XOR<PricingGroupUpdateInput, PricingGroupUncheckedUpdateInput>
    /**
     * Choose, which PricingGroup to update.
     */
    where: PricingGroupWhereUniqueInput
  }

  /**
   * PricingGroup updateMany
   */
  export type PricingGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingGroups.
     */
    data: XOR<PricingGroupUpdateManyMutationInput, PricingGroupUncheckedUpdateManyInput>
    /**
     * Filter which PricingGroups to update
     */
    where?: PricingGroupWhereInput
    /**
     * Limit how many PricingGroups to update.
     */
    limit?: number
  }

  /**
   * PricingGroup updateManyAndReturn
   */
  export type PricingGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingGroup
     */
    select?: PricingGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingGroup
     */
    omit?: PricingGroupOmit<ExtArgs> | null
    /**
     * The data used to update PricingGroups.
     */
    data: XOR<PricingGroupUpdateManyMutationInput, PricingGroupUncheckedUpdateManyInput>
    /**
     * Filter which PricingGroups to update
     */
    where?: PricingGroupWhereInput
    /**
     * Limit how many PricingGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingGroup upsert
   */
  export type PricingGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingGroup
     */
    select?: PricingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingGroup
     */
    omit?: PricingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingGroup to update in case it exists.
     */
    where: PricingGroupWhereUniqueInput
    /**
     * In case the PricingGroup found by the `where` argument doesn't exist, create a new PricingGroup with this data.
     */
    create: XOR<PricingGroupCreateInput, PricingGroupUncheckedCreateInput>
    /**
     * In case the PricingGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingGroupUpdateInput, PricingGroupUncheckedUpdateInput>
  }

  /**
   * PricingGroup delete
   */
  export type PricingGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingGroup
     */
    select?: PricingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingGroup
     */
    omit?: PricingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingGroupInclude<ExtArgs> | null
    /**
     * Filter which PricingGroup to delete.
     */
    where: PricingGroupWhereUniqueInput
  }

  /**
   * PricingGroup deleteMany
   */
  export type PricingGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingGroups to delete
     */
    where?: PricingGroupWhereInput
    /**
     * Limit how many PricingGroups to delete.
     */
    limit?: number
  }

  /**
   * PricingGroup without action
   */
  export type PricingGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingGroup
     */
    select?: PricingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingGroup
     */
    omit?: PricingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingGroupInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    title: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tours?: boolean | Category$toursArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | Category$toursArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      tours: Prisma.$TourToCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tours<T extends Category$toursArgs<ExtArgs> = {}>(args?: Subset<T, Category$toursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourToCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly title: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.tours
   */
  export type Category$toursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryInclude<ExtArgs> | null
    where?: TourToCategoryWhereInput
    orderBy?: TourToCategoryOrderByWithRelationInput | TourToCategoryOrderByWithRelationInput[]
    cursor?: TourToCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourToCategoryScalarFieldEnum | TourToCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Destination
   */

  export type AggregateDestination = {
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  export type DestinationAvgAggregateOutputType = {
    id: number | null
  }

  export type DestinationSumAggregateOutputType = {
    id: number | null
  }

  export type DestinationMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DestinationAvgAggregateInputType = {
    id?: true
  }

  export type DestinationSumAggregateInputType = {
    id?: true
  }

  export type DestinationMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DestinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destination to aggregate.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinations
    **/
    _count?: true | DestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationMaxAggregateInputType
  }

  export type GetDestinationAggregateType<T extends DestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestination[P]>
      : GetScalarType<T[P], AggregateDestination[P]>
  }




  export type DestinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithAggregationInput | DestinationOrderByWithAggregationInput[]
    by: DestinationScalarFieldEnum[] | DestinationScalarFieldEnum
    having?: DestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationCountAggregateInputType | true
    _avg?: DestinationAvgAggregateInputType
    _sum?: DestinationSumAggregateInputType
    _min?: DestinationMinAggregateInputType
    _max?: DestinationMaxAggregateInputType
  }

  export type DestinationGroupByOutputType = {
    id: number
    title: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  type GetDestinationGroupByPayload<T extends DestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationGroupByOutputType[P]>
        }
      >
    >


  export type DestinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tours?: boolean | Destination$toursArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DestinationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["destination"]>
  export type DestinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | Destination$toursArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DestinationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DestinationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DestinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Destination"
    objects: {
      tours: Prisma.$TourToDestinationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["destination"]>
    composites: {}
  }

  type DestinationGetPayload<S extends boolean | null | undefined | DestinationDefaultArgs> = $Result.GetResult<Prisma.$DestinationPayload, S>

  type DestinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationCountAggregateInputType | true
    }

  export interface DestinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destination'], meta: { name: 'Destination' } }
    /**
     * Find zero or one Destination that matches the filter.
     * @param {DestinationFindUniqueArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationFindUniqueArgs>(args: SelectSubset<T, DestinationFindUniqueArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationFindUniqueOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationFindFirstArgs>(args?: SelectSubset<T, DestinationFindFirstArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destination.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationWithIdOnly = await prisma.destination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationFindManyArgs>(args?: SelectSubset<T, DestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destination.
     * @param {DestinationCreateArgs} args - Arguments to create a Destination.
     * @example
     * // Create one Destination
     * const Destination = await prisma.destination.create({
     *   data: {
     *     // ... data to create a Destination
     *   }
     * })
     * 
     */
    create<T extends DestinationCreateArgs>(args: SelectSubset<T, DestinationCreateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinations.
     * @param {DestinationCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationCreateManyArgs>(args?: SelectSubset<T, DestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Destinations and returns the data saved in the database.
     * @param {DestinationCreateManyAndReturnArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Destination.
     * @param {DestinationDeleteArgs} args - Arguments to delete one Destination.
     * @example
     * // Delete one Destination
     * const Destination = await prisma.destination.delete({
     *   where: {
     *     // ... filter to delete one Destination
     *   }
     * })
     * 
     */
    delete<T extends DestinationDeleteArgs>(args: SelectSubset<T, DestinationDeleteArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destination.
     * @param {DestinationUpdateArgs} args - Arguments to update one Destination.
     * @example
     * // Update one Destination
     * const destination = await prisma.destination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationUpdateArgs>(args: SelectSubset<T, DestinationUpdateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinations.
     * @param {DestinationDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationDeleteManyArgs>(args?: SelectSubset<T, DestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationUpdateManyArgs>(args: SelectSubset<T, DestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations and returns the data updated in the database.
     * @param {DestinationUpdateManyAndReturnArgs} args - Arguments to update many Destinations.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DestinationUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Destination.
     * @param {DestinationUpsertArgs} args - Arguments to update or create a Destination.
     * @example
     * // Update or create a Destination
     * const destination = await prisma.destination.upsert({
     *   create: {
     *     // ... data to create a Destination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destination we want to update
     *   }
     * })
     */
    upsert<T extends DestinationUpsertArgs>(args: SelectSubset<T, DestinationUpsertArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destination.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends DestinationCountArgs>(
      args?: Subset<T, DestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DestinationAggregateArgs>(args: Subset<T, DestinationAggregateArgs>): Prisma.PrismaPromise<GetDestinationAggregateType<T>>

    /**
     * Group by Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationGroupByArgs} args - Group by arguments.
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
      T extends DestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationGroupByArgs['orderBy'] }
        : { orderBy?: DestinationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Destination model
   */
  readonly fields: DestinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Destination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tours<T extends Destination$toursArgs<ExtArgs> = {}>(args?: Subset<T, Destination$toursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourToDestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Destination model
   */
  interface DestinationFieldRefs {
    readonly id: FieldRef<"Destination", 'Int'>
    readonly title: FieldRef<"Destination", 'String'>
    readonly slug: FieldRef<"Destination", 'String'>
    readonly createdAt: FieldRef<"Destination", 'DateTime'>
    readonly updatedAt: FieldRef<"Destination", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Destination findUnique
   */
  export type DestinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findUniqueOrThrow
   */
  export type DestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findFirst
   */
  export type DestinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findFirstOrThrow
   */
  export type DestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findMany
   */
  export type DestinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination create
   */
  export type DestinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a Destination.
     */
    data: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
  }

  /**
   * Destination createMany
   */
  export type DestinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination createManyAndReturn
   */
  export type DestinationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination update
   */
  export type DestinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a Destination.
     */
    data: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
    /**
     * Choose, which Destination to update.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination updateMany
   */
  export type DestinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination updateManyAndReturn
   */
  export type DestinationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination upsert
   */
  export type DestinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the Destination to update in case it exists.
     */
    where: DestinationWhereUniqueInput
    /**
     * In case the Destination found by the `where` argument doesn't exist, create a new Destination with this data.
     */
    create: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
    /**
     * In case the Destination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
  }

  /**
   * Destination delete
   */
  export type DestinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter which Destination to delete.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination deleteMany
   */
  export type DestinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to delete
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to delete.
     */
    limit?: number
  }

  /**
   * Destination.tours
   */
  export type Destination$toursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationInclude<ExtArgs> | null
    where?: TourToDestinationWhereInput
    orderBy?: TourToDestinationOrderByWithRelationInput | TourToDestinationOrderByWithRelationInput[]
    cursor?: TourToDestinationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourToDestinationScalarFieldEnum | TourToDestinationScalarFieldEnum[]
  }

  /**
   * Destination without action
   */
  export type DestinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
  }


  /**
   * Model TourToCategory
   */

  export type AggregateTourToCategory = {
    _count: TourToCategoryCountAggregateOutputType | null
    _avg: TourToCategoryAvgAggregateOutputType | null
    _sum: TourToCategorySumAggregateOutputType | null
    _min: TourToCategoryMinAggregateOutputType | null
    _max: TourToCategoryMaxAggregateOutputType | null
  }

  export type TourToCategoryAvgAggregateOutputType = {
    tourId: number | null
    categoryId: number | null
  }

  export type TourToCategorySumAggregateOutputType = {
    tourId: number | null
    categoryId: number | null
  }

  export type TourToCategoryMinAggregateOutputType = {
    tourId: number | null
    categoryId: number | null
  }

  export type TourToCategoryMaxAggregateOutputType = {
    tourId: number | null
    categoryId: number | null
  }

  export type TourToCategoryCountAggregateOutputType = {
    tourId: number
    categoryId: number
    _all: number
  }


  export type TourToCategoryAvgAggregateInputType = {
    tourId?: true
    categoryId?: true
  }

  export type TourToCategorySumAggregateInputType = {
    tourId?: true
    categoryId?: true
  }

  export type TourToCategoryMinAggregateInputType = {
    tourId?: true
    categoryId?: true
  }

  export type TourToCategoryMaxAggregateInputType = {
    tourId?: true
    categoryId?: true
  }

  export type TourToCategoryCountAggregateInputType = {
    tourId?: true
    categoryId?: true
    _all?: true
  }

  export type TourToCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourToCategory to aggregate.
     */
    where?: TourToCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourToCategories to fetch.
     */
    orderBy?: TourToCategoryOrderByWithRelationInput | TourToCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourToCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourToCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourToCategories
    **/
    _count?: true | TourToCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourToCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourToCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourToCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourToCategoryMaxAggregateInputType
  }

  export type GetTourToCategoryAggregateType<T extends TourToCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTourToCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourToCategory[P]>
      : GetScalarType<T[P], AggregateTourToCategory[P]>
  }




  export type TourToCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourToCategoryWhereInput
    orderBy?: TourToCategoryOrderByWithAggregationInput | TourToCategoryOrderByWithAggregationInput[]
    by: TourToCategoryScalarFieldEnum[] | TourToCategoryScalarFieldEnum
    having?: TourToCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourToCategoryCountAggregateInputType | true
    _avg?: TourToCategoryAvgAggregateInputType
    _sum?: TourToCategorySumAggregateInputType
    _min?: TourToCategoryMinAggregateInputType
    _max?: TourToCategoryMaxAggregateInputType
  }

  export type TourToCategoryGroupByOutputType = {
    tourId: number
    categoryId: number
    _count: TourToCategoryCountAggregateOutputType | null
    _avg: TourToCategoryAvgAggregateOutputType | null
    _sum: TourToCategorySumAggregateOutputType | null
    _min: TourToCategoryMinAggregateOutputType | null
    _max: TourToCategoryMaxAggregateOutputType | null
  }

  type GetTourToCategoryGroupByPayload<T extends TourToCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourToCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourToCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourToCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TourToCategoryGroupByOutputType[P]>
        }
      >
    >


  export type TourToCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tourId?: boolean
    categoryId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourToCategory"]>

  export type TourToCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tourId?: boolean
    categoryId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourToCategory"]>

  export type TourToCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tourId?: boolean
    categoryId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourToCategory"]>

  export type TourToCategorySelectScalar = {
    tourId?: boolean
    categoryId?: boolean
  }

  export type TourToCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tourId" | "categoryId", ExtArgs["result"]["tourToCategory"]>
  export type TourToCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type TourToCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type TourToCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $TourToCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourToCategory"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tourId: number
      categoryId: number
    }, ExtArgs["result"]["tourToCategory"]>
    composites: {}
  }

  type TourToCategoryGetPayload<S extends boolean | null | undefined | TourToCategoryDefaultArgs> = $Result.GetResult<Prisma.$TourToCategoryPayload, S>

  type TourToCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourToCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourToCategoryCountAggregateInputType | true
    }

  export interface TourToCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourToCategory'], meta: { name: 'TourToCategory' } }
    /**
     * Find zero or one TourToCategory that matches the filter.
     * @param {TourToCategoryFindUniqueArgs} args - Arguments to find a TourToCategory
     * @example
     * // Get one TourToCategory
     * const tourToCategory = await prisma.tourToCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourToCategoryFindUniqueArgs>(args: SelectSubset<T, TourToCategoryFindUniqueArgs<ExtArgs>>): Prisma__TourToCategoryClient<$Result.GetResult<Prisma.$TourToCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourToCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourToCategoryFindUniqueOrThrowArgs} args - Arguments to find a TourToCategory
     * @example
     * // Get one TourToCategory
     * const tourToCategory = await prisma.tourToCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourToCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TourToCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourToCategoryClient<$Result.GetResult<Prisma.$TourToCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourToCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToCategoryFindFirstArgs} args - Arguments to find a TourToCategory
     * @example
     * // Get one TourToCategory
     * const tourToCategory = await prisma.tourToCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourToCategoryFindFirstArgs>(args?: SelectSubset<T, TourToCategoryFindFirstArgs<ExtArgs>>): Prisma__TourToCategoryClient<$Result.GetResult<Prisma.$TourToCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourToCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToCategoryFindFirstOrThrowArgs} args - Arguments to find a TourToCategory
     * @example
     * // Get one TourToCategory
     * const tourToCategory = await prisma.tourToCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourToCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TourToCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourToCategoryClient<$Result.GetResult<Prisma.$TourToCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourToCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourToCategories
     * const tourToCategories = await prisma.tourToCategory.findMany()
     * 
     * // Get first 10 TourToCategories
     * const tourToCategories = await prisma.tourToCategory.findMany({ take: 10 })
     * 
     * // Only select the `tourId`
     * const tourToCategoryWithTourIdOnly = await prisma.tourToCategory.findMany({ select: { tourId: true } })
     * 
     */
    findMany<T extends TourToCategoryFindManyArgs>(args?: SelectSubset<T, TourToCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourToCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourToCategory.
     * @param {TourToCategoryCreateArgs} args - Arguments to create a TourToCategory.
     * @example
     * // Create one TourToCategory
     * const TourToCategory = await prisma.tourToCategory.create({
     *   data: {
     *     // ... data to create a TourToCategory
     *   }
     * })
     * 
     */
    create<T extends TourToCategoryCreateArgs>(args: SelectSubset<T, TourToCategoryCreateArgs<ExtArgs>>): Prisma__TourToCategoryClient<$Result.GetResult<Prisma.$TourToCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourToCategories.
     * @param {TourToCategoryCreateManyArgs} args - Arguments to create many TourToCategories.
     * @example
     * // Create many TourToCategories
     * const tourToCategory = await prisma.tourToCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourToCategoryCreateManyArgs>(args?: SelectSubset<T, TourToCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourToCategories and returns the data saved in the database.
     * @param {TourToCategoryCreateManyAndReturnArgs} args - Arguments to create many TourToCategories.
     * @example
     * // Create many TourToCategories
     * const tourToCategory = await prisma.tourToCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourToCategories and only return the `tourId`
     * const tourToCategoryWithTourIdOnly = await prisma.tourToCategory.createManyAndReturn({
     *   select: { tourId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourToCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TourToCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourToCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourToCategory.
     * @param {TourToCategoryDeleteArgs} args - Arguments to delete one TourToCategory.
     * @example
     * // Delete one TourToCategory
     * const TourToCategory = await prisma.tourToCategory.delete({
     *   where: {
     *     // ... filter to delete one TourToCategory
     *   }
     * })
     * 
     */
    delete<T extends TourToCategoryDeleteArgs>(args: SelectSubset<T, TourToCategoryDeleteArgs<ExtArgs>>): Prisma__TourToCategoryClient<$Result.GetResult<Prisma.$TourToCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourToCategory.
     * @param {TourToCategoryUpdateArgs} args - Arguments to update one TourToCategory.
     * @example
     * // Update one TourToCategory
     * const tourToCategory = await prisma.tourToCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourToCategoryUpdateArgs>(args: SelectSubset<T, TourToCategoryUpdateArgs<ExtArgs>>): Prisma__TourToCategoryClient<$Result.GetResult<Prisma.$TourToCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourToCategories.
     * @param {TourToCategoryDeleteManyArgs} args - Arguments to filter TourToCategories to delete.
     * @example
     * // Delete a few TourToCategories
     * const { count } = await prisma.tourToCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourToCategoryDeleteManyArgs>(args?: SelectSubset<T, TourToCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourToCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourToCategories
     * const tourToCategory = await prisma.tourToCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourToCategoryUpdateManyArgs>(args: SelectSubset<T, TourToCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourToCategories and returns the data updated in the database.
     * @param {TourToCategoryUpdateManyAndReturnArgs} args - Arguments to update many TourToCategories.
     * @example
     * // Update many TourToCategories
     * const tourToCategory = await prisma.tourToCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourToCategories and only return the `tourId`
     * const tourToCategoryWithTourIdOnly = await prisma.tourToCategory.updateManyAndReturn({
     *   select: { tourId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourToCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TourToCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourToCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourToCategory.
     * @param {TourToCategoryUpsertArgs} args - Arguments to update or create a TourToCategory.
     * @example
     * // Update or create a TourToCategory
     * const tourToCategory = await prisma.tourToCategory.upsert({
     *   create: {
     *     // ... data to create a TourToCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourToCategory we want to update
     *   }
     * })
     */
    upsert<T extends TourToCategoryUpsertArgs>(args: SelectSubset<T, TourToCategoryUpsertArgs<ExtArgs>>): Prisma__TourToCategoryClient<$Result.GetResult<Prisma.$TourToCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourToCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToCategoryCountArgs} args - Arguments to filter TourToCategories to count.
     * @example
     * // Count the number of TourToCategories
     * const count = await prisma.tourToCategory.count({
     *   where: {
     *     // ... the filter for the TourToCategories we want to count
     *   }
     * })
    **/
    count<T extends TourToCategoryCountArgs>(
      args?: Subset<T, TourToCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourToCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourToCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourToCategoryAggregateArgs>(args: Subset<T, TourToCategoryAggregateArgs>): Prisma.PrismaPromise<GetTourToCategoryAggregateType<T>>

    /**
     * Group by TourToCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToCategoryGroupByArgs} args - Group by arguments.
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
      T extends TourToCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourToCategoryGroupByArgs['orderBy'] }
        : { orderBy?: TourToCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourToCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourToCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourToCategory model
   */
  readonly fields: TourToCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourToCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourToCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TourToCategory model
   */
  interface TourToCategoryFieldRefs {
    readonly tourId: FieldRef<"TourToCategory", 'Int'>
    readonly categoryId: FieldRef<"TourToCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TourToCategory findUnique
   */
  export type TourToCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TourToCategory to fetch.
     */
    where: TourToCategoryWhereUniqueInput
  }

  /**
   * TourToCategory findUniqueOrThrow
   */
  export type TourToCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TourToCategory to fetch.
     */
    where: TourToCategoryWhereUniqueInput
  }

  /**
   * TourToCategory findFirst
   */
  export type TourToCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TourToCategory to fetch.
     */
    where?: TourToCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourToCategories to fetch.
     */
    orderBy?: TourToCategoryOrderByWithRelationInput | TourToCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourToCategories.
     */
    cursor?: TourToCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourToCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourToCategories.
     */
    distinct?: TourToCategoryScalarFieldEnum | TourToCategoryScalarFieldEnum[]
  }

  /**
   * TourToCategory findFirstOrThrow
   */
  export type TourToCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TourToCategory to fetch.
     */
    where?: TourToCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourToCategories to fetch.
     */
    orderBy?: TourToCategoryOrderByWithRelationInput | TourToCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourToCategories.
     */
    cursor?: TourToCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourToCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourToCategories.
     */
    distinct?: TourToCategoryScalarFieldEnum | TourToCategoryScalarFieldEnum[]
  }

  /**
   * TourToCategory findMany
   */
  export type TourToCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TourToCategories to fetch.
     */
    where?: TourToCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourToCategories to fetch.
     */
    orderBy?: TourToCategoryOrderByWithRelationInput | TourToCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourToCategories.
     */
    cursor?: TourToCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourToCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourToCategories.
     */
    skip?: number
    distinct?: TourToCategoryScalarFieldEnum | TourToCategoryScalarFieldEnum[]
  }

  /**
   * TourToCategory create
   */
  export type TourToCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TourToCategory.
     */
    data: XOR<TourToCategoryCreateInput, TourToCategoryUncheckedCreateInput>
  }

  /**
   * TourToCategory createMany
   */
  export type TourToCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourToCategories.
     */
    data: TourToCategoryCreateManyInput | TourToCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourToCategory createManyAndReturn
   */
  export type TourToCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many TourToCategories.
     */
    data: TourToCategoryCreateManyInput | TourToCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourToCategory update
   */
  export type TourToCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TourToCategory.
     */
    data: XOR<TourToCategoryUpdateInput, TourToCategoryUncheckedUpdateInput>
    /**
     * Choose, which TourToCategory to update.
     */
    where: TourToCategoryWhereUniqueInput
  }

  /**
   * TourToCategory updateMany
   */
  export type TourToCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourToCategories.
     */
    data: XOR<TourToCategoryUpdateManyMutationInput, TourToCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TourToCategories to update
     */
    where?: TourToCategoryWhereInput
    /**
     * Limit how many TourToCategories to update.
     */
    limit?: number
  }

  /**
   * TourToCategory updateManyAndReturn
   */
  export type TourToCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * The data used to update TourToCategories.
     */
    data: XOR<TourToCategoryUpdateManyMutationInput, TourToCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TourToCategories to update
     */
    where?: TourToCategoryWhereInput
    /**
     * Limit how many TourToCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourToCategory upsert
   */
  export type TourToCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TourToCategory to update in case it exists.
     */
    where: TourToCategoryWhereUniqueInput
    /**
     * In case the TourToCategory found by the `where` argument doesn't exist, create a new TourToCategory with this data.
     */
    create: XOR<TourToCategoryCreateInput, TourToCategoryUncheckedCreateInput>
    /**
     * In case the TourToCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourToCategoryUpdateInput, TourToCategoryUncheckedUpdateInput>
  }

  /**
   * TourToCategory delete
   */
  export type TourToCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryInclude<ExtArgs> | null
    /**
     * Filter which TourToCategory to delete.
     */
    where: TourToCategoryWhereUniqueInput
  }

  /**
   * TourToCategory deleteMany
   */
  export type TourToCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourToCategories to delete
     */
    where?: TourToCategoryWhereInput
    /**
     * Limit how many TourToCategories to delete.
     */
    limit?: number
  }

  /**
   * TourToCategory without action
   */
  export type TourToCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToCategory
     */
    select?: TourToCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToCategory
     */
    omit?: TourToCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToCategoryInclude<ExtArgs> | null
  }


  /**
   * Model TourToDestination
   */

  export type AggregateTourToDestination = {
    _count: TourToDestinationCountAggregateOutputType | null
    _avg: TourToDestinationAvgAggregateOutputType | null
    _sum: TourToDestinationSumAggregateOutputType | null
    _min: TourToDestinationMinAggregateOutputType | null
    _max: TourToDestinationMaxAggregateOutputType | null
  }

  export type TourToDestinationAvgAggregateOutputType = {
    tourId: number | null
    destinationId: number | null
  }

  export type TourToDestinationSumAggregateOutputType = {
    tourId: number | null
    destinationId: number | null
  }

  export type TourToDestinationMinAggregateOutputType = {
    tourId: number | null
    destinationId: number | null
  }

  export type TourToDestinationMaxAggregateOutputType = {
    tourId: number | null
    destinationId: number | null
  }

  export type TourToDestinationCountAggregateOutputType = {
    tourId: number
    destinationId: number
    _all: number
  }


  export type TourToDestinationAvgAggregateInputType = {
    tourId?: true
    destinationId?: true
  }

  export type TourToDestinationSumAggregateInputType = {
    tourId?: true
    destinationId?: true
  }

  export type TourToDestinationMinAggregateInputType = {
    tourId?: true
    destinationId?: true
  }

  export type TourToDestinationMaxAggregateInputType = {
    tourId?: true
    destinationId?: true
  }

  export type TourToDestinationCountAggregateInputType = {
    tourId?: true
    destinationId?: true
    _all?: true
  }

  export type TourToDestinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourToDestination to aggregate.
     */
    where?: TourToDestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourToDestinations to fetch.
     */
    orderBy?: TourToDestinationOrderByWithRelationInput | TourToDestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourToDestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourToDestinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourToDestinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourToDestinations
    **/
    _count?: true | TourToDestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourToDestinationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourToDestinationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourToDestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourToDestinationMaxAggregateInputType
  }

  export type GetTourToDestinationAggregateType<T extends TourToDestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateTourToDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourToDestination[P]>
      : GetScalarType<T[P], AggregateTourToDestination[P]>
  }




  export type TourToDestinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourToDestinationWhereInput
    orderBy?: TourToDestinationOrderByWithAggregationInput | TourToDestinationOrderByWithAggregationInput[]
    by: TourToDestinationScalarFieldEnum[] | TourToDestinationScalarFieldEnum
    having?: TourToDestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourToDestinationCountAggregateInputType | true
    _avg?: TourToDestinationAvgAggregateInputType
    _sum?: TourToDestinationSumAggregateInputType
    _min?: TourToDestinationMinAggregateInputType
    _max?: TourToDestinationMaxAggregateInputType
  }

  export type TourToDestinationGroupByOutputType = {
    tourId: number
    destinationId: number
    _count: TourToDestinationCountAggregateOutputType | null
    _avg: TourToDestinationAvgAggregateOutputType | null
    _sum: TourToDestinationSumAggregateOutputType | null
    _min: TourToDestinationMinAggregateOutputType | null
    _max: TourToDestinationMaxAggregateOutputType | null
  }

  type GetTourToDestinationGroupByPayload<T extends TourToDestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourToDestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourToDestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourToDestinationGroupByOutputType[P]>
            : GetScalarType<T[P], TourToDestinationGroupByOutputType[P]>
        }
      >
    >


  export type TourToDestinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tourId?: boolean
    destinationId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourToDestination"]>

  export type TourToDestinationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tourId?: boolean
    destinationId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourToDestination"]>

  export type TourToDestinationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tourId?: boolean
    destinationId?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourToDestination"]>

  export type TourToDestinationSelectScalar = {
    tourId?: boolean
    destinationId?: boolean
  }

  export type TourToDestinationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tourId" | "destinationId", ExtArgs["result"]["tourToDestination"]>
  export type TourToDestinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type TourToDestinationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type TourToDestinationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }

  export type $TourToDestinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourToDestination"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
      destination: Prisma.$DestinationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tourId: number
      destinationId: number
    }, ExtArgs["result"]["tourToDestination"]>
    composites: {}
  }

  type TourToDestinationGetPayload<S extends boolean | null | undefined | TourToDestinationDefaultArgs> = $Result.GetResult<Prisma.$TourToDestinationPayload, S>

  type TourToDestinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourToDestinationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourToDestinationCountAggregateInputType | true
    }

  export interface TourToDestinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourToDestination'], meta: { name: 'TourToDestination' } }
    /**
     * Find zero or one TourToDestination that matches the filter.
     * @param {TourToDestinationFindUniqueArgs} args - Arguments to find a TourToDestination
     * @example
     * // Get one TourToDestination
     * const tourToDestination = await prisma.tourToDestination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourToDestinationFindUniqueArgs>(args: SelectSubset<T, TourToDestinationFindUniqueArgs<ExtArgs>>): Prisma__TourToDestinationClient<$Result.GetResult<Prisma.$TourToDestinationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourToDestination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourToDestinationFindUniqueOrThrowArgs} args - Arguments to find a TourToDestination
     * @example
     * // Get one TourToDestination
     * const tourToDestination = await prisma.tourToDestination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourToDestinationFindUniqueOrThrowArgs>(args: SelectSubset<T, TourToDestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourToDestinationClient<$Result.GetResult<Prisma.$TourToDestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourToDestination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToDestinationFindFirstArgs} args - Arguments to find a TourToDestination
     * @example
     * // Get one TourToDestination
     * const tourToDestination = await prisma.tourToDestination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourToDestinationFindFirstArgs>(args?: SelectSubset<T, TourToDestinationFindFirstArgs<ExtArgs>>): Prisma__TourToDestinationClient<$Result.GetResult<Prisma.$TourToDestinationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourToDestination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToDestinationFindFirstOrThrowArgs} args - Arguments to find a TourToDestination
     * @example
     * // Get one TourToDestination
     * const tourToDestination = await prisma.tourToDestination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourToDestinationFindFirstOrThrowArgs>(args?: SelectSubset<T, TourToDestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourToDestinationClient<$Result.GetResult<Prisma.$TourToDestinationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourToDestinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToDestinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourToDestinations
     * const tourToDestinations = await prisma.tourToDestination.findMany()
     * 
     * // Get first 10 TourToDestinations
     * const tourToDestinations = await prisma.tourToDestination.findMany({ take: 10 })
     * 
     * // Only select the `tourId`
     * const tourToDestinationWithTourIdOnly = await prisma.tourToDestination.findMany({ select: { tourId: true } })
     * 
     */
    findMany<T extends TourToDestinationFindManyArgs>(args?: SelectSubset<T, TourToDestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourToDestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourToDestination.
     * @param {TourToDestinationCreateArgs} args - Arguments to create a TourToDestination.
     * @example
     * // Create one TourToDestination
     * const TourToDestination = await prisma.tourToDestination.create({
     *   data: {
     *     // ... data to create a TourToDestination
     *   }
     * })
     * 
     */
    create<T extends TourToDestinationCreateArgs>(args: SelectSubset<T, TourToDestinationCreateArgs<ExtArgs>>): Prisma__TourToDestinationClient<$Result.GetResult<Prisma.$TourToDestinationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourToDestinations.
     * @param {TourToDestinationCreateManyArgs} args - Arguments to create many TourToDestinations.
     * @example
     * // Create many TourToDestinations
     * const tourToDestination = await prisma.tourToDestination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourToDestinationCreateManyArgs>(args?: SelectSubset<T, TourToDestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourToDestinations and returns the data saved in the database.
     * @param {TourToDestinationCreateManyAndReturnArgs} args - Arguments to create many TourToDestinations.
     * @example
     * // Create many TourToDestinations
     * const tourToDestination = await prisma.tourToDestination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourToDestinations and only return the `tourId`
     * const tourToDestinationWithTourIdOnly = await prisma.tourToDestination.createManyAndReturn({
     *   select: { tourId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourToDestinationCreateManyAndReturnArgs>(args?: SelectSubset<T, TourToDestinationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourToDestinationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourToDestination.
     * @param {TourToDestinationDeleteArgs} args - Arguments to delete one TourToDestination.
     * @example
     * // Delete one TourToDestination
     * const TourToDestination = await prisma.tourToDestination.delete({
     *   where: {
     *     // ... filter to delete one TourToDestination
     *   }
     * })
     * 
     */
    delete<T extends TourToDestinationDeleteArgs>(args: SelectSubset<T, TourToDestinationDeleteArgs<ExtArgs>>): Prisma__TourToDestinationClient<$Result.GetResult<Prisma.$TourToDestinationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourToDestination.
     * @param {TourToDestinationUpdateArgs} args - Arguments to update one TourToDestination.
     * @example
     * // Update one TourToDestination
     * const tourToDestination = await prisma.tourToDestination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourToDestinationUpdateArgs>(args: SelectSubset<T, TourToDestinationUpdateArgs<ExtArgs>>): Prisma__TourToDestinationClient<$Result.GetResult<Prisma.$TourToDestinationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourToDestinations.
     * @param {TourToDestinationDeleteManyArgs} args - Arguments to filter TourToDestinations to delete.
     * @example
     * // Delete a few TourToDestinations
     * const { count } = await prisma.tourToDestination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourToDestinationDeleteManyArgs>(args?: SelectSubset<T, TourToDestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourToDestinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToDestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourToDestinations
     * const tourToDestination = await prisma.tourToDestination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourToDestinationUpdateManyArgs>(args: SelectSubset<T, TourToDestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourToDestinations and returns the data updated in the database.
     * @param {TourToDestinationUpdateManyAndReturnArgs} args - Arguments to update many TourToDestinations.
     * @example
     * // Update many TourToDestinations
     * const tourToDestination = await prisma.tourToDestination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourToDestinations and only return the `tourId`
     * const tourToDestinationWithTourIdOnly = await prisma.tourToDestination.updateManyAndReturn({
     *   select: { tourId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourToDestinationUpdateManyAndReturnArgs>(args: SelectSubset<T, TourToDestinationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourToDestinationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourToDestination.
     * @param {TourToDestinationUpsertArgs} args - Arguments to update or create a TourToDestination.
     * @example
     * // Update or create a TourToDestination
     * const tourToDestination = await prisma.tourToDestination.upsert({
     *   create: {
     *     // ... data to create a TourToDestination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourToDestination we want to update
     *   }
     * })
     */
    upsert<T extends TourToDestinationUpsertArgs>(args: SelectSubset<T, TourToDestinationUpsertArgs<ExtArgs>>): Prisma__TourToDestinationClient<$Result.GetResult<Prisma.$TourToDestinationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourToDestinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToDestinationCountArgs} args - Arguments to filter TourToDestinations to count.
     * @example
     * // Count the number of TourToDestinations
     * const count = await prisma.tourToDestination.count({
     *   where: {
     *     // ... the filter for the TourToDestinations we want to count
     *   }
     * })
    **/
    count<T extends TourToDestinationCountArgs>(
      args?: Subset<T, TourToDestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourToDestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourToDestination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToDestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourToDestinationAggregateArgs>(args: Subset<T, TourToDestinationAggregateArgs>): Prisma.PrismaPromise<GetTourToDestinationAggregateType<T>>

    /**
     * Group by TourToDestination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourToDestinationGroupByArgs} args - Group by arguments.
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
      T extends TourToDestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourToDestinationGroupByArgs['orderBy'] }
        : { orderBy?: TourToDestinationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourToDestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourToDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourToDestination model
   */
  readonly fields: TourToDestinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourToDestination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourToDestinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TourToDestination model
   */
  interface TourToDestinationFieldRefs {
    readonly tourId: FieldRef<"TourToDestination", 'Int'>
    readonly destinationId: FieldRef<"TourToDestination", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TourToDestination findUnique
   */
  export type TourToDestinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationInclude<ExtArgs> | null
    /**
     * Filter, which TourToDestination to fetch.
     */
    where: TourToDestinationWhereUniqueInput
  }

  /**
   * TourToDestination findUniqueOrThrow
   */
  export type TourToDestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationInclude<ExtArgs> | null
    /**
     * Filter, which TourToDestination to fetch.
     */
    where: TourToDestinationWhereUniqueInput
  }

  /**
   * TourToDestination findFirst
   */
  export type TourToDestinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationInclude<ExtArgs> | null
    /**
     * Filter, which TourToDestination to fetch.
     */
    where?: TourToDestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourToDestinations to fetch.
     */
    orderBy?: TourToDestinationOrderByWithRelationInput | TourToDestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourToDestinations.
     */
    cursor?: TourToDestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourToDestinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourToDestinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourToDestinations.
     */
    distinct?: TourToDestinationScalarFieldEnum | TourToDestinationScalarFieldEnum[]
  }

  /**
   * TourToDestination findFirstOrThrow
   */
  export type TourToDestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationInclude<ExtArgs> | null
    /**
     * Filter, which TourToDestination to fetch.
     */
    where?: TourToDestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourToDestinations to fetch.
     */
    orderBy?: TourToDestinationOrderByWithRelationInput | TourToDestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourToDestinations.
     */
    cursor?: TourToDestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourToDestinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourToDestinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourToDestinations.
     */
    distinct?: TourToDestinationScalarFieldEnum | TourToDestinationScalarFieldEnum[]
  }

  /**
   * TourToDestination findMany
   */
  export type TourToDestinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationInclude<ExtArgs> | null
    /**
     * Filter, which TourToDestinations to fetch.
     */
    where?: TourToDestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourToDestinations to fetch.
     */
    orderBy?: TourToDestinationOrderByWithRelationInput | TourToDestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourToDestinations.
     */
    cursor?: TourToDestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourToDestinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourToDestinations.
     */
    skip?: number
    distinct?: TourToDestinationScalarFieldEnum | TourToDestinationScalarFieldEnum[]
  }

  /**
   * TourToDestination create
   */
  export type TourToDestinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a TourToDestination.
     */
    data: XOR<TourToDestinationCreateInput, TourToDestinationUncheckedCreateInput>
  }

  /**
   * TourToDestination createMany
   */
  export type TourToDestinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourToDestinations.
     */
    data: TourToDestinationCreateManyInput | TourToDestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourToDestination createManyAndReturn
   */
  export type TourToDestinationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * The data used to create many TourToDestinations.
     */
    data: TourToDestinationCreateManyInput | TourToDestinationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourToDestination update
   */
  export type TourToDestinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a TourToDestination.
     */
    data: XOR<TourToDestinationUpdateInput, TourToDestinationUncheckedUpdateInput>
    /**
     * Choose, which TourToDestination to update.
     */
    where: TourToDestinationWhereUniqueInput
  }

  /**
   * TourToDestination updateMany
   */
  export type TourToDestinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourToDestinations.
     */
    data: XOR<TourToDestinationUpdateManyMutationInput, TourToDestinationUncheckedUpdateManyInput>
    /**
     * Filter which TourToDestinations to update
     */
    where?: TourToDestinationWhereInput
    /**
     * Limit how many TourToDestinations to update.
     */
    limit?: number
  }

  /**
   * TourToDestination updateManyAndReturn
   */
  export type TourToDestinationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * The data used to update TourToDestinations.
     */
    data: XOR<TourToDestinationUpdateManyMutationInput, TourToDestinationUncheckedUpdateManyInput>
    /**
     * Filter which TourToDestinations to update
     */
    where?: TourToDestinationWhereInput
    /**
     * Limit how many TourToDestinations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourToDestination upsert
   */
  export type TourToDestinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the TourToDestination to update in case it exists.
     */
    where: TourToDestinationWhereUniqueInput
    /**
     * In case the TourToDestination found by the `where` argument doesn't exist, create a new TourToDestination with this data.
     */
    create: XOR<TourToDestinationCreateInput, TourToDestinationUncheckedCreateInput>
    /**
     * In case the TourToDestination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourToDestinationUpdateInput, TourToDestinationUncheckedUpdateInput>
  }

  /**
   * TourToDestination delete
   */
  export type TourToDestinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationInclude<ExtArgs> | null
    /**
     * Filter which TourToDestination to delete.
     */
    where: TourToDestinationWhereUniqueInput
  }

  /**
   * TourToDestination deleteMany
   */
  export type TourToDestinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourToDestinations to delete
     */
    where?: TourToDestinationWhereInput
    /**
     * Limit how many TourToDestinations to delete.
     */
    limit?: number
  }

  /**
   * TourToDestination without action
   */
  export type TourToDestinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourToDestination
     */
    select?: TourToDestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourToDestination
     */
    omit?: TourToDestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourToDestinationInclude<ExtArgs> | null
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


  export const TourScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    reviews_number: 'reviews_number',
    adult_price: 'adult_price',
    child_price: 'child_price',
    infant_price: 'infant_price',
    enabled: 'enabled',
    gallery: 'gallery',
    duration_in_days: 'duration_in_days',
    offer: 'offer',
    offer_end_date: 'offer_end_date',
    start_from: 'start_from',
    rate: 'rate',
    overview_text: 'overview_text',
    title: 'title',
    highlights: 'highlights',
    excluded: 'excluded',
    included: 'included',
    duration: 'duration',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TourScalarFieldEnum = (typeof TourScalarFieldEnum)[keyof typeof TourScalarFieldEnum]


  export const PricingGroupScalarFieldEnum: {
    id: 'id',
    from: 'from',
    to: 'to',
    price: 'price',
    child_price: 'child_price',
    tourId: 'tourId'
  };

  export type PricingGroupScalarFieldEnum = (typeof PricingGroupScalarFieldEnum)[keyof typeof PricingGroupScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const DestinationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DestinationScalarFieldEnum = (typeof DestinationScalarFieldEnum)[keyof typeof DestinationScalarFieldEnum]


  export const TourToCategoryScalarFieldEnum: {
    tourId: 'tourId',
    categoryId: 'categoryId'
  };

  export type TourToCategoryScalarFieldEnum = (typeof TourToCategoryScalarFieldEnum)[keyof typeof TourToCategoryScalarFieldEnum]


  export const TourToDestinationScalarFieldEnum: {
    tourId: 'tourId',
    destinationId: 'destinationId'
  };

  export type TourToDestinationScalarFieldEnum = (typeof TourToDestinationScalarFieldEnum)[keyof typeof TourToDestinationScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type TourWhereInput = {
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    id?: IntFilter<"Tour"> | number
    slug?: StringFilter<"Tour"> | string
    reviews_number?: IntFilter<"Tour"> | number
    adult_price?: FloatFilter<"Tour"> | number
    child_price?: FloatFilter<"Tour"> | number
    infant_price?: FloatFilter<"Tour"> | number
    enabled?: BoolFilter<"Tour"> | boolean
    gallery?: StringNullableListFilter<"Tour">
    duration_in_days?: IntFilter<"Tour"> | number
    offer?: FloatFilter<"Tour"> | number
    offer_end_date?: DateTimeNullableFilter<"Tour"> | Date | string | null
    start_from?: FloatFilter<"Tour"> | number
    rate?: FloatFilter<"Tour"> | number
    overview_text?: StringFilter<"Tour"> | string
    title?: StringFilter<"Tour"> | string
    highlights?: StringNullableListFilter<"Tour">
    excluded?: StringNullableListFilter<"Tour">
    included?: StringNullableListFilter<"Tour">
    duration?: StringFilter<"Tour"> | string
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
    pricing_groups?: PricingGroupListRelationFilter
    categories?: TourToCategoryListRelationFilter
    destinations?: TourToDestinationListRelationFilter
  }

  export type TourOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    reviews_number?: SortOrder
    adult_price?: SortOrder
    child_price?: SortOrder
    infant_price?: SortOrder
    enabled?: SortOrder
    gallery?: SortOrder
    duration_in_days?: SortOrder
    offer?: SortOrder
    offer_end_date?: SortOrderInput | SortOrder
    start_from?: SortOrder
    rate?: SortOrder
    overview_text?: SortOrder
    title?: SortOrder
    highlights?: SortOrder
    excluded?: SortOrder
    included?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pricing_groups?: PricingGroupOrderByRelationAggregateInput
    categories?: TourToCategoryOrderByRelationAggregateInput
    destinations?: TourToDestinationOrderByRelationAggregateInput
  }

  export type TourWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    reviews_number?: IntFilter<"Tour"> | number
    adult_price?: FloatFilter<"Tour"> | number
    child_price?: FloatFilter<"Tour"> | number
    infant_price?: FloatFilter<"Tour"> | number
    enabled?: BoolFilter<"Tour"> | boolean
    gallery?: StringNullableListFilter<"Tour">
    duration_in_days?: IntFilter<"Tour"> | number
    offer?: FloatFilter<"Tour"> | number
    offer_end_date?: DateTimeNullableFilter<"Tour"> | Date | string | null
    start_from?: FloatFilter<"Tour"> | number
    rate?: FloatFilter<"Tour"> | number
    overview_text?: StringFilter<"Tour"> | string
    title?: StringFilter<"Tour"> | string
    highlights?: StringNullableListFilter<"Tour">
    excluded?: StringNullableListFilter<"Tour">
    included?: StringNullableListFilter<"Tour">
    duration?: StringFilter<"Tour"> | string
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
    pricing_groups?: PricingGroupListRelationFilter
    categories?: TourToCategoryListRelationFilter
    destinations?: TourToDestinationListRelationFilter
  }, "id" | "slug">

  export type TourOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    reviews_number?: SortOrder
    adult_price?: SortOrder
    child_price?: SortOrder
    infant_price?: SortOrder
    enabled?: SortOrder
    gallery?: SortOrder
    duration_in_days?: SortOrder
    offer?: SortOrder
    offer_end_date?: SortOrderInput | SortOrder
    start_from?: SortOrder
    rate?: SortOrder
    overview_text?: SortOrder
    title?: SortOrder
    highlights?: SortOrder
    excluded?: SortOrder
    included?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TourCountOrderByAggregateInput
    _avg?: TourAvgOrderByAggregateInput
    _max?: TourMaxOrderByAggregateInput
    _min?: TourMinOrderByAggregateInput
    _sum?: TourSumOrderByAggregateInput
  }

  export type TourScalarWhereWithAggregatesInput = {
    AND?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    OR?: TourScalarWhereWithAggregatesInput[]
    NOT?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tour"> | number
    slug?: StringWithAggregatesFilter<"Tour"> | string
    reviews_number?: IntWithAggregatesFilter<"Tour"> | number
    adult_price?: FloatWithAggregatesFilter<"Tour"> | number
    child_price?: FloatWithAggregatesFilter<"Tour"> | number
    infant_price?: FloatWithAggregatesFilter<"Tour"> | number
    enabled?: BoolWithAggregatesFilter<"Tour"> | boolean
    gallery?: StringNullableListFilter<"Tour">
    duration_in_days?: IntWithAggregatesFilter<"Tour"> | number
    offer?: FloatWithAggregatesFilter<"Tour"> | number
    offer_end_date?: DateTimeNullableWithAggregatesFilter<"Tour"> | Date | string | null
    start_from?: FloatWithAggregatesFilter<"Tour"> | number
    rate?: FloatWithAggregatesFilter<"Tour"> | number
    overview_text?: StringWithAggregatesFilter<"Tour"> | string
    title?: StringWithAggregatesFilter<"Tour"> | string
    highlights?: StringNullableListFilter<"Tour">
    excluded?: StringNullableListFilter<"Tour">
    included?: StringNullableListFilter<"Tour">
    duration?: StringWithAggregatesFilter<"Tour"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tour"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tour"> | Date | string
  }

  export type PricingGroupWhereInput = {
    AND?: PricingGroupWhereInput | PricingGroupWhereInput[]
    OR?: PricingGroupWhereInput[]
    NOT?: PricingGroupWhereInput | PricingGroupWhereInput[]
    id?: IntFilter<"PricingGroup"> | number
    from?: IntFilter<"PricingGroup"> | number
    to?: IntFilter<"PricingGroup"> | number
    price?: FloatFilter<"PricingGroup"> | number
    child_price?: FloatFilter<"PricingGroup"> | number
    tourId?: IntFilter<"PricingGroup"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type PricingGroupOrderByWithRelationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    price?: SortOrder
    child_price?: SortOrder
    tourId?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type PricingGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PricingGroupWhereInput | PricingGroupWhereInput[]
    OR?: PricingGroupWhereInput[]
    NOT?: PricingGroupWhereInput | PricingGroupWhereInput[]
    from?: IntFilter<"PricingGroup"> | number
    to?: IntFilter<"PricingGroup"> | number
    price?: FloatFilter<"PricingGroup"> | number
    child_price?: FloatFilter<"PricingGroup"> | number
    tourId?: IntFilter<"PricingGroup"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type PricingGroupOrderByWithAggregationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    price?: SortOrder
    child_price?: SortOrder
    tourId?: SortOrder
    _count?: PricingGroupCountOrderByAggregateInput
    _avg?: PricingGroupAvgOrderByAggregateInput
    _max?: PricingGroupMaxOrderByAggregateInput
    _min?: PricingGroupMinOrderByAggregateInput
    _sum?: PricingGroupSumOrderByAggregateInput
  }

  export type PricingGroupScalarWhereWithAggregatesInput = {
    AND?: PricingGroupScalarWhereWithAggregatesInput | PricingGroupScalarWhereWithAggregatesInput[]
    OR?: PricingGroupScalarWhereWithAggregatesInput[]
    NOT?: PricingGroupScalarWhereWithAggregatesInput | PricingGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PricingGroup"> | number
    from?: IntWithAggregatesFilter<"PricingGroup"> | number
    to?: IntWithAggregatesFilter<"PricingGroup"> | number
    price?: FloatWithAggregatesFilter<"PricingGroup"> | number
    child_price?: FloatWithAggregatesFilter<"PricingGroup"> | number
    tourId?: IntWithAggregatesFilter<"PricingGroup"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    title?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    tours?: TourToCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tours?: TourToCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    tours?: TourToCategoryListRelationFilter
  }, "id" | "title" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    title?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type DestinationWhereInput = {
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    id?: IntFilter<"Destination"> | number
    title?: StringFilter<"Destination"> | string
    slug?: StringFilter<"Destination"> | string
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    tours?: TourToDestinationListRelationFilter
  }

  export type DestinationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tours?: TourToDestinationOrderByRelationAggregateInput
  }

  export type DestinationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    slug?: string
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    tours?: TourToDestinationListRelationFilter
  }, "id" | "title" | "slug">

  export type DestinationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DestinationCountOrderByAggregateInput
    _avg?: DestinationAvgOrderByAggregateInput
    _max?: DestinationMaxOrderByAggregateInput
    _min?: DestinationMinOrderByAggregateInput
    _sum?: DestinationSumOrderByAggregateInput
  }

  export type DestinationScalarWhereWithAggregatesInput = {
    AND?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    OR?: DestinationScalarWhereWithAggregatesInput[]
    NOT?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Destination"> | number
    title?: StringWithAggregatesFilter<"Destination"> | string
    slug?: StringWithAggregatesFilter<"Destination"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
  }

  export type TourToCategoryWhereInput = {
    AND?: TourToCategoryWhereInput | TourToCategoryWhereInput[]
    OR?: TourToCategoryWhereInput[]
    NOT?: TourToCategoryWhereInput | TourToCategoryWhereInput[]
    tourId?: IntFilter<"TourToCategory"> | number
    categoryId?: IntFilter<"TourToCategory"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type TourToCategoryOrderByWithRelationInput = {
    tourId?: SortOrder
    categoryId?: SortOrder
    tour?: TourOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type TourToCategoryWhereUniqueInput = Prisma.AtLeast<{
    tourId_categoryId?: TourToCategoryTourIdCategoryIdCompoundUniqueInput
    AND?: TourToCategoryWhereInput | TourToCategoryWhereInput[]
    OR?: TourToCategoryWhereInput[]
    NOT?: TourToCategoryWhereInput | TourToCategoryWhereInput[]
    tourId?: IntFilter<"TourToCategory"> | number
    categoryId?: IntFilter<"TourToCategory"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "tourId_categoryId">

  export type TourToCategoryOrderByWithAggregationInput = {
    tourId?: SortOrder
    categoryId?: SortOrder
    _count?: TourToCategoryCountOrderByAggregateInput
    _avg?: TourToCategoryAvgOrderByAggregateInput
    _max?: TourToCategoryMaxOrderByAggregateInput
    _min?: TourToCategoryMinOrderByAggregateInput
    _sum?: TourToCategorySumOrderByAggregateInput
  }

  export type TourToCategoryScalarWhereWithAggregatesInput = {
    AND?: TourToCategoryScalarWhereWithAggregatesInput | TourToCategoryScalarWhereWithAggregatesInput[]
    OR?: TourToCategoryScalarWhereWithAggregatesInput[]
    NOT?: TourToCategoryScalarWhereWithAggregatesInput | TourToCategoryScalarWhereWithAggregatesInput[]
    tourId?: IntWithAggregatesFilter<"TourToCategory"> | number
    categoryId?: IntWithAggregatesFilter<"TourToCategory"> | number
  }

  export type TourToDestinationWhereInput = {
    AND?: TourToDestinationWhereInput | TourToDestinationWhereInput[]
    OR?: TourToDestinationWhereInput[]
    NOT?: TourToDestinationWhereInput | TourToDestinationWhereInput[]
    tourId?: IntFilter<"TourToDestination"> | number
    destinationId?: IntFilter<"TourToDestination"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }

  export type TourToDestinationOrderByWithRelationInput = {
    tourId?: SortOrder
    destinationId?: SortOrder
    tour?: TourOrderByWithRelationInput
    destination?: DestinationOrderByWithRelationInput
  }

  export type TourToDestinationWhereUniqueInput = Prisma.AtLeast<{
    tourId_destinationId?: TourToDestinationTourIdDestinationIdCompoundUniqueInput
    AND?: TourToDestinationWhereInput | TourToDestinationWhereInput[]
    OR?: TourToDestinationWhereInput[]
    NOT?: TourToDestinationWhereInput | TourToDestinationWhereInput[]
    tourId?: IntFilter<"TourToDestination"> | number
    destinationId?: IntFilter<"TourToDestination"> | number
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }, "tourId_destinationId">

  export type TourToDestinationOrderByWithAggregationInput = {
    tourId?: SortOrder
    destinationId?: SortOrder
    _count?: TourToDestinationCountOrderByAggregateInput
    _avg?: TourToDestinationAvgOrderByAggregateInput
    _max?: TourToDestinationMaxOrderByAggregateInput
    _min?: TourToDestinationMinOrderByAggregateInput
    _sum?: TourToDestinationSumOrderByAggregateInput
  }

  export type TourToDestinationScalarWhereWithAggregatesInput = {
    AND?: TourToDestinationScalarWhereWithAggregatesInput | TourToDestinationScalarWhereWithAggregatesInput[]
    OR?: TourToDestinationScalarWhereWithAggregatesInput[]
    NOT?: TourToDestinationScalarWhereWithAggregatesInput | TourToDestinationScalarWhereWithAggregatesInput[]
    tourId?: IntWithAggregatesFilter<"TourToDestination"> | number
    destinationId?: IntWithAggregatesFilter<"TourToDestination"> | number
  }

  export type TourCreateInput = {
    slug: string
    reviews_number?: number
    adult_price: number
    child_price: number
    infant_price?: number
    enabled?: boolean
    gallery?: TourCreategalleryInput | string[]
    duration_in_days: number
    offer?: number
    offer_end_date?: Date | string | null
    start_from: number
    rate?: number
    overview_text: string
    title: string
    highlights?: TourCreatehighlightsInput | string[]
    excluded?: TourCreateexcludedInput | string[]
    included?: TourCreateincludedInput | string[]
    duration: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricing_groups?: PricingGroupCreateNestedManyWithoutTourInput
    categories?: TourToCategoryCreateNestedManyWithoutTourInput
    destinations?: TourToDestinationCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateInput = {
    id?: number
    slug: string
    reviews_number?: number
    adult_price: number
    child_price: number
    infant_price?: number
    enabled?: boolean
    gallery?: TourCreategalleryInput | string[]
    duration_in_days: number
    offer?: number
    offer_end_date?: Date | string | null
    start_from: number
    rate?: number
    overview_text: string
    title: string
    highlights?: TourCreatehighlightsInput | string[]
    excluded?: TourCreateexcludedInput | string[]
    included?: TourCreateincludedInput | string[]
    duration: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricing_groups?: PricingGroupUncheckedCreateNestedManyWithoutTourInput
    categories?: TourToCategoryUncheckedCreateNestedManyWithoutTourInput
    destinations?: TourToDestinationUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    reviews_number?: IntFieldUpdateOperationsInput | number
    adult_price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
    infant_price?: FloatFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gallery?: TourUpdategalleryInput | string[]
    duration_in_days?: IntFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    offer_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_from?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    overview_text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlights?: TourUpdatehighlightsInput | string[]
    excluded?: TourUpdateexcludedInput | string[]
    included?: TourUpdateincludedInput | string[]
    duration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_groups?: PricingGroupUpdateManyWithoutTourNestedInput
    categories?: TourToCategoryUpdateManyWithoutTourNestedInput
    destinations?: TourToDestinationUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    reviews_number?: IntFieldUpdateOperationsInput | number
    adult_price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
    infant_price?: FloatFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gallery?: TourUpdategalleryInput | string[]
    duration_in_days?: IntFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    offer_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_from?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    overview_text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlights?: TourUpdatehighlightsInput | string[]
    excluded?: TourUpdateexcludedInput | string[]
    included?: TourUpdateincludedInput | string[]
    duration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_groups?: PricingGroupUncheckedUpdateManyWithoutTourNestedInput
    categories?: TourToCategoryUncheckedUpdateManyWithoutTourNestedInput
    destinations?: TourToDestinationUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateManyInput = {
    id?: number
    slug: string
    reviews_number?: number
    adult_price: number
    child_price: number
    infant_price?: number
    enabled?: boolean
    gallery?: TourCreategalleryInput | string[]
    duration_in_days: number
    offer?: number
    offer_end_date?: Date | string | null
    start_from: number
    rate?: number
    overview_text: string
    title: string
    highlights?: TourCreatehighlightsInput | string[]
    excluded?: TourCreateexcludedInput | string[]
    included?: TourCreateincludedInput | string[]
    duration: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    reviews_number?: IntFieldUpdateOperationsInput | number
    adult_price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
    infant_price?: FloatFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gallery?: TourUpdategalleryInput | string[]
    duration_in_days?: IntFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    offer_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_from?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    overview_text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlights?: TourUpdatehighlightsInput | string[]
    excluded?: TourUpdateexcludedInput | string[]
    included?: TourUpdateincludedInput | string[]
    duration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    reviews_number?: IntFieldUpdateOperationsInput | number
    adult_price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
    infant_price?: FloatFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gallery?: TourUpdategalleryInput | string[]
    duration_in_days?: IntFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    offer_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_from?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    overview_text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlights?: TourUpdatehighlightsInput | string[]
    excluded?: TourUpdateexcludedInput | string[]
    included?: TourUpdateincludedInput | string[]
    duration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingGroupCreateInput = {
    from: number
    to: number
    price: number
    child_price: number
    tour: TourCreateNestedOneWithoutPricing_groupsInput
  }

  export type PricingGroupUncheckedCreateInput = {
    id?: number
    from: number
    to: number
    price: number
    child_price: number
    tourId: number
  }

  export type PricingGroupUpdateInput = {
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
    tour?: TourUpdateOneRequiredWithoutPricing_groupsNestedInput
  }

  export type PricingGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
  }

  export type PricingGroupCreateManyInput = {
    id?: number
    from: number
    to: number
    price: number
    child_price: number
    tourId: number
  }

  export type PricingGroupUpdateManyMutationInput = {
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
  }

  export type PricingGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tours?: TourToCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tours?: TourToCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tours?: TourToCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tours?: TourToCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCreateInput = {
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tours?: TourToDestinationCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tours?: TourToDestinationUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tours?: TourToDestinationUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tours?: TourToDestinationUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateManyInput = {
    id?: number
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourToCategoryCreateInput = {
    tour: TourCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutToursInput
  }

  export type TourToCategoryUncheckedCreateInput = {
    tourId: number
    categoryId: number
  }

  export type TourToCategoryUpdateInput = {
    tour?: TourUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutToursNestedInput
  }

  export type TourToCategoryUncheckedUpdateInput = {
    tourId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TourToCategoryCreateManyInput = {
    tourId: number
    categoryId: number
  }

  export type TourToCategoryUpdateManyMutationInput = {

  }

  export type TourToCategoryUncheckedUpdateManyInput = {
    tourId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TourToDestinationCreateInput = {
    tour: TourCreateNestedOneWithoutDestinationsInput
    destination: DestinationCreateNestedOneWithoutToursInput
  }

  export type TourToDestinationUncheckedCreateInput = {
    tourId: number
    destinationId: number
  }

  export type TourToDestinationUpdateInput = {
    tour?: TourUpdateOneRequiredWithoutDestinationsNestedInput
    destination?: DestinationUpdateOneRequiredWithoutToursNestedInput
  }

  export type TourToDestinationUncheckedUpdateInput = {
    tourId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type TourToDestinationCreateManyInput = {
    tourId: number
    destinationId: number
  }

  export type TourToDestinationUpdateManyMutationInput = {

  }

  export type TourToDestinationUncheckedUpdateManyInput = {
    tourId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type PricingGroupListRelationFilter = {
    every?: PricingGroupWhereInput
    some?: PricingGroupWhereInput
    none?: PricingGroupWhereInput
  }

  export type TourToCategoryListRelationFilter = {
    every?: TourToCategoryWhereInput
    some?: TourToCategoryWhereInput
    none?: TourToCategoryWhereInput
  }

  export type TourToDestinationListRelationFilter = {
    every?: TourToDestinationWhereInput
    some?: TourToDestinationWhereInput
    none?: TourToDestinationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PricingGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourToCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourToDestinationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    reviews_number?: SortOrder
    adult_price?: SortOrder
    child_price?: SortOrder
    infant_price?: SortOrder
    enabled?: SortOrder
    gallery?: SortOrder
    duration_in_days?: SortOrder
    offer?: SortOrder
    offer_end_date?: SortOrder
    start_from?: SortOrder
    rate?: SortOrder
    overview_text?: SortOrder
    title?: SortOrder
    highlights?: SortOrder
    excluded?: SortOrder
    included?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourAvgOrderByAggregateInput = {
    id?: SortOrder
    reviews_number?: SortOrder
    adult_price?: SortOrder
    child_price?: SortOrder
    infant_price?: SortOrder
    duration_in_days?: SortOrder
    offer?: SortOrder
    start_from?: SortOrder
    rate?: SortOrder
  }

  export type TourMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    reviews_number?: SortOrder
    adult_price?: SortOrder
    child_price?: SortOrder
    infant_price?: SortOrder
    enabled?: SortOrder
    duration_in_days?: SortOrder
    offer?: SortOrder
    offer_end_date?: SortOrder
    start_from?: SortOrder
    rate?: SortOrder
    overview_text?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    reviews_number?: SortOrder
    adult_price?: SortOrder
    child_price?: SortOrder
    infant_price?: SortOrder
    enabled?: SortOrder
    duration_in_days?: SortOrder
    offer?: SortOrder
    offer_end_date?: SortOrder
    start_from?: SortOrder
    rate?: SortOrder
    overview_text?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourSumOrderByAggregateInput = {
    id?: SortOrder
    reviews_number?: SortOrder
    adult_price?: SortOrder
    child_price?: SortOrder
    infant_price?: SortOrder
    duration_in_days?: SortOrder
    offer?: SortOrder
    start_from?: SortOrder
    rate?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TourScalarRelationFilter = {
    is?: TourWhereInput
    isNot?: TourWhereInput
  }

  export type PricingGroupCountOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    price?: SortOrder
    child_price?: SortOrder
    tourId?: SortOrder
  }

  export type PricingGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    price?: SortOrder
    child_price?: SortOrder
    tourId?: SortOrder
  }

  export type PricingGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    price?: SortOrder
    child_price?: SortOrder
    tourId?: SortOrder
  }

  export type PricingGroupMinOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    price?: SortOrder
    child_price?: SortOrder
    tourId?: SortOrder
  }

  export type PricingGroupSumOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    price?: SortOrder
    child_price?: SortOrder
    tourId?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DestinationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DestinationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type TourToCategoryTourIdCategoryIdCompoundUniqueInput = {
    tourId: number
    categoryId: number
  }

  export type TourToCategoryCountOrderByAggregateInput = {
    tourId?: SortOrder
    categoryId?: SortOrder
  }

  export type TourToCategoryAvgOrderByAggregateInput = {
    tourId?: SortOrder
    categoryId?: SortOrder
  }

  export type TourToCategoryMaxOrderByAggregateInput = {
    tourId?: SortOrder
    categoryId?: SortOrder
  }

  export type TourToCategoryMinOrderByAggregateInput = {
    tourId?: SortOrder
    categoryId?: SortOrder
  }

  export type TourToCategorySumOrderByAggregateInput = {
    tourId?: SortOrder
    categoryId?: SortOrder
  }

  export type DestinationScalarRelationFilter = {
    is?: DestinationWhereInput
    isNot?: DestinationWhereInput
  }

  export type TourToDestinationTourIdDestinationIdCompoundUniqueInput = {
    tourId: number
    destinationId: number
  }

  export type TourToDestinationCountOrderByAggregateInput = {
    tourId?: SortOrder
    destinationId?: SortOrder
  }

  export type TourToDestinationAvgOrderByAggregateInput = {
    tourId?: SortOrder
    destinationId?: SortOrder
  }

  export type TourToDestinationMaxOrderByAggregateInput = {
    tourId?: SortOrder
    destinationId?: SortOrder
  }

  export type TourToDestinationMinOrderByAggregateInput = {
    tourId?: SortOrder
    destinationId?: SortOrder
  }

  export type TourToDestinationSumOrderByAggregateInput = {
    tourId?: SortOrder
    destinationId?: SortOrder
  }

  export type TourCreategalleryInput = {
    set: string[]
  }

  export type TourCreatehighlightsInput = {
    set: string[]
  }

  export type TourCreateexcludedInput = {
    set: string[]
  }

  export type TourCreateincludedInput = {
    set: string[]
  }

  export type PricingGroupCreateNestedManyWithoutTourInput = {
    create?: XOR<PricingGroupCreateWithoutTourInput, PricingGroupUncheckedCreateWithoutTourInput> | PricingGroupCreateWithoutTourInput[] | PricingGroupUncheckedCreateWithoutTourInput[]
    connectOrCreate?: PricingGroupCreateOrConnectWithoutTourInput | PricingGroupCreateOrConnectWithoutTourInput[]
    createMany?: PricingGroupCreateManyTourInputEnvelope
    connect?: PricingGroupWhereUniqueInput | PricingGroupWhereUniqueInput[]
  }

  export type TourToCategoryCreateNestedManyWithoutTourInput = {
    create?: XOR<TourToCategoryCreateWithoutTourInput, TourToCategoryUncheckedCreateWithoutTourInput> | TourToCategoryCreateWithoutTourInput[] | TourToCategoryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourToCategoryCreateOrConnectWithoutTourInput | TourToCategoryCreateOrConnectWithoutTourInput[]
    createMany?: TourToCategoryCreateManyTourInputEnvelope
    connect?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
  }

  export type TourToDestinationCreateNestedManyWithoutTourInput = {
    create?: XOR<TourToDestinationCreateWithoutTourInput, TourToDestinationUncheckedCreateWithoutTourInput> | TourToDestinationCreateWithoutTourInput[] | TourToDestinationUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourToDestinationCreateOrConnectWithoutTourInput | TourToDestinationCreateOrConnectWithoutTourInput[]
    createMany?: TourToDestinationCreateManyTourInputEnvelope
    connect?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
  }

  export type PricingGroupUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<PricingGroupCreateWithoutTourInput, PricingGroupUncheckedCreateWithoutTourInput> | PricingGroupCreateWithoutTourInput[] | PricingGroupUncheckedCreateWithoutTourInput[]
    connectOrCreate?: PricingGroupCreateOrConnectWithoutTourInput | PricingGroupCreateOrConnectWithoutTourInput[]
    createMany?: PricingGroupCreateManyTourInputEnvelope
    connect?: PricingGroupWhereUniqueInput | PricingGroupWhereUniqueInput[]
  }

  export type TourToCategoryUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TourToCategoryCreateWithoutTourInput, TourToCategoryUncheckedCreateWithoutTourInput> | TourToCategoryCreateWithoutTourInput[] | TourToCategoryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourToCategoryCreateOrConnectWithoutTourInput | TourToCategoryCreateOrConnectWithoutTourInput[]
    createMany?: TourToCategoryCreateManyTourInputEnvelope
    connect?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
  }

  export type TourToDestinationUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TourToDestinationCreateWithoutTourInput, TourToDestinationUncheckedCreateWithoutTourInput> | TourToDestinationCreateWithoutTourInput[] | TourToDestinationUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourToDestinationCreateOrConnectWithoutTourInput | TourToDestinationCreateOrConnectWithoutTourInput[]
    createMany?: TourToDestinationCreateManyTourInputEnvelope
    connect?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TourUpdategalleryInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TourUpdatehighlightsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TourUpdateexcludedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TourUpdateincludedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PricingGroupUpdateManyWithoutTourNestedInput = {
    create?: XOR<PricingGroupCreateWithoutTourInput, PricingGroupUncheckedCreateWithoutTourInput> | PricingGroupCreateWithoutTourInput[] | PricingGroupUncheckedCreateWithoutTourInput[]
    connectOrCreate?: PricingGroupCreateOrConnectWithoutTourInput | PricingGroupCreateOrConnectWithoutTourInput[]
    upsert?: PricingGroupUpsertWithWhereUniqueWithoutTourInput | PricingGroupUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: PricingGroupCreateManyTourInputEnvelope
    set?: PricingGroupWhereUniqueInput | PricingGroupWhereUniqueInput[]
    disconnect?: PricingGroupWhereUniqueInput | PricingGroupWhereUniqueInput[]
    delete?: PricingGroupWhereUniqueInput | PricingGroupWhereUniqueInput[]
    connect?: PricingGroupWhereUniqueInput | PricingGroupWhereUniqueInput[]
    update?: PricingGroupUpdateWithWhereUniqueWithoutTourInput | PricingGroupUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: PricingGroupUpdateManyWithWhereWithoutTourInput | PricingGroupUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: PricingGroupScalarWhereInput | PricingGroupScalarWhereInput[]
  }

  export type TourToCategoryUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourToCategoryCreateWithoutTourInput, TourToCategoryUncheckedCreateWithoutTourInput> | TourToCategoryCreateWithoutTourInput[] | TourToCategoryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourToCategoryCreateOrConnectWithoutTourInput | TourToCategoryCreateOrConnectWithoutTourInput[]
    upsert?: TourToCategoryUpsertWithWhereUniqueWithoutTourInput | TourToCategoryUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourToCategoryCreateManyTourInputEnvelope
    set?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    disconnect?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    delete?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    connect?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    update?: TourToCategoryUpdateWithWhereUniqueWithoutTourInput | TourToCategoryUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourToCategoryUpdateManyWithWhereWithoutTourInput | TourToCategoryUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourToCategoryScalarWhereInput | TourToCategoryScalarWhereInput[]
  }

  export type TourToDestinationUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourToDestinationCreateWithoutTourInput, TourToDestinationUncheckedCreateWithoutTourInput> | TourToDestinationCreateWithoutTourInput[] | TourToDestinationUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourToDestinationCreateOrConnectWithoutTourInput | TourToDestinationCreateOrConnectWithoutTourInput[]
    upsert?: TourToDestinationUpsertWithWhereUniqueWithoutTourInput | TourToDestinationUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourToDestinationCreateManyTourInputEnvelope
    set?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    disconnect?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    delete?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    connect?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    update?: TourToDestinationUpdateWithWhereUniqueWithoutTourInput | TourToDestinationUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourToDestinationUpdateManyWithWhereWithoutTourInput | TourToDestinationUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourToDestinationScalarWhereInput | TourToDestinationScalarWhereInput[]
  }

  export type PricingGroupUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<PricingGroupCreateWithoutTourInput, PricingGroupUncheckedCreateWithoutTourInput> | PricingGroupCreateWithoutTourInput[] | PricingGroupUncheckedCreateWithoutTourInput[]
    connectOrCreate?: PricingGroupCreateOrConnectWithoutTourInput | PricingGroupCreateOrConnectWithoutTourInput[]
    upsert?: PricingGroupUpsertWithWhereUniqueWithoutTourInput | PricingGroupUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: PricingGroupCreateManyTourInputEnvelope
    set?: PricingGroupWhereUniqueInput | PricingGroupWhereUniqueInput[]
    disconnect?: PricingGroupWhereUniqueInput | PricingGroupWhereUniqueInput[]
    delete?: PricingGroupWhereUniqueInput | PricingGroupWhereUniqueInput[]
    connect?: PricingGroupWhereUniqueInput | PricingGroupWhereUniqueInput[]
    update?: PricingGroupUpdateWithWhereUniqueWithoutTourInput | PricingGroupUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: PricingGroupUpdateManyWithWhereWithoutTourInput | PricingGroupUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: PricingGroupScalarWhereInput | PricingGroupScalarWhereInput[]
  }

  export type TourToCategoryUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourToCategoryCreateWithoutTourInput, TourToCategoryUncheckedCreateWithoutTourInput> | TourToCategoryCreateWithoutTourInput[] | TourToCategoryUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourToCategoryCreateOrConnectWithoutTourInput | TourToCategoryCreateOrConnectWithoutTourInput[]
    upsert?: TourToCategoryUpsertWithWhereUniqueWithoutTourInput | TourToCategoryUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourToCategoryCreateManyTourInputEnvelope
    set?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    disconnect?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    delete?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    connect?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    update?: TourToCategoryUpdateWithWhereUniqueWithoutTourInput | TourToCategoryUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourToCategoryUpdateManyWithWhereWithoutTourInput | TourToCategoryUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourToCategoryScalarWhereInput | TourToCategoryScalarWhereInput[]
  }

  export type TourToDestinationUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourToDestinationCreateWithoutTourInput, TourToDestinationUncheckedCreateWithoutTourInput> | TourToDestinationCreateWithoutTourInput[] | TourToDestinationUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourToDestinationCreateOrConnectWithoutTourInput | TourToDestinationCreateOrConnectWithoutTourInput[]
    upsert?: TourToDestinationUpsertWithWhereUniqueWithoutTourInput | TourToDestinationUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourToDestinationCreateManyTourInputEnvelope
    set?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    disconnect?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    delete?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    connect?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    update?: TourToDestinationUpdateWithWhereUniqueWithoutTourInput | TourToDestinationUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourToDestinationUpdateManyWithWhereWithoutTourInput | TourToDestinationUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourToDestinationScalarWhereInput | TourToDestinationScalarWhereInput[]
  }

  export type TourCreateNestedOneWithoutPricing_groupsInput = {
    create?: XOR<TourCreateWithoutPricing_groupsInput, TourUncheckedCreateWithoutPricing_groupsInput>
    connectOrCreate?: TourCreateOrConnectWithoutPricing_groupsInput
    connect?: TourWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutPricing_groupsNestedInput = {
    create?: XOR<TourCreateWithoutPricing_groupsInput, TourUncheckedCreateWithoutPricing_groupsInput>
    connectOrCreate?: TourCreateOrConnectWithoutPricing_groupsInput
    upsert?: TourUpsertWithoutPricing_groupsInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutPricing_groupsInput, TourUpdateWithoutPricing_groupsInput>, TourUncheckedUpdateWithoutPricing_groupsInput>
  }

  export type TourToCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TourToCategoryCreateWithoutCategoryInput, TourToCategoryUncheckedCreateWithoutCategoryInput> | TourToCategoryCreateWithoutCategoryInput[] | TourToCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TourToCategoryCreateOrConnectWithoutCategoryInput | TourToCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: TourToCategoryCreateManyCategoryInputEnvelope
    connect?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
  }

  export type TourToCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TourToCategoryCreateWithoutCategoryInput, TourToCategoryUncheckedCreateWithoutCategoryInput> | TourToCategoryCreateWithoutCategoryInput[] | TourToCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TourToCategoryCreateOrConnectWithoutCategoryInput | TourToCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: TourToCategoryCreateManyCategoryInputEnvelope
    connect?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
  }

  export type TourToCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TourToCategoryCreateWithoutCategoryInput, TourToCategoryUncheckedCreateWithoutCategoryInput> | TourToCategoryCreateWithoutCategoryInput[] | TourToCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TourToCategoryCreateOrConnectWithoutCategoryInput | TourToCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: TourToCategoryUpsertWithWhereUniqueWithoutCategoryInput | TourToCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TourToCategoryCreateManyCategoryInputEnvelope
    set?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    disconnect?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    delete?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    connect?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    update?: TourToCategoryUpdateWithWhereUniqueWithoutCategoryInput | TourToCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TourToCategoryUpdateManyWithWhereWithoutCategoryInput | TourToCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TourToCategoryScalarWhereInput | TourToCategoryScalarWhereInput[]
  }

  export type TourToCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TourToCategoryCreateWithoutCategoryInput, TourToCategoryUncheckedCreateWithoutCategoryInput> | TourToCategoryCreateWithoutCategoryInput[] | TourToCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TourToCategoryCreateOrConnectWithoutCategoryInput | TourToCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: TourToCategoryUpsertWithWhereUniqueWithoutCategoryInput | TourToCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TourToCategoryCreateManyCategoryInputEnvelope
    set?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    disconnect?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    delete?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    connect?: TourToCategoryWhereUniqueInput | TourToCategoryWhereUniqueInput[]
    update?: TourToCategoryUpdateWithWhereUniqueWithoutCategoryInput | TourToCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TourToCategoryUpdateManyWithWhereWithoutCategoryInput | TourToCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TourToCategoryScalarWhereInput | TourToCategoryScalarWhereInput[]
  }

  export type TourToDestinationCreateNestedManyWithoutDestinationInput = {
    create?: XOR<TourToDestinationCreateWithoutDestinationInput, TourToDestinationUncheckedCreateWithoutDestinationInput> | TourToDestinationCreateWithoutDestinationInput[] | TourToDestinationUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TourToDestinationCreateOrConnectWithoutDestinationInput | TourToDestinationCreateOrConnectWithoutDestinationInput[]
    createMany?: TourToDestinationCreateManyDestinationInputEnvelope
    connect?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
  }

  export type TourToDestinationUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<TourToDestinationCreateWithoutDestinationInput, TourToDestinationUncheckedCreateWithoutDestinationInput> | TourToDestinationCreateWithoutDestinationInput[] | TourToDestinationUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TourToDestinationCreateOrConnectWithoutDestinationInput | TourToDestinationCreateOrConnectWithoutDestinationInput[]
    createMany?: TourToDestinationCreateManyDestinationInputEnvelope
    connect?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
  }

  export type TourToDestinationUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<TourToDestinationCreateWithoutDestinationInput, TourToDestinationUncheckedCreateWithoutDestinationInput> | TourToDestinationCreateWithoutDestinationInput[] | TourToDestinationUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TourToDestinationCreateOrConnectWithoutDestinationInput | TourToDestinationCreateOrConnectWithoutDestinationInput[]
    upsert?: TourToDestinationUpsertWithWhereUniqueWithoutDestinationInput | TourToDestinationUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: TourToDestinationCreateManyDestinationInputEnvelope
    set?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    disconnect?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    delete?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    connect?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    update?: TourToDestinationUpdateWithWhereUniqueWithoutDestinationInput | TourToDestinationUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: TourToDestinationUpdateManyWithWhereWithoutDestinationInput | TourToDestinationUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: TourToDestinationScalarWhereInput | TourToDestinationScalarWhereInput[]
  }

  export type TourToDestinationUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<TourToDestinationCreateWithoutDestinationInput, TourToDestinationUncheckedCreateWithoutDestinationInput> | TourToDestinationCreateWithoutDestinationInput[] | TourToDestinationUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: TourToDestinationCreateOrConnectWithoutDestinationInput | TourToDestinationCreateOrConnectWithoutDestinationInput[]
    upsert?: TourToDestinationUpsertWithWhereUniqueWithoutDestinationInput | TourToDestinationUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: TourToDestinationCreateManyDestinationInputEnvelope
    set?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    disconnect?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    delete?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    connect?: TourToDestinationWhereUniqueInput | TourToDestinationWhereUniqueInput[]
    update?: TourToDestinationUpdateWithWhereUniqueWithoutDestinationInput | TourToDestinationUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: TourToDestinationUpdateManyWithWhereWithoutDestinationInput | TourToDestinationUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: TourToDestinationScalarWhereInput | TourToDestinationScalarWhereInput[]
  }

  export type TourCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<TourCreateWithoutCategoriesInput, TourUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TourCreateOrConnectWithoutCategoriesInput
    connect?: TourWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutToursInput = {
    create?: XOR<CategoryCreateWithoutToursInput, CategoryUncheckedCreateWithoutToursInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutToursInput
    connect?: CategoryWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<TourCreateWithoutCategoriesInput, TourUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TourCreateOrConnectWithoutCategoriesInput
    upsert?: TourUpsertWithoutCategoriesInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutCategoriesInput, TourUpdateWithoutCategoriesInput>, TourUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutToursNestedInput = {
    create?: XOR<CategoryCreateWithoutToursInput, CategoryUncheckedCreateWithoutToursInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutToursInput
    upsert?: CategoryUpsertWithoutToursInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutToursInput, CategoryUpdateWithoutToursInput>, CategoryUncheckedUpdateWithoutToursInput>
  }

  export type TourCreateNestedOneWithoutDestinationsInput = {
    create?: XOR<TourCreateWithoutDestinationsInput, TourUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: TourCreateOrConnectWithoutDestinationsInput
    connect?: TourWhereUniqueInput
  }

  export type DestinationCreateNestedOneWithoutToursInput = {
    create?: XOR<DestinationCreateWithoutToursInput, DestinationUncheckedCreateWithoutToursInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutToursInput
    connect?: DestinationWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutDestinationsNestedInput = {
    create?: XOR<TourCreateWithoutDestinationsInput, TourUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: TourCreateOrConnectWithoutDestinationsInput
    upsert?: TourUpsertWithoutDestinationsInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutDestinationsInput, TourUpdateWithoutDestinationsInput>, TourUncheckedUpdateWithoutDestinationsInput>
  }

  export type DestinationUpdateOneRequiredWithoutToursNestedInput = {
    create?: XOR<DestinationCreateWithoutToursInput, DestinationUncheckedCreateWithoutToursInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutToursInput
    upsert?: DestinationUpsertWithoutToursInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutToursInput, DestinationUpdateWithoutToursInput>, DestinationUncheckedUpdateWithoutToursInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PricingGroupCreateWithoutTourInput = {
    from: number
    to: number
    price: number
    child_price: number
  }

  export type PricingGroupUncheckedCreateWithoutTourInput = {
    id?: number
    from: number
    to: number
    price: number
    child_price: number
  }

  export type PricingGroupCreateOrConnectWithoutTourInput = {
    where: PricingGroupWhereUniqueInput
    create: XOR<PricingGroupCreateWithoutTourInput, PricingGroupUncheckedCreateWithoutTourInput>
  }

  export type PricingGroupCreateManyTourInputEnvelope = {
    data: PricingGroupCreateManyTourInput | PricingGroupCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourToCategoryCreateWithoutTourInput = {
    category: CategoryCreateNestedOneWithoutToursInput
  }

  export type TourToCategoryUncheckedCreateWithoutTourInput = {
    categoryId: number
  }

  export type TourToCategoryCreateOrConnectWithoutTourInput = {
    where: TourToCategoryWhereUniqueInput
    create: XOR<TourToCategoryCreateWithoutTourInput, TourToCategoryUncheckedCreateWithoutTourInput>
  }

  export type TourToCategoryCreateManyTourInputEnvelope = {
    data: TourToCategoryCreateManyTourInput | TourToCategoryCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourToDestinationCreateWithoutTourInput = {
    destination: DestinationCreateNestedOneWithoutToursInput
  }

  export type TourToDestinationUncheckedCreateWithoutTourInput = {
    destinationId: number
  }

  export type TourToDestinationCreateOrConnectWithoutTourInput = {
    where: TourToDestinationWhereUniqueInput
    create: XOR<TourToDestinationCreateWithoutTourInput, TourToDestinationUncheckedCreateWithoutTourInput>
  }

  export type TourToDestinationCreateManyTourInputEnvelope = {
    data: TourToDestinationCreateManyTourInput | TourToDestinationCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type PricingGroupUpsertWithWhereUniqueWithoutTourInput = {
    where: PricingGroupWhereUniqueInput
    update: XOR<PricingGroupUpdateWithoutTourInput, PricingGroupUncheckedUpdateWithoutTourInput>
    create: XOR<PricingGroupCreateWithoutTourInput, PricingGroupUncheckedCreateWithoutTourInput>
  }

  export type PricingGroupUpdateWithWhereUniqueWithoutTourInput = {
    where: PricingGroupWhereUniqueInput
    data: XOR<PricingGroupUpdateWithoutTourInput, PricingGroupUncheckedUpdateWithoutTourInput>
  }

  export type PricingGroupUpdateManyWithWhereWithoutTourInput = {
    where: PricingGroupScalarWhereInput
    data: XOR<PricingGroupUpdateManyMutationInput, PricingGroupUncheckedUpdateManyWithoutTourInput>
  }

  export type PricingGroupScalarWhereInput = {
    AND?: PricingGroupScalarWhereInput | PricingGroupScalarWhereInput[]
    OR?: PricingGroupScalarWhereInput[]
    NOT?: PricingGroupScalarWhereInput | PricingGroupScalarWhereInput[]
    id?: IntFilter<"PricingGroup"> | number
    from?: IntFilter<"PricingGroup"> | number
    to?: IntFilter<"PricingGroup"> | number
    price?: FloatFilter<"PricingGroup"> | number
    child_price?: FloatFilter<"PricingGroup"> | number
    tourId?: IntFilter<"PricingGroup"> | number
  }

  export type TourToCategoryUpsertWithWhereUniqueWithoutTourInput = {
    where: TourToCategoryWhereUniqueInput
    update: XOR<TourToCategoryUpdateWithoutTourInput, TourToCategoryUncheckedUpdateWithoutTourInput>
    create: XOR<TourToCategoryCreateWithoutTourInput, TourToCategoryUncheckedCreateWithoutTourInput>
  }

  export type TourToCategoryUpdateWithWhereUniqueWithoutTourInput = {
    where: TourToCategoryWhereUniqueInput
    data: XOR<TourToCategoryUpdateWithoutTourInput, TourToCategoryUncheckedUpdateWithoutTourInput>
  }

  export type TourToCategoryUpdateManyWithWhereWithoutTourInput = {
    where: TourToCategoryScalarWhereInput
    data: XOR<TourToCategoryUpdateManyMutationInput, TourToCategoryUncheckedUpdateManyWithoutTourInput>
  }

  export type TourToCategoryScalarWhereInput = {
    AND?: TourToCategoryScalarWhereInput | TourToCategoryScalarWhereInput[]
    OR?: TourToCategoryScalarWhereInput[]
    NOT?: TourToCategoryScalarWhereInput | TourToCategoryScalarWhereInput[]
    tourId?: IntFilter<"TourToCategory"> | number
    categoryId?: IntFilter<"TourToCategory"> | number
  }

  export type TourToDestinationUpsertWithWhereUniqueWithoutTourInput = {
    where: TourToDestinationWhereUniqueInput
    update: XOR<TourToDestinationUpdateWithoutTourInput, TourToDestinationUncheckedUpdateWithoutTourInput>
    create: XOR<TourToDestinationCreateWithoutTourInput, TourToDestinationUncheckedCreateWithoutTourInput>
  }

  export type TourToDestinationUpdateWithWhereUniqueWithoutTourInput = {
    where: TourToDestinationWhereUniqueInput
    data: XOR<TourToDestinationUpdateWithoutTourInput, TourToDestinationUncheckedUpdateWithoutTourInput>
  }

  export type TourToDestinationUpdateManyWithWhereWithoutTourInput = {
    where: TourToDestinationScalarWhereInput
    data: XOR<TourToDestinationUpdateManyMutationInput, TourToDestinationUncheckedUpdateManyWithoutTourInput>
  }

  export type TourToDestinationScalarWhereInput = {
    AND?: TourToDestinationScalarWhereInput | TourToDestinationScalarWhereInput[]
    OR?: TourToDestinationScalarWhereInput[]
    NOT?: TourToDestinationScalarWhereInput | TourToDestinationScalarWhereInput[]
    tourId?: IntFilter<"TourToDestination"> | number
    destinationId?: IntFilter<"TourToDestination"> | number
  }

  export type TourCreateWithoutPricing_groupsInput = {
    slug: string
    reviews_number?: number
    adult_price: number
    child_price: number
    infant_price?: number
    enabled?: boolean
    gallery?: TourCreategalleryInput | string[]
    duration_in_days: number
    offer?: number
    offer_end_date?: Date | string | null
    start_from: number
    rate?: number
    overview_text: string
    title: string
    highlights?: TourCreatehighlightsInput | string[]
    excluded?: TourCreateexcludedInput | string[]
    included?: TourCreateincludedInput | string[]
    duration: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: TourToCategoryCreateNestedManyWithoutTourInput
    destinations?: TourToDestinationCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutPricing_groupsInput = {
    id?: number
    slug: string
    reviews_number?: number
    adult_price: number
    child_price: number
    infant_price?: number
    enabled?: boolean
    gallery?: TourCreategalleryInput | string[]
    duration_in_days: number
    offer?: number
    offer_end_date?: Date | string | null
    start_from: number
    rate?: number
    overview_text: string
    title: string
    highlights?: TourCreatehighlightsInput | string[]
    excluded?: TourCreateexcludedInput | string[]
    included?: TourCreateincludedInput | string[]
    duration: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: TourToCategoryUncheckedCreateNestedManyWithoutTourInput
    destinations?: TourToDestinationUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutPricing_groupsInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutPricing_groupsInput, TourUncheckedCreateWithoutPricing_groupsInput>
  }

  export type TourUpsertWithoutPricing_groupsInput = {
    update: XOR<TourUpdateWithoutPricing_groupsInput, TourUncheckedUpdateWithoutPricing_groupsInput>
    create: XOR<TourCreateWithoutPricing_groupsInput, TourUncheckedCreateWithoutPricing_groupsInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutPricing_groupsInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutPricing_groupsInput, TourUncheckedUpdateWithoutPricing_groupsInput>
  }

  export type TourUpdateWithoutPricing_groupsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    reviews_number?: IntFieldUpdateOperationsInput | number
    adult_price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
    infant_price?: FloatFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gallery?: TourUpdategalleryInput | string[]
    duration_in_days?: IntFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    offer_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_from?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    overview_text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlights?: TourUpdatehighlightsInput | string[]
    excluded?: TourUpdateexcludedInput | string[]
    included?: TourUpdateincludedInput | string[]
    duration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: TourToCategoryUpdateManyWithoutTourNestedInput
    destinations?: TourToDestinationUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutPricing_groupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    reviews_number?: IntFieldUpdateOperationsInput | number
    adult_price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
    infant_price?: FloatFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gallery?: TourUpdategalleryInput | string[]
    duration_in_days?: IntFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    offer_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_from?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    overview_text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlights?: TourUpdatehighlightsInput | string[]
    excluded?: TourUpdateexcludedInput | string[]
    included?: TourUpdateincludedInput | string[]
    duration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: TourToCategoryUncheckedUpdateManyWithoutTourNestedInput
    destinations?: TourToDestinationUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourToCategoryCreateWithoutCategoryInput = {
    tour: TourCreateNestedOneWithoutCategoriesInput
  }

  export type TourToCategoryUncheckedCreateWithoutCategoryInput = {
    tourId: number
  }

  export type TourToCategoryCreateOrConnectWithoutCategoryInput = {
    where: TourToCategoryWhereUniqueInput
    create: XOR<TourToCategoryCreateWithoutCategoryInput, TourToCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type TourToCategoryCreateManyCategoryInputEnvelope = {
    data: TourToCategoryCreateManyCategoryInput | TourToCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TourToCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TourToCategoryWhereUniqueInput
    update: XOR<TourToCategoryUpdateWithoutCategoryInput, TourToCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<TourToCategoryCreateWithoutCategoryInput, TourToCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type TourToCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TourToCategoryWhereUniqueInput
    data: XOR<TourToCategoryUpdateWithoutCategoryInput, TourToCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type TourToCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: TourToCategoryScalarWhereInput
    data: XOR<TourToCategoryUpdateManyMutationInput, TourToCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TourToDestinationCreateWithoutDestinationInput = {
    tour: TourCreateNestedOneWithoutDestinationsInput
  }

  export type TourToDestinationUncheckedCreateWithoutDestinationInput = {
    tourId: number
  }

  export type TourToDestinationCreateOrConnectWithoutDestinationInput = {
    where: TourToDestinationWhereUniqueInput
    create: XOR<TourToDestinationCreateWithoutDestinationInput, TourToDestinationUncheckedCreateWithoutDestinationInput>
  }

  export type TourToDestinationCreateManyDestinationInputEnvelope = {
    data: TourToDestinationCreateManyDestinationInput | TourToDestinationCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type TourToDestinationUpsertWithWhereUniqueWithoutDestinationInput = {
    where: TourToDestinationWhereUniqueInput
    update: XOR<TourToDestinationUpdateWithoutDestinationInput, TourToDestinationUncheckedUpdateWithoutDestinationInput>
    create: XOR<TourToDestinationCreateWithoutDestinationInput, TourToDestinationUncheckedCreateWithoutDestinationInput>
  }

  export type TourToDestinationUpdateWithWhereUniqueWithoutDestinationInput = {
    where: TourToDestinationWhereUniqueInput
    data: XOR<TourToDestinationUpdateWithoutDestinationInput, TourToDestinationUncheckedUpdateWithoutDestinationInput>
  }

  export type TourToDestinationUpdateManyWithWhereWithoutDestinationInput = {
    where: TourToDestinationScalarWhereInput
    data: XOR<TourToDestinationUpdateManyMutationInput, TourToDestinationUncheckedUpdateManyWithoutDestinationInput>
  }

  export type TourCreateWithoutCategoriesInput = {
    slug: string
    reviews_number?: number
    adult_price: number
    child_price: number
    infant_price?: number
    enabled?: boolean
    gallery?: TourCreategalleryInput | string[]
    duration_in_days: number
    offer?: number
    offer_end_date?: Date | string | null
    start_from: number
    rate?: number
    overview_text: string
    title: string
    highlights?: TourCreatehighlightsInput | string[]
    excluded?: TourCreateexcludedInput | string[]
    included?: TourCreateincludedInput | string[]
    duration: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricing_groups?: PricingGroupCreateNestedManyWithoutTourInput
    destinations?: TourToDestinationCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutCategoriesInput = {
    id?: number
    slug: string
    reviews_number?: number
    adult_price: number
    child_price: number
    infant_price?: number
    enabled?: boolean
    gallery?: TourCreategalleryInput | string[]
    duration_in_days: number
    offer?: number
    offer_end_date?: Date | string | null
    start_from: number
    rate?: number
    overview_text: string
    title: string
    highlights?: TourCreatehighlightsInput | string[]
    excluded?: TourCreateexcludedInput | string[]
    included?: TourCreateincludedInput | string[]
    duration: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricing_groups?: PricingGroupUncheckedCreateNestedManyWithoutTourInput
    destinations?: TourToDestinationUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutCategoriesInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutCategoriesInput, TourUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutToursInput = {
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutToursInput = {
    id?: number
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutToursInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutToursInput, CategoryUncheckedCreateWithoutToursInput>
  }

  export type TourUpsertWithoutCategoriesInput = {
    update: XOR<TourUpdateWithoutCategoriesInput, TourUncheckedUpdateWithoutCategoriesInput>
    create: XOR<TourCreateWithoutCategoriesInput, TourUncheckedCreateWithoutCategoriesInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutCategoriesInput, TourUncheckedUpdateWithoutCategoriesInput>
  }

  export type TourUpdateWithoutCategoriesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    reviews_number?: IntFieldUpdateOperationsInput | number
    adult_price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
    infant_price?: FloatFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gallery?: TourUpdategalleryInput | string[]
    duration_in_days?: IntFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    offer_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_from?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    overview_text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlights?: TourUpdatehighlightsInput | string[]
    excluded?: TourUpdateexcludedInput | string[]
    included?: TourUpdateincludedInput | string[]
    duration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_groups?: PricingGroupUpdateManyWithoutTourNestedInput
    destinations?: TourToDestinationUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    reviews_number?: IntFieldUpdateOperationsInput | number
    adult_price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
    infant_price?: FloatFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gallery?: TourUpdategalleryInput | string[]
    duration_in_days?: IntFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    offer_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_from?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    overview_text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlights?: TourUpdatehighlightsInput | string[]
    excluded?: TourUpdateexcludedInput | string[]
    included?: TourUpdateincludedInput | string[]
    duration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_groups?: PricingGroupUncheckedUpdateManyWithoutTourNestedInput
    destinations?: TourToDestinationUncheckedUpdateManyWithoutTourNestedInput
  }

  export type CategoryUpsertWithoutToursInput = {
    update: XOR<CategoryUpdateWithoutToursInput, CategoryUncheckedUpdateWithoutToursInput>
    create: XOR<CategoryCreateWithoutToursInput, CategoryUncheckedCreateWithoutToursInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutToursInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutToursInput, CategoryUncheckedUpdateWithoutToursInput>
  }

  export type CategoryUpdateWithoutToursInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutToursInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourCreateWithoutDestinationsInput = {
    slug: string
    reviews_number?: number
    adult_price: number
    child_price: number
    infant_price?: number
    enabled?: boolean
    gallery?: TourCreategalleryInput | string[]
    duration_in_days: number
    offer?: number
    offer_end_date?: Date | string | null
    start_from: number
    rate?: number
    overview_text: string
    title: string
    highlights?: TourCreatehighlightsInput | string[]
    excluded?: TourCreateexcludedInput | string[]
    included?: TourCreateincludedInput | string[]
    duration: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricing_groups?: PricingGroupCreateNestedManyWithoutTourInput
    categories?: TourToCategoryCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutDestinationsInput = {
    id?: number
    slug: string
    reviews_number?: number
    adult_price: number
    child_price: number
    infant_price?: number
    enabled?: boolean
    gallery?: TourCreategalleryInput | string[]
    duration_in_days: number
    offer?: number
    offer_end_date?: Date | string | null
    start_from: number
    rate?: number
    overview_text: string
    title: string
    highlights?: TourCreatehighlightsInput | string[]
    excluded?: TourCreateexcludedInput | string[]
    included?: TourCreateincludedInput | string[]
    duration: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pricing_groups?: PricingGroupUncheckedCreateNestedManyWithoutTourInput
    categories?: TourToCategoryUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutDestinationsInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutDestinationsInput, TourUncheckedCreateWithoutDestinationsInput>
  }

  export type DestinationCreateWithoutToursInput = {
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationUncheckedCreateWithoutToursInput = {
    id?: number
    title: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationCreateOrConnectWithoutToursInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutToursInput, DestinationUncheckedCreateWithoutToursInput>
  }

  export type TourUpsertWithoutDestinationsInput = {
    update: XOR<TourUpdateWithoutDestinationsInput, TourUncheckedUpdateWithoutDestinationsInput>
    create: XOR<TourCreateWithoutDestinationsInput, TourUncheckedCreateWithoutDestinationsInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutDestinationsInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutDestinationsInput, TourUncheckedUpdateWithoutDestinationsInput>
  }

  export type TourUpdateWithoutDestinationsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    reviews_number?: IntFieldUpdateOperationsInput | number
    adult_price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
    infant_price?: FloatFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gallery?: TourUpdategalleryInput | string[]
    duration_in_days?: IntFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    offer_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_from?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    overview_text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlights?: TourUpdatehighlightsInput | string[]
    excluded?: TourUpdateexcludedInput | string[]
    included?: TourUpdateincludedInput | string[]
    duration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_groups?: PricingGroupUpdateManyWithoutTourNestedInput
    categories?: TourToCategoryUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutDestinationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    reviews_number?: IntFieldUpdateOperationsInput | number
    adult_price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
    infant_price?: FloatFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gallery?: TourUpdategalleryInput | string[]
    duration_in_days?: IntFieldUpdateOperationsInput | number
    offer?: FloatFieldUpdateOperationsInput | number
    offer_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    start_from?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    overview_text?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    highlights?: TourUpdatehighlightsInput | string[]
    excluded?: TourUpdateexcludedInput | string[]
    included?: TourUpdateincludedInput | string[]
    duration?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricing_groups?: PricingGroupUncheckedUpdateManyWithoutTourNestedInput
    categories?: TourToCategoryUncheckedUpdateManyWithoutTourNestedInput
  }

  export type DestinationUpsertWithoutToursInput = {
    update: XOR<DestinationUpdateWithoutToursInput, DestinationUncheckedUpdateWithoutToursInput>
    create: XOR<DestinationCreateWithoutToursInput, DestinationUncheckedCreateWithoutToursInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutToursInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutToursInput, DestinationUncheckedUpdateWithoutToursInput>
  }

  export type DestinationUpdateWithoutToursInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUncheckedUpdateWithoutToursInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingGroupCreateManyTourInput = {
    id?: number
    from: number
    to: number
    price: number
    child_price: number
  }

  export type TourToCategoryCreateManyTourInput = {
    categoryId: number
  }

  export type TourToDestinationCreateManyTourInput = {
    destinationId: number
  }

  export type PricingGroupUpdateWithoutTourInput = {
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
  }

  export type PricingGroupUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
  }

  export type PricingGroupUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    child_price?: FloatFieldUpdateOperationsInput | number
  }

  export type TourToCategoryUpdateWithoutTourInput = {
    category?: CategoryUpdateOneRequiredWithoutToursNestedInput
  }

  export type TourToCategoryUncheckedUpdateWithoutTourInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TourToCategoryUncheckedUpdateManyWithoutTourInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TourToDestinationUpdateWithoutTourInput = {
    destination?: DestinationUpdateOneRequiredWithoutToursNestedInput
  }

  export type TourToDestinationUncheckedUpdateWithoutTourInput = {
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type TourToDestinationUncheckedUpdateManyWithoutTourInput = {
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type TourToCategoryCreateManyCategoryInput = {
    tourId: number
  }

  export type TourToCategoryUpdateWithoutCategoryInput = {
    tour?: TourUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type TourToCategoryUncheckedUpdateWithoutCategoryInput = {
    tourId?: IntFieldUpdateOperationsInput | number
  }

  export type TourToCategoryUncheckedUpdateManyWithoutCategoryInput = {
    tourId?: IntFieldUpdateOperationsInput | number
  }

  export type TourToDestinationCreateManyDestinationInput = {
    tourId: number
  }

  export type TourToDestinationUpdateWithoutDestinationInput = {
    tour?: TourUpdateOneRequiredWithoutDestinationsNestedInput
  }

  export type TourToDestinationUncheckedUpdateWithoutDestinationInput = {
    tourId?: IntFieldUpdateOperationsInput | number
  }

  export type TourToDestinationUncheckedUpdateManyWithoutDestinationInput = {
    tourId?: IntFieldUpdateOperationsInput | number
  }



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