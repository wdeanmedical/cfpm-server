const { logger } = require('@util/logger')
const { PROCESSOR_ERROR } = require('@errors/errorMessages')

const process = (req, res, input, method) => {
  try {
    method(req, res, input)
  } catch (error) {
    logger.error(`${PROCESSOR_ERROR} - ${error}`)
    res.status(500).json({ error: { message: `${error}`, code: PROCESSOR_ERROR }, result: null })
    return
  }
}

module.exports = { process }
