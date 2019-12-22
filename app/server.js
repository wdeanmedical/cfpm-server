/* eslint-disable no-process-exit */
// Get environment variables
require('../config/environments')

// get dependencies
const fs = require('fs')
const { logger } = require('@util/logger')
const db = require('@util/db')
const app = require('./app')

// get or set port and protocol
const PORT = process.env.PORT || 8080
const PROTOCOL = process.env.PROTOCOL || 'http'

// Connect to the SQL database and then start the server
let server = null
db.connect(db.SQL_CONNECTION)
  .then(() => {
    server = app.listen(PORT, () => logger.info(`Form server running on port: ${PORT}`))
  })
  .catch(error => logger.error(`${error.code}: ${error.stack}`))
