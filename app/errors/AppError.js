/**
 * AppError
 *
 * @class AppError
 * @extends {Error}
 */
class AppError extends Error {
  constructor(code, status) {
    // Calling parent constructor of base Error class.
    super(code)

    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor)

    // You can use any additional properties you want.
    // I'm going to use preferred HTTP status for this error types.
    // `500` is the default value if not specified.
    this.status = status || 500

    this.code = code || 'INTERNAL_ERROR'
  }
}

module.exports = AppError
