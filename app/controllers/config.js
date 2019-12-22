const db = require('@util/db')
const testForm = require('@data/fields.json')
const { runStatement } = require('@persistence/sql/runStatement')
const { getStatement } = require('@persistence/sql/config')

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
  ['/public/testApi']: {
    GET: (req, res) => {
      res.json({ message: 'testing' })
    },
  },
  ['/public/getFormFile']: {
    GET: (req, res) => {
      res.json({ form: testForm })
    },
  },
  ['/public/getForm']: {
    GET: async (req, res) => {
      // const id = /public\/getForm\/(.*?)\//.exec(req.url)[1]
      // const { id } = req.params
      const id = '1'
      sendResponse(res, await runStatement(res, req.conn, getStatement(req, [id])))
    },
  },
}

module.exports = { getProcessor }
