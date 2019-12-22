// load dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const morgan = require('morgan')
const { logger } = require('@util/logger')

// AUTH MIDDLEWARE
const { getMySqlConnection } = require('@middleware')

const router = express.Router()

const controller = require('@controllers/controller')

router.get('/public/testApi', controller.main)
router.get('/public/getForm', controller.main)
router.get('/public/getFormFile', controller.main)

// Start express app
const app = express()

// Log requests with morgan, streamed to winston for writing log files
if (process.env.NODE_ENV === 'local') {
  app.use(morgan('dev', { stream: logger.stream }))
} else {
  // deployed app logs more details
  app.use(morgan('combined', { stream: logger.stream }))
}

// Increase default Content-Length limit to 1mb for large uploads (e.g. images)
app.use(bodyParser.json({ limit: '1mb' }))

// Parse URL-encoded data to JSON
app.use(bodyParser.urlencoded({ extended: true }))

// Add cors
app.use(cors())

// Compress all responses
app.use(compression())

// handle auth errors
app.use((err, req, res, next) => {
  if (err) {
    // handle unauthorized
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).json({ error: 'Unauthorized Access' })
    }
    // handle others
    return res.json({ error: err.message })
  }
  next()
})

app.use(getMySqlConnection)

// Add routes
app.use('/api', router)

module.exports = app
