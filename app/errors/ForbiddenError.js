const AppError = require('./AppError')

/**
 * ForbiddenError
 *
 * @class ForbiddenError
 * @extends {AppError}
 */
class ForbiddenError extends AppError {
  constructor(code) {
    // Providing default code and overriding status code.
    super(code || 'FORBIDDEN', 403)
  }
}

module.exports = ForbiddenError
