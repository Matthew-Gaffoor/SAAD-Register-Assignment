const express = require('express');
const router = express.Router()
const {listRegistrations, addRegistration, findRegistration, deleteRegistration, updateRegistration} = require('../controllers/registrationController')

router.get('/', listRegistrations);

router.get('/:id', findRegistration);

router.delete('/:id', deleteRegistration);

router.post('/update/:id', updateRegistration);

router.post('/add', addRegistration);

module.exports = router