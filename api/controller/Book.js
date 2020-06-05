const Book = require('../../model/Book')
module.exports.Book = async (req, res ) => {
  const book = await Book.find();
  res.json(book)
}
