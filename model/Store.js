const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var storeSchema = new mongoose.Schema({
  boss : {  type: Schema.Types.ObjectId, ref: "User" },
  myBook : [{
    avatar : { type: String, trim: true, default:"https://placekitten.com/640/360"} ,
    name : { type : String , trim : true },
    author : { type : String , trim : true },
    type : { type : String , trim : true }
  }]
})

var Store = mongoose.model('Store' , storeSchema , 'store');
module.exports = Store;