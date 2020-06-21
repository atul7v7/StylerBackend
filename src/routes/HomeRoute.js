const express = require('express')
const router = express.Router()
const GetHomeController = require('../controllers/HomeController')

router.get('/',GetHomeController)

module.exports = router


