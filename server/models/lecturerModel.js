const mongoose = require('mongoose')

const schema = mongoose.schema

const lecturerSchema = new mongoose.Schema({
    authenticationId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Authentication',
        required: true
    },
    name: {
        type: String,
        required: true, //means name is required
        trim: true //trims off the spaces left in a string if any
    }
})

const Lecturer = mongoose.model('Lecturer' , lecturerSchema)

module.exports = Lecturer