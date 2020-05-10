import { MutationResolvers } from "@types";
import { placeMutations } from "./place";

export const mutationResolvers: MutationResolvers = {
    ...placeMutations,
};
