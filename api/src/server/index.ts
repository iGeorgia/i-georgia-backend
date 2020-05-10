import { APIContext } from "@types";
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerExpressConfig } from "apollo-server-express";
import { pipe } from "fp-ts/lib/pipeable";
import * as TE from "fp-ts/lib/TaskEither";
import { tryCatch } from "fp-ts/lib/TaskEither";
import { DocumentNode } from "graphql";
import { IResolvers } from "graphql-tools";
import { config } from "../lib/config";
import { getError } from "../lib/utilities";
import { schemaDirectives } from "./directives";
import { mutationResolvers } from "./mutations";
import { queryResolvers } from "./queries";
import { scalarResolvers } from "./scalars";

const resolvers: IResolvers = {
    Mutation: mutationResolvers,
    Query: queryResolvers,
    ...scalarResolvers,
};

const serverConfig = (typeDefs: DocumentNode): ApolloServerExpressConfig => ({
    typeDefs,
    resolvers,
    schemaDirectives,
    context: (): APIContext => ({ name: "misha" }),
});

export const runServer = (schema: string) => pipe(
    gql(schema),
    typeDefs => new ApolloServer(serverConfig(typeDefs)),
    server => tryCatch(() => server.listen({ port: config.PORT }), getError),
    TE.map(info => info.url),
);
