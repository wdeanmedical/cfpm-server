const Joi = require('joi')

const { audit, logger } = require('@util/logger')
const { VALIDATION_ERROR, INSERT_AUDIT_LOG_ERROR } = require('@errors/errorMessages')

const { insertAuditLog } = require('@persistence/sql/insertAuditLog')

/**
 * logAction
 *
 * @param {object} req
 * @param {object} res
 */
const logAction = async (req, res) => {
  const { conn } = req

  // Get parameters
  let { actionLocation, actionDescription, actionContext, actionContextType } = req.body

  // get user
  const { user } = req

  const auditData = {
    user: user ? user.userID : 'anonymous',
    location: actionLocation,
    description: actionDescription,
    context: actionContext,
    contextType: actionContextType,
  }

  // write to log file
  audit.verbose(`${auditData.user} - ${auditData.location} - ${auditData.description} - ${auditData.contextType} - ${auditData.context}`)

  // write to database
  try {
    await insertAuditLog(conn, auditData)
  } catch (error) {
    logger.error(`${INSERT_AUDIT_LOG_ERROR} - ${error.stack}`)
    res.status(error.status || 500).json({ error: { code: error.code || INSERT_AUDIT_LOG_ERROR }, result: null })
    return
  }

  // Return null error and result
  res.json({ error: null, result: null })
}

module.exports = {
  logAction,
}
