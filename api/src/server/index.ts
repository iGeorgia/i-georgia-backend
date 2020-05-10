import { ApolloServer, gql } from "apollo-server";
import { pipe } from "fp-ts/lib/pipeable";
import * as TE from "fp-ts/lib/TaskEither";
import { tryCatch } from "fp-ts/lib/TaskEither";
import { errorFromReason } from "../lib/utilities";
import { resolvers } from "../queries";

export const runServer = (schema: string) => pipe(
    gql(schema),
    typeDefs => new ApolloServer({ typeDefs, resolvers }),
    server => tryCatch(() => server.listen(), errorFromReason),
    TE.map(info => info.url),
);
