const moduleModel = require('../models/moduleModel')
const courseModel = require('../models/courseModel')

const listModules = (req, res)=>{
    moduleModel.find()
        .populate('courseId')
        .then(modules => res.json(modules))
        .catch(err => res.status(400).json('Error: ' + err));
}

const findModule = (req, res)=>{
    moduleModel.findById(req.params.id)
        .populate('courseId')   
        .then(module => res.json(module))
        .catch(err => res.status(400).json('Error: ' + err));
}


const deleteModule = (req, res)=>{
    moduleModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("module " + req.params.id + " deleted."))
        .catch(err => res.status(400).json('Error: ' + err));
}

const updateModule = (req, res)=>{
    moduleModel.findById(req.params.id)
        .then(module => {
            module.courseId = req.body.courseId;
            module.name = req.body.name;
            module.credits = Number(req.body.credits);

            module.save()
                .then(() => res.json('module updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })

        .catch(err => res.status(400).json('Error: ' + err));
}

const addModule = (req, res)=>{

    const courseId = req.body.courseId;
    const name = req.body.name;
    const credits = Number(req.body.credits);
    
    const newModule = new moduleModel({
        courseId,
        name,
        credits
    })

    newModule.save()
        
    res.json({name:"added a new module"})
    
}

module.exports = {listModules, addModule, findModule, deleteModule, updateModule}