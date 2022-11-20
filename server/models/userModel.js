const mongoose = require('mongoose')

const schema = mongoose.schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, //means name is required
        trim: true //trims off the spaces left in a string if any
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true})

const User = mongoose.model('User' , userSchema)

module.exports = User