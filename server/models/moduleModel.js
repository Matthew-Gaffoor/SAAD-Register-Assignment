const mongoose = require('mongoose')

const schema = mongoose.schema

const moduleSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Course',
        required: true
    },
    name: {
        type: String,
        required: true, //means name is required
        trim: true //trims off the spaces left in a string if any
    },
    credits: {
        type: Number,
        required: true
    }
})

const Module = mongoose.model('Module' , moduleSchema)

module.exports = Module