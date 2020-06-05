const express = require('express');
const controller = require('../controller/Store')
var router = express.Router();

router.get('/store' , controller.Store)

router.post('/store' , controller.postStore)

router.put('/store/:id' , controller.postNew)

router.get('/store/:id' , controller.myStore)

router.delete('/store/:store/:idBook' , controller.removeEachBook)

module.exports = router;