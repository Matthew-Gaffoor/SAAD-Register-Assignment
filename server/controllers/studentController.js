const studentModel = require('../models/studentModel')
const authenticationModel = require('../models/authenticationModel')

const listStudents = (req, res)=>{
    studentModel.find()
        .populate('authenticationId')
        .populate('groupId')
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err));
}

const findStudent = (req, res)=>{
    studentModel.findById(req.params.id)
        .populate('authenticationId')
        .populate('groupId')
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err));
}


const deleteStudent = (req, res)=>{
    studentModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("student " + req.params.id + " deleted."))
        .catch(err => res.status(400).json('Error: ' + err));
}

const updateStudent = (req, res)=>{
    studentModel.findById(req.params.id)
        .then(student => {
            student.authenticationId = req.body.authenticationId;
            student.groupId = req.body.groupId;
            student.name = req.body.name;
            student.age = Number(req.body.age);
            student.sex = req.body.sex;
            

            student.save()
                .then(() => res.json('student updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })

        .catch(err => res.status(400).json('Error: ' + err));
}

const addStudent = (req, res)=>{

    const authenticationId = req.body.authenticationId;
    const groupId = req.body.groupId;
    const name = req.body.name;
    const age = Number(req.body.age);
    const sex = req.body.sex;
    
    const newStudent = new studentModel({
        authenticationId,
        groupId,
        name,
        age,
        sex
    })

    newStudent.save()
        
    res.json({name:"added a new student"})
    
}

module.exports = {listStudents, addStudent, findStudent, deleteStudent, updateStudent}