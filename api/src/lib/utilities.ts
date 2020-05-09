import { TaskEither, taskify } from "fp-ts/lib/TaskEither";
import fs from "fs";

export const debug = (key?: string) => <T>(tag: T): T => {
    console.log(key ? key : __filename, ":", tag);
    return tag;
};

export const readFile: (filename: string, encoding: string) =>
    TaskEither<NodeJS.ErrnoException, Buffer> = taskify(fs.readFile);

export const raise = (e: Error) => {
    throw e;
};

export default {
    debug,
    readFile,
};
