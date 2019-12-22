const winston = require('winston')

const { createLogger, format, transports } = winston
const { combine, timestamp, printf, colorize, prettyPrint } = format

// define message format for writing to files
const fileFormat = printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`
})

const auditFormat = printf(info => {
  return `${info.timestamp} ${info.message}`
})

// define message format for writing to the console
const consoleFormat = printf(info => `${info.timestamp} ${info.level}: ${info.message}`)

// define the custom settings for each transport (file, console)
const options = {
  error: {
    level: 'error',
    filename: './logs/errors.log',
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    format: combine(timestamp(), prettyPrint(), fileFormat),
  },
  info: {
    level: 'info',
    filename: './logs/app.log',
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    format: combine(timestamp(), prettyPrint(), fileFormat),
  },
  verbose: {
    level: 'verbose',
    filename: './logs/actions.log',
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    format: combine(timestamp(), prettyPrint(), auditFormat),
  },
  console: {
    level: 'debug',
    format: combine(timestamp(), consoleFormat),
  },
}

// instantiate a new Winston Logger with the settings defined above
// this logger is used for all application logging
const logger = createLogger({
  transports: [
    new transports.File(options.error),
    new transports.File(options.info),
    new transports.Console(options.console),
  ],
  exceptionHandlers: [
    new transports.File({ filename: './logs/exceptions.log' }),
    new transports.Console(options.console),
  ],
  exitOnError: false,
})

// stream used by morgan for http logging
logger.stream = {
  write: function(message) {
    logger.info(message)
  },
}

// instantiate a new Winston Logger which will log audit related messages
const audit = createLogger({
  transports: [new transports.File(options.verbose)],
  exitOnError: false,
})

module.exports = { logger, audit }
