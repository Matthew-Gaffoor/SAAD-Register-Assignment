const mongoose = require('mongoose')

const schema = mongoose.schema

const groupSchema = new mongoose.Schema({
    lecturerId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Lecturer',
        required: true
    },
    name: {
        type: String,
        required: true, //means name is required
        trim: true //trims off the spaces left in a string if any
    }
})

const Group = mongoose.model('Group' , groupSchema)

module.exports = Group