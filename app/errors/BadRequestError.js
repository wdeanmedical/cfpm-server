const AppError = require('./AppError')

/**
 * BadRequestError
 *
 * @class BadRequestError
 * @extends {AppError}
 */
class BadRequestError extends AppError {
  constructor(code) {
    // Providing default code and overriding status code.
    super(code || 'BAD_REQUEST', 400)
  }
}

module.exports = BadRequestError
