const express = require('express');
const controller = require('../controller/Book')
var router = express.Router();
router.get('/books' , controller.Book)
module.exports = router;