const Tweets = require('../models/Tweets.model')
module.exports.tweetsControllers = {
  tweetsPost : (req, res) => {
    const {text, usersId} = req.body
    Tweets.create({
        text,
        usersId
    }).then(() => {
        res.json('Твитт создан')
    })
  },
  tweetsGet: (req, res) => {
    Tweets.find({usersId: req.params.id},)
    .then((data) => {
        res.json(data)
    })
  },
  likesPost : (req, res) => {
    Tweets.findByIdAndUpdate(req.params.id, {
        $push : {
            likes: req.body.likes
        }
    }).then(() => {
        res.json('Лайк к твитту')
    })
  }
}