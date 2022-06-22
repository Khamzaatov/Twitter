const Router = require('express');
const router = Router()
const { usersControllers } = require('../controllers/users.controller')

router.post('/users', usersControllers.userPost)
router.post('/saves/:id', usersControllers.savesPost)



module.exports = router