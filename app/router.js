const express = require('express')
const controller = require('@controllers/controller')
const router = express.Router()

router.get('/public/testApi', controller.main)
router.get('/public/getForm', controller.main)
router.get('/public/getFormFile', controller.main)

module.exports = router
