const express = require('express');
const controller = require('../controller/User')
var router = express.Router();
router.get('/user' , controller.User)
module.exports = router;