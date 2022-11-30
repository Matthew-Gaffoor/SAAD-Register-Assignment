const authenticationModel = require('../models/authenticationModel')

const listAuthentications = (req, res)=>{
    authenticationModel.find()
        .then(authentication => res.json(authentication))
        .catch(err => res.status(400).json('Error: ' + err));
}

const findAuthentication = (req, res)=>{
    authenticationModel.findById(req.params.id)
        .then(authentication => res.json(authentication))
        .catch(err => res.status(400).json('Error: ' + err));
}

const deleteAuthentication = (req, res)=>{
    authenticationModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("authentication " + req.params.id + "deleted."))
        .catch(err => res.status(400).json('Error: ' + err));
}

const updateAuthentication = (req, res)=>{
    authenticationModel.findById(req.params.id)
        .then(authentication => {
            authentication.username = req.body.username;
            authentication.password = req.body.password;

            authentication.save()
                .then(() => res.json('authentication updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })

        .catch(err => res.status(400).json('Error: ' + err));
}

const addAuthentication = async (req, res)=>{

    const username = req.body.username;
    const password = req.body.password;
    
    const newAuthentication = new authenticationModel({
        username,
        password
    })
    try{
        await newAuthentication.save()
        res.json({name:"added a new authentication"})

    }catch(e){
        res.json("please change your username and password")
    }
            
}



module.exports = {listAuthentications, addAuthentication, updateAuthentication, deleteAuthentication, findAuthentication}

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