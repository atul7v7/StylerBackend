const express = require('express')
const router = express.Router()

const sendInfoController = require('../controllers/SendInfoController')

router.get('/sendinfo/email',sendInfoController.postSendEmail)

router.get('/sendinfo/sms',sendInfoController.postSendSMS)

module.exports = router