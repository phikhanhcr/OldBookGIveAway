const User = require('../../model/User')
module.exports.User = async (req, res ) => {
  const user = await User.find();
  res.json(user)
}
