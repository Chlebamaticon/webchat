import { createLogger, format, Logger, transports } from 'winston';
import { toConsoleFormat, toFileFormat } from './formats';

export const logger: Logger = createLogger({
    transports: [
  
      new transports.Console({
        format: format.combine(
          format.colorize(),
          toConsoleFormat,
        ),
      }),
  
      new transports.File({
        filename: './error.log',
        format: format.combine(
          format.timestamp(),
          toFileFormat,
        ),
        level: 'error',
        maxsize: 10000,
      }),
  
    ],
  });

export default logger;