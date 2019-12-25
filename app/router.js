const express = require('express')
const controller = require('@controllers/controller')
const router = express.Router()
const routes = require('@app/routes');

router.get(routes.TEST_API, controller.main)
router.get(routes.GET_FORM, controller.main)
router.get(routes.GET_FORM_FILE, controller.main)

module.exports = router
