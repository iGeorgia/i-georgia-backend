import { pipe } from "fp-ts/lib/pipeable";
import * as TE from "fp-ts/lib/TaskEither";
import * as path from "path";
import { config } from "./lib/config";
import { raise, readFileTask } from "./lib/utilities";
import { runServer } from "./server";

const schemaPath = path.resolve(
    __dirname, "..", "..", "schema", "graphql", config.GQL_SCHEMA_FILENAME,
);

const crateServerTask = (buffer: Buffer) => runServer(buffer.toString());

export const main = pipe(
    schemaPath,
    path => readFileTask(path, "utf8"),
    TE.chain(crateServerTask),
    TE.fold(raise, task => () => Promise.resolve(task)),
);
