const express = require('express');
const router = express.Router()
const {listUsers, addUser, findUser, deleteUser, updateUser} = require('../controllers/userController')

router.get('/', listUsers);

router.get('/:id', findUser);


router.delete('/:id', deleteUser);

router.post('/update/:id', updateUser);

router.post('/add', addUser);

module.exports = router