const { logger } = require('@util/logger')
const { DB_ERROR } = require('@errors/errorMessages')

module.exports.runStatement = async (res, conn, statement) => {
  let result = {}
  try {
    result = await conn.query(statement)
    result = Array.isArray(result) ? result[0] : { success: true }
  } catch (error) {
    logger.error(`${DB_ERROR} - ${error}`)
    res.status(500).json({
      error: {
        message: DB_ERROR,
        code: DB_ERROR,
      },
      result: undefined,
    })
    result = null
  }

  return result
}
