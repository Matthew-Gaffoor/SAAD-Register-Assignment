const courseModel = require('../models/courseModel')

const listCourses = (req, res)=>{
    courseModel.find()
        .then(courses => res.json(courses))
        .catch(err => res.status(400).json('Error: ' + err));
}

const findCourse = (req, res)=>{
    courseModel.findById(req.params.id)
        .then(course => res.json(course))
        .catch(err => res.status(400).json('Error: ' + err));
}


const deleteCourse = (req, res)=>{
    courseModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("course " + req.params.id + " deleted."))
        .catch(err => res.status(400).json('Error: ' + err));
}

const updateCourse = (req, res)=>{
    courseModel.findById(req.params.id)
        .then(course => {
            course.name = req.body.name;

            course.save()
                .then(() => res.json('course updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })

        .catch(err => res.status(400).json('Error: ' + err));
}

const addCourse = async (req, res)=>{

    const name = req.body.name;
    
    const newCourse = new courseModel({
        name
    })

    try{    
        await newCourse.save()
        res.json({name:"added a new authentication"})

    }catch(e){
        res.json("Course already exists")
    }        
    
    
}

module.exports = {listCourses, addCourse, findCourse, deleteCourse, updateCourse}