const Router = require('express');
const router = Router()
const { commentsControllers } = require('../controllers/comments.controller')


router.post('/comments', commentsControllers.commentPost)




module.exports = router