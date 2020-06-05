// Mọi người có thể xem những cuốn sách được give away không cần đăng ký
// Có thể lọc sách theo các thể loại khác nhau
// Người dùng có thể tạo tài khoản để đăng sách lên cho
// Bonus nếu: Tìm sách quanh đây kết hợp Google Maps API
var mongoose = require('mongoose');
var bookSchema = new mongoose.Schema({
  name : { type: String, trim: true},
  author : { type: String, trim: true},
  type : { type: String, trim: true} ,
  avatar : { type: String, trim: true, default:"https://placekitten.com/640/360"}
})

var Books = mongoose.model('Books' , bookSchema , 'books');
module.exports = Books;