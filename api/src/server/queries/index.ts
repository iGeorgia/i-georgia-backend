import { APIContext, QueryGetPlaceArgs } from "@types";
import { GraphQLFieldResolver } from "graphql";
import { debug } from "../../lib/utilities";

const getPlace: GraphQLFieldResolver<{}, APIContext, QueryGetPlaceArgs> = (
    _, args, ctx,
) => {
    debug("getPlace")(args, ctx);
    return [];
};

export const queryResolvers = {
    getPlace,
};
