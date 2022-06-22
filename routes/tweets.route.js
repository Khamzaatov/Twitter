const Router = require('express');
const router = Router()

const { tweetsControllers } = require('../controllers/tweets.controller')

router.post('/tweets', tweetsControllers.tweetsPost);
router.post('/likes/:id', tweetsControllers.likesPost)
router.get('/tweets/:id', tweetsControllers.tweetsGet)




module.exports = router