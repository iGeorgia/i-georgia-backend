export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Place = {
   __typename?: 'Place';
  id: Scalars['ID'];
  name: Scalars['String'];
  activities: Array<Activity>;
  providers: Array<Provider>;
  seasons: Array<Season>;
  transports: Array<Transport>;
  tripEnds: Array<Trip>;
  tripStarts: Array<Trip>;
};

export type Trip = {
   __typename?: 'Trip';
  id: Scalars['ID'];
  name: Scalars['String'];
  endPlaces: Array<Place>;
  providers: Array<Provider>;
  seasons: Array<Season>;
  startPlaces: Array<Place>;
  transports: Array<Transport>;
};

export type Provider = {
   __typename?: 'Provider';
  id: Scalars['ID'];
  name: Scalars['String'];
  places: Array<Place>;
  trips: Array<Trip>;
};

export type Transport = {
   __typename?: 'Transport';
  id: Scalars['ID'];
  name: Scalars['String'];
  places: Array<Place>;
  trips: Array<Trip>;
};

export type Activity = {
   __typename?: 'Activity';
  id: Scalars['ID'];
  name: Scalars['String'];
  places: Array<Place>;
  season: Array<Season>;
};

export type Season = {
   __typename?: 'Season';
  id: Scalars['ID'];
  name: Scalars['String'];
  activities: Array<Activity>;
  places: Array<Place>;
  trips: Array<Trip>;
};

export type Query = {
   __typename?: 'Query';
  places: Array<Place>;
};


export type QueryPlacesArgs = {
  which: Scalars['String'];
};
