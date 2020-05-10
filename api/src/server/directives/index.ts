import { APIContext, RelationDirectiveArgs } from "@types";
import { SchemaDirectiveVisitor } from "apollo-server";
import { GraphQLField } from "graphql";
import { relation } from "./relation";

class RelationDirectiveVisitor extends SchemaDirectiveVisitor {
    public visitFieldDefinition(field: GraphQLField<any, APIContext>) {
        field.resolve = relation(this.args as RelationDirectiveArgs);
    }
}

export const schemaDirectives = {
    relation: RelationDirectiveVisitor,
};
