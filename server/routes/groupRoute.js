const express = require('express');
const router = express.Router()
const {listGroups, addGroup, findGroup, deleteGroup, updateGroup} = require('../controllers/groupController')

router.get('/', listGroups);

router.get('/:id', findGroup);

router.delete('/:id', deleteGroup);

router.post('/update/:id', updateGroup);

router.post('/add', addGroup);

module.exports = router