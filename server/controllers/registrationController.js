const registrationModel = require('../models/registrationModel')

const listRegistrations = (req, res)=>{
    registrationModel.find()
        .populate('courseId')   
        .populate('studentId')
        .populate('groupId')
        .populate('moduleId')
        .then(registrations => res.json(registrations))
        .catch(err => res.status(400).json('Error: ' + err));
}

const findRegistration = (req, res)=>{
    registrationModel.findById(req.params.id)
        .populate('courseId')   
        .populate('studentId')
        .populate('groupId')
        .populate('moduleId')
        .then(registration => res.json(registration))
        .catch(err => res.status(400).json('Error: ' + err));
}


const deleteRegistration = (req, res)=>{
    registrationModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("registration " + req.params.id + " deleted."))
        .catch(err => res.status(400).json('Error: ' + err));
}

const updateRegistration = (req, res)=>{
    registrationModel.findById(req.params.id)
        .then(registration => {

            registration.courseId = req.body.courseId;
            registration.studentId = req.body.studentId;
            registration.groupId = req.body.groupId;
            registration.moduleId = req.body.moduleId;
            registration.date = Date.parse(req.body.date);
            registration.present = Boolean(req.body.present);

            registration.save()
                .then(() => res.json('registration updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })

        .catch(err => res.status(400).json('Error: ' + err));
}

const addRegistration = (req, res)=>{

    const courseId = req.body.courseId;
    const studentId = req.body.studentId;
    const groupId = req.body.groupId;
    const moduleId = req.body.moduleId;
    const date = Date.parse(req.body.date);
    const present = Boolean(req.body.present);
    
    const newRegistration = new registrationModel({
        courseId,
        studentId,
        groupId,
        moduleId,
        date,
        present
    })

    newRegistration.save()
        
    res.json("added a new registration")
    
}

module.exports = {listRegistrations, addRegistration, findRegistration, deleteRegistration, updateRegistration}