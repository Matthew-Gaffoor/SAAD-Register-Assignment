const lecturerModel = require('../models/lecturerModel')
const authenticationModel = require('../models/authenticationModel')

const listLecturers = (req, res)=>{
    lecturerModel.find()
        .populate('authenticationId')
        .then(lecturers => res.json(lecturers))
        .catch(err => res.status(400).json('Error: ' + err));
}

const findLecturer = (req, res)=>{
    lecturerModel.findById(req.params.id)
        .populate('authenticationId')   
        .then(lecturer => res.json(lecturer))
        .catch(err => res.status(400).json('Error: ' + err));
}


const deleteLecturer = (req, res)=>{
    lecturerModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("lecturer " + req.params.id + "deleted."))
        .catch(err => res.status(400).json('Error: ' + err));
}

const updateLecturer = (req, res)=>{
    lecturerModel.findById(req.params.id)
        .then(lecturer => {
            lecturer.authenticationId = req.body.authenticationId;
            lecturer.name = req.body.name;

            lecturer.save()
                .then(() => res.json('lecturer updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })

        .catch(err => res.status(400).json('Error: ' + err));
}

const addLecturer = (req, res)=>{

    const authenticationId = req.body.authenticationId
    const name = req.body.name;
    
    const newLecturer = new lecturerModel({
        authenticationId,
        name
    })

    newLecturer.save()
        
    res.json({name:"added a new lecturer"})
    
}

module.exports = {listLecturers, addLecturer, findLecturer, deleteLecturer, updateLecturer}