const Store = require('../../model/Store')
module.exports.Store = async (req, res ) => {
  const store = await Store.find();
  res.json(store)
}

module.exports.postStore = async (req, res ) => {
  var newStore = await Store.create(req.body.newStore)
  console.log(newStore);
  res.json(newStore)
}

module.exports.postNew = async (req, res ) => {
  console.log(req.params.id)
  const storeCurrent = await Store.find({boss : req.params.id})
  console.log(storeCurrent)
  const lengthStore = storeCurrent[0].myBook.length;
  console.log(lengthStore)
  if(lengthStore === 0 ) {
    storeCurrent[0].myBook[0] = {
      name : req.body.newBook.name , 
      author : req.body.newBook.author ,
      type : req.body.newBook.type, 
      avatar : "https://placekitten.com/640/360"
    }
  } else {
    storeCurrent[0].myBook[lengthStore] = {
      name : req.body.newBook.name , 
      author : req.body.newBook.author ,
      type : req.body.newBook.type,
      avatar : "https://placekitten.com/640/360"
    }
  }
  
  console.log(storeCurrent[0].myBook)
  storeCurrent[0].save();
}


module.exports.myStore = async ( req , res ) => {
  const data = await Store.find({boss : req.params.id})
  res.json(data);
}


module.exports.removeEachBook = async (req, res ) => {
  const storeId = req.params.store;
  const idBook = req.params.idBook;
  const storeCurrent = await Store.find({boss : storeId})
  const AllBook = storeCurrent[0].myBook  
  const itemForRemove = AllBook.filter(ele => {
    return ele._id == idBook
  })
  const index = AllBook.indexOf(itemForRemove[0]) 
  storeCurrent[0].myBook.splice(index , 1);
  storeCurrent[0].save();
}