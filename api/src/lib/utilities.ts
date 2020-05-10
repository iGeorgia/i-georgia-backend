import { TaskEither, taskify } from "fp-ts/lib/TaskEither";
import * as fs from "fs";

export const debug = (key?: string) => <T>(tag: T): T => {
    console.log(key ? key : __filename, ":", tag);
    return tag;
};

export const readFileTask: (filename: string, encoding: string) =>
    TaskEither<NodeJS.ErrnoException, Buffer> = taskify(fs.readFile);

export const raise = (e: Error) => {
    throw e;
};

export const errorFromReason = (reason: unknown): Error =>
    new Error(String(reason));

export default {
    debug,
    errorFromReason,
    readFile: readFileTask,
};
