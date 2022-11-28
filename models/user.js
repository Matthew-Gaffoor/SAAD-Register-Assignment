const mongoose  = require('mongoose')
const schema    = mongoose.schema
const userSchema = new mongoose.Schema({
    name: {
        type: String
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