import { ApolloServer, gql, ServerInfo } from "apollo-server";
import { resolvers } from "../queries";

export const runServer = (schema: string) => {
    const typeDefs = gql(schema);
    const server = new ApolloServer({ typeDefs, resolvers });
    return server.listen().then((info: ServerInfo) => {
        console.log(`Server is listening on ${info.url}`);
    });
};
