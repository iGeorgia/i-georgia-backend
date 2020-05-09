import { config } from "@lib/config";
import { raise, readFile } from "@lib/utilities";
import { pipe } from "fp-ts/lib/pipeable";
import * as TE from "fp-ts/lib/TaskEither";
import path from "path";
import { server } from "./server";


const schemaPath = () => path.resolve(
    __dirname, "..", "..", "schema", "graphql", config.GQL_SCHEMA_FILENAME,
);

const crateServerTask = (buffer: Buffer) => server(buffer.toString());

export const main = pipe(
    schemaPath(),
    filename => readFile(filename, "utf8"),
    TE.map(crateServerTask),
    TE.fold(raise, task => () => task),
);
