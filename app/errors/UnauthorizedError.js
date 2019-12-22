const AppError = require('./AppError')

/**
 * UnauthorizedError
 *
 * @class UnauthorizedError
 * @extends {AppError}
 */
class UnauthorizedError extends AppError {
  constructor(code) {
    // Providing default code and overriding status code.
    super(code || 'UNAUTHORIZED', 401)
  }
}

module.exports = UnauthorizedError
