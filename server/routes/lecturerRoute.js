const express = require('express');
const router = express.Router()
const {listLecturers, addLecturer, findLecturer, deleteLecturer, updateLecturer} = require('../controllers/lecturerController')

router.get('/', listLecturers);

router.get('/:id', findLecturer);

router.delete('/:id', deleteLecturer);

router.post('/update/:id', updateLecturer);

router.post('/add', addLecturer);

module.exports = router