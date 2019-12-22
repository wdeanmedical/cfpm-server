const Joi = require('joi')

const { logger } = require('@util/logger')
const { VALIDATION_ERROR } = require('@errors/errorMessages')

const validate = async (res, input, criterion) => {
  if (criterion) {
    try {
      input = await Joi.validate(input, criterion)
    } catch (error) {
      logger.error(`${VALIDATION_ERROR} - ${error}`)
      res.status(400).json({ error: { message: `${error}`, code: VALIDATION_ERROR }, result: null })
      return
    }
  }
  return input
}

module.exports = { validate }
