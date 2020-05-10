import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { APIContext } from './index';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Name: string;
};



export const enum Direction {
  In = 'IN',
  Out = 'OUT'
};

export const enum Relation {
  HasTripTo = 'HAS_TRIP_TO'
};

export type Place = {
  readonly __typename?: 'Place';
  readonly name: Scalars['Name'];
  readonly destinations: ReadonlyArray<Place>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly addPlace: ReadonlyArray<Place>;
};


export type MutationAddPlaceArgs = {
  name: Scalars['Name'];
  to: ReadonlyArray<Scalars['ID']>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly getPlace: ReadonlyArray<Place>;
};


export type QueryGetPlaceArgs = {
  name: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Name: ResolverTypeWrapper<Scalars['Name']>,
  Direction: Direction,
  Relation: Relation,
  Place: ResolverTypeWrapper<Place>,
  Mutation: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Query: ResolverTypeWrapper<{}>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Name: Scalars['Name'],
  Direction: Direction,
  Relation: Relation,
  Place: Place,
  Mutation: {},
  ID: Scalars['ID'],
  Query: {},
};

export type RelationDirectiveArgs = {   name: Relation;
  direction: Direction; };

export type RelationDirectiveResolver<Result, Parent, ContextType = APIContext, Args = RelationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface NameScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Name'], any> {
  name: 'Name'
}

export type PlaceResolvers<ContextType = APIContext, ParentType extends ResolversParentTypes['Place'] = ResolversParentTypes['Place']> = {
  name: Resolver<ResolversTypes['Name'], ParentType, ContextType>,
  destinations: Resolver<ReadonlyArray<ResolversTypes['Place']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = APIContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addPlace: Resolver<ReadonlyArray<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<MutationAddPlaceArgs, 'name' | 'to'>>,
};

export type QueryResolvers<ContextType = APIContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getPlace: Resolver<ReadonlyArray<ResolversTypes['Place']>, ParentType, ContextType, RequireFields<QueryGetPlaceArgs, 'name'>>,
};

export type Resolvers<ContextType = APIContext> = {
  Name: GraphQLScalarType,
  Place: PlaceResolvers<ContextType>,
  Mutation: MutationResolvers<ContextType>,
  Query: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = APIContext> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = APIContext> = {
  relation: RelationDirectiveResolver<any, any, ContextType>,
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = APIContext> = DirectiveResolvers<ContextType>;