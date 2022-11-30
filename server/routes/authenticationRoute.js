const express = require('express');
const router = express.Router()


const {listAuthentications, findAuthentication, deleteAuthentication, updateAuthentication, addAuthentication} = require('../controllers/authenticationController')

router.get('/', listAuthentications);

router.get('/:id', findAuthentication);

router.delete('/:id', deleteAuthentication);

router.post('/update/:id', updateAuthentication);

router.post('/add', addAuthentication);

module.exports = router