const mongoose = require('mongoose')

const schema = mongoose.schema

const authenticationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, //means name is required
        trim: true //trims off the spaces left in a string if any
    },
    password: {
        type: String,
        required: true, 
        trim: true
    }
}, {timestamps: true})

const Authentication = mongoose.model('Authentication' , authenticationSchema)

module.exports = Authentication