const express = require('express');
const router = express.Router()
const {listCourses, addCourse, findCourse, deleteCourse, updateCourse} = require('../controllers/courseController')

router.get('/', listCourses);

router.get('/:id', findCourse);

router.delete('/:id', deleteCourse);

router.post('/update/:id', updateCourse);

router.post('/add', addCourse);

module.exports = router