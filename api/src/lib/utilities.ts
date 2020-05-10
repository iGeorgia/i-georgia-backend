import { TaskEither, taskify } from "fp-ts/lib/TaskEither";
import * as fs from "fs";

export const debug = (key?: string) => <T>(tag: T, ...args: any[]): T => {
    console.log(key ? key : __filename, ":", tag, args);
    return tag;
};

export const readFileTask: (filename: string, encoding: string) =>
    TaskEither<NodeJS.ErrnoException, Buffer> = taskify(fs.readFile);

export const raiseError = (e: Error) => {
    throw e;
};

export const getError = (reason: any): Error =>
    new Error(String(reason));
