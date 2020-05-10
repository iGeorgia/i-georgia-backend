import { MutationResolvers } from "@types";

const addPlace: MutationResolvers["addPlace"] = (_, { name }) => {
    return [{
        name: name,
        destinations: [],
    }];
};

export const placeMutations = {
    addPlace,
};
