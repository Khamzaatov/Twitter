const mongoose = require('mongoose');
const commentsSchema = mongoose.Schema({
    text : {
        type: String,
        required: true
    },
    usersId : {
    ref : "Users",
    type: mongoose.Schema.Types.ObjectId,
    required: true
 },
 tweetsId : {
    ref : "Tweets",
    type: mongoose.Schema.Types.ObjectId,
    required: true
 }
})
const Comments = mongoose.model("Comments", commentsSchema);


module.exports = Comments