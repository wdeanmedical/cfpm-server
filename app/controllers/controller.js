/* ******************** IMPORTS ******************** */

// UTILITIES
const { logger } = require('@util/logger')

// ERRORS
const { CONTROLLER_ERROR } = require('@errors/errorMessages')

// VALIDATION
const { validate } = require('@validation/validator')
const { getValidator } = require('@validation/config')

// PROCESSOR
const { getProcessor } = require('./config')
const { process } = require('./processor')

/* ******************** FUNCTIONS ******************** */

// extract input (params or body) from request
const extractInput = req => {
  const { method, params, body } = req
  return method === 'GET' || method === 'DELETE' ? params : body
}

// validate and process request
const main = async (req, res) => {
  try {
    const input = extractInput(req, res)
    const validatedInput = await validate(res, input, getValidator(req))
    if (!validatedInput) {
      return
    }
    process(req, res, validatedInput, getProcessor(req))
  } catch (error) {
    logger.error(`${CONTROLLER_ERROR} - ${error}`)
    res.status(500).json({ error: { message: `${error}`, code: CONTROLLER_ERROR }, result: null })
  }
}

module.exports = { main }
