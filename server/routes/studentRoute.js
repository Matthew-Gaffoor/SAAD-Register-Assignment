const express = require('express');
const router = express.Router()
const {listStudents, addStudent} = require('../controllers/studentController')

router.get('/', listStudents);

router.post('/add', addStudent);

module.exports = router