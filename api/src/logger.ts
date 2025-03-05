import { createLogger, format, transports } from 'winston';

let outputFormat = format.combine(
  format.errors({ stack: true }),
  format.colorize(),
  format.simple(),
);

if (process.env.NODE_ENV === 'production') {
  outputFormat = format.json();
}

const logger = createLogger({
  transports: [new transports.Console({ format: outputFormat })],
});

export default logger;
