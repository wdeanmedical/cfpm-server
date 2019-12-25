const Joi = require('joi')
const { logActionSchema } = require('@validation')
const routes = require('@app/routes');

const getValidator = req => {
  const { method } = req
  const { path } = req.route
  return config[path][method]
}

const config = {
  /* ******************** UTILITY ******************** */
  [routes.TEST_API]: { GET: undefined },
  [routes.GET_FORM]: { GET: undefined },
  [routes.GET_FORM_FILE]: { GET: undefined },
}

module.exports = { getValidator }
