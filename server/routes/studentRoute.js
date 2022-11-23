const express = require('express');
const router = express.Router()
const {listStudents, addStudent, findStudent, deleteStudent, updateStudent} = require('../controllers/studentController')

router.get('/', listStudents);

router.get('/:id', findStudent);

router.delete('/:id', deleteStudent);

router.post('/update/:id', updateStudent);

router.post('/add', addStudent);

module.exports = router