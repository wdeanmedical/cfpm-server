const { AppError } = require('@errors')
const { DB_ERROR } = require('@errors/errorMessages')

module.exports.selectForm = async (conn, userID) => {
  const query = ` SELECT id, template FROM forms WHERE id = ${conn.escape(id)} `

  let form = {}

  try {
    form = await conn.query(query)
    form = form[0]
  } catch (error) {
    throw new AppError(`${DB_ERROR}: ${error}`)
  }

  return form
}
