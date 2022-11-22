const mongoose = require('mongoose')

const schema = mongoose.schema

const studentSchema = new mongoose.Schema({
    authenticationId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Authentication'
    },
    name: {
        type: String,
        required: true, //means name is required
        trim: true //trims off the spaces left in a string if any
    },
    age: {
        type: Number,
        required: true,
    },
    sex: {
        type: String,
        required: true, 
        trim: true
    }
}, {timestamps: true})

const Student = mongoose.model('Student' , studentSchema)

module.exports = Student