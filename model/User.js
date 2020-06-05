var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  email : { type: String, trim: true},
  username : { type: String, trim: true},
  password : { type: String, trim: true} ,
  avatar : { type: String, trim: true, default:"https://placekitten.com/640/360"}
})

var Users = mongoose.model('Users' , userSchema , 'users');
module.exports = Users;