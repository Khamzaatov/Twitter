const Users = require('../models/Users.model')
module.exports.usersControllers = {
  userPost : (req, res) => {
    const { name, phone, email} = req.body
    Users.create({
        name,
        phone,
        email
    }).then(() => {
        res.json(`Пользователь ${req.body.name} создан`)
    })
  },
  savesPost : (req, res) => {
    Users.findByIdAndUpdate(req.params.id, {
        $push : {
           saves: req.body.saves
        }
    }).then(() => {
        res.json('Пользователь сохранил твитт')
    })
  }
} 