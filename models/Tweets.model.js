const mongoose = require('mongoose');
const tweetsSchema = mongoose.Schema({
    text : {
    type: String,
    required: true
  },
    usersId: {
        ref: "Users",
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    likes: [{
        ref : "Users",
        type: mongoose.Schema.Types.ObjectId,
    }]
})

const Tweets = mongoose.model("Tweets", tweetsSchema);


module.exports = Tweets