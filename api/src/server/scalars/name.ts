import { GraphQLScalarType } from "graphql";

export const nameResolver = new GraphQLScalarType({
    name: "Name",
    description: "Unique place name",
    serialize: (value: string) => value,
    parseValue: (value: unknown) => String(value),
});
