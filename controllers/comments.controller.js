const Comments = require('../models/Comments.model')
module.exports.commentsControllers = {
 commentPost : (req, res) => {
    const {text, usersId, tweetsId} = req.body
    Comments.create({
       text,
       usersId,
       tweetsId
    }).then(() => {
        res.json('Комментарий добавлен')
    })
 }
}