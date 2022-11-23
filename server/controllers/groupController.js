const groupModel = require('../models/groupModel')
const lecturerModel = require('../models/lecturerModel')

const listGroups = (req, res)=>{
    groupModel.find()
        .populate('lecturerId')
        .then(groups => res.json(groups))
        .catch(err => res.status(400).json('Error: ' + err));
}

const findGroup = (req, res)=>{
    groupModel.findById(req.params.id)
        .populate('lecturerId')   
        .then(group => res.json(group))
        .catch(err => res.status(400).json('Error: ' + err));
}


const deleteGroup = (req, res)=>{
    groupModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("group " + req.params.id + "deleted."))
        .catch(err => res.status(400).json('Error: ' + err));
}

const updateGroup = (req, res)=>{
    groupModel.findById(req.params.id)
        .then(group => {
            group.lecturerId = req.body.lecturerId;
            group.name = req.body.name;

            group.save()
                .then(() => res.json('group updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })

        .catch(err => res.status(400).json('Error: ' + err));
}

const addGroup = (req, res)=>{

    const lecturerId = req.body.lecturerId
    const name = req.body.name;
    
    const newGroup = new groupModel({
        lecturerId,
        name
    })

    newGroup.save()
        
    res.json({name:"added a new group"})
    
}

module.exports = {listGroups, addGroup, findGroup, deleteGroup, updateGroup}