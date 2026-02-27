import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize, json } = format;

// Console format (pretty + colored)
const consoleFormat = combine(
  colorize(),
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  printf(({ level, message, timestamp }) => {
  const msg =
    typeof message === 'object'
      ? JSON.stringify(message, null, 2)
      : message;

  return `${timestamp} ${level}: ${msg}`;
})
);

const logger = createLogger({
  level: 'info',
  transports: [
    new transports.Console({
      format: consoleFormat
    }),
    new transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: combine(timestamp(), json())
    }),
    new transports.File({
      filename: 'logs/combined.log',
      format: combine(timestamp(), json())
    })
  ]
});

export default logger;