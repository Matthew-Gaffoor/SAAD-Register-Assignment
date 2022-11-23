const mongoose = require('mongoose')

const schema = mongoose.schema

const registrationSchema = new mongoose.Schema({
    moduleId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Module',
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Course',
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Student',
        required: true
    },
    groupId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Group',
        required: true
    },
    date: {
        type: Date,
        required: true, //means name is required
        default: false
    },
    present: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

const Registration = mongoose.model('Registration' , registrationSchema)

module.exports = Registration