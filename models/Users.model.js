const mongoose = require('mongoose');
const usersSchema  = mongoose.Schema({
  name: {
    type : String,
    required: true,
  }, 
  email : {
    type: String,
    required: true,
  },
  phone : {
    type : String
  },
  saves : [{
    ref: "Tweets",
    type: mongoose.Schema.Types.ObjectId
  }]
})

const Users = mongoose.model('Users', usersSchema);

module.exports = Users