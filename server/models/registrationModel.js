const mongoose = require('mongoose')
    
const schema = mongoose.schema

const registrationSchema = new mongoose.Schema({
    registration_name: {
        type: String,
        required: true, //means name is required
        trim: true //trims off the spaces left in a string if any
    },
    user: {
        type: String
    },
    lecturer: {
        type: String
    },
    date: {
        type: Date
   } 
}, {timestamps: true})

const Registration = mongoose.model('Registration' , registrationSchema)

module.exports = Registration