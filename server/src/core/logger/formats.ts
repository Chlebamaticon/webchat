import { Format, format } from 'logform';

export const toConsoleFormat: Format = format.printf(
    ({ level, message }) => `${ level }: ${ message }`
);

export const toFileFormat: Format = format.printf(
    ({ level, message, timestamp }) => `${ timestamp }, ${ level }: ${ message }`
);