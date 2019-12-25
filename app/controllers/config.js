const db = require('@util/db')
const testForm = require('@data/fields.json')
const { runStatement } = require('@persistence/sql/runStatement')
const { getStatement } = require('@persistence/sql/config')
const routes = require('@app/routes');

// HELPERS
const { logAction } = require('./helper')

const getProcessor = req => {
  const { method } = req
  const { path } = req.route
  return config[path][method]
}

const sendResponse = (res, result) => {
  const template = JSON.parse(result.template)
  if (result) {
    // res.json({ error: null, result })
    res.json({ error: null, result: { ...result, template } })
  }
}

const config = {
  [routes.TEST_API]: {
    GET: (req, res) => {
      res.json({ message: 'testing' })
    },
  },
  [routes.GET_FORM_FILE]: {
    GET: (req, res) => {
      res.json({ form: testForm })
    },
  },
  [routes.GET_FORM]: {
    GET: async (req, res) => {
      // const id = /public\/getForm\/(.*?)\//.exec(req.url)[1]
       const { id } = req.params
      // const id = '1'
      sendResponse(res, await runStatement(res, req.conn, getStatement(req, [id])))
    },
  },
}

module.exports = { getProcessor }
