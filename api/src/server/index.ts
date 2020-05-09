import { gql } from "apollo-server";

export const server = (schemaText: string) => {
    const schema = gql(schemaText);
    console.log(schema);
    return Promise.resolve(0);
};
