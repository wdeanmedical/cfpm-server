const { uuid } = require('@util/constants')
const { AppError } = require('@errors')

/**
 * insertAuditLog
 *
 * @param {object} conn
 * @param {object} data
 * @returns {string} auditID
 */
module.exports.insertAuditLog = async (conn, data) => {
  const auditID = uuid()

  const insertAuditLogQuery = `
    INSERT INTO action_audit_log
      (auditID, user, location, description, context, contextType, createdAt)
    VALUES (
      ${conn.escape(auditID)},
      ${conn.escape(data.user)},
      ${conn.escape(data.location)},
      ${conn.escape(data.description)},
      ${conn.escape(data.context)},
      ${conn.escape(data.contextType)},
      ROUND(UNIX_TIMESTAMP(UTC_TIME(4)) * 1000)
    )
  `

  try {
    await conn.query(insertAuditLogQuery)
  } catch (error) {
    throw new AppError(error)
  }

  return auditID
}
