require('dotenv').config();
const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ApiRouterBook = require('./api/route/Book')
const ApiRouterUser = require('./api/route/User')
const ApiRouterStore = require('./api/route/Store')

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MongoDb);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.get('/' , (req, res ) => {
  res.send('hello world')
})

app.use('/api' , ApiRouterBook)
app.use('/api' , ApiRouterUser)
app.use('/api' , ApiRouterStore)
app.listen(port , () => {
  console.log(`App listening on port ${port}`)
})