const Joi = require('joi')

const { ForbiddenError } = require('@errors')

/*
 * log action schema
 *
 **/
const logActionSchema = Joi.object()
  .keys({
    actionLocation: Joi.string().required(),
    actionDescription: Joi.string().required(),
    actionContext: Joi.string().required(),
    actionContextType: Joi.string().required(),
  })
  .error(new ForbiddenError())

module.exports = {
  logActionSchema,
}
