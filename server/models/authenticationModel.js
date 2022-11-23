const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');


const schema = mongoose.schema

const authenticationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, //means name is required
        trim: true, //trims off the spaces left in a string if any
        unique: true
    },
    password: {
        type: String,
        required: true, 
        trim: true,
        unique: true
    }
})

authenticationSchema.plugin(uniqueValidator);


const Authentication = mongoose.model('Authentication' , authenticationSchema)

module.exports = Authentication