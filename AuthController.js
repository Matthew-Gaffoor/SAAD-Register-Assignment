const User  = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const register = (req,res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if(err) {
            res.json({
                error: err
            })
        }
        let user = new User ({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        user.save()
        .then(user => {
            res.json({
                message: 'User Successfully Added'
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
        })
    })  
}
const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email:username}]})
    .then(then => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'Hashed', {expiresIn: '9h'})
                    res.json({
                        message: 'Login Successful',
                        token
                    })
                }else{
                    res.json({
                        message: 'Incorrect Password'
                    })
                }
            })
        }else{
            res.json({
                message: 'No User Found'
            })
        }
    })

    User.find
}

module.exports = {
    register
}