import { Query, QueryPlacesArgs } from "../types/gql";

const places = (_: QueryPlacesArgs["which"]): Query["places"] => [];

export const resolvers = {
    Query: {
        places,
    },
};
