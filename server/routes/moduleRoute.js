const express = require('express');
const router = express.Router()
const {listModules, addModule, findModule, deleteModule, updateModule} = require('../controllers/moduleController')

router.get('/', listModules);

router.get('/:id', findModule);

router.delete('/:id', deleteModule);

router.post('/update/:id', updateModule);

router.post('/add', addModule);

module.exports = router