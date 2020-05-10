import { APIContext, Place, RelationDirectiveArgs } from "@types";
import { debug } from "../../lib/utilities";

export const relation = (args: RelationDirectiveArgs) => (
    parent: Place, _params: {}, ctx: APIContext,
) => {
    const { direction, name } = args;
    debug("relation")(parent, ":", direction, name, ctx);
    return [];
};
