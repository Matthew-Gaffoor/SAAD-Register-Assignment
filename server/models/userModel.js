const mongoose = require('mongoose')

const schema = mongoose.schema

const userSchema = new mongoose.Schema({
    authenticationId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Authentication',
        required: true
    },
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

const User = mongoose.model('Pser' , userSchema)

module.exports = User