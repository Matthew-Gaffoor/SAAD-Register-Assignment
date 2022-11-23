const userModel = require('../models/userModel')
const authenticationModel = require('../models/authenticationModel')

const listUsers = (req, res)=>{
    userModel.find()
        .populate('authenticationId')   
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
}

const findUser = (req, res)=>{
    userModel.findById(req.params.id)
        .populate('authenticationId')   
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
}

const deleteUser = (req, res)=>{
    userModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("user " + req.params.id + "deleted."))
        .catch(err => res.status(400).json('Error: ' + err));
}

const addUser = (req, res)=>{

    const authenticationId = req.body.authenticationId;

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    const newUser = new userModel({
        authenticationId,
        name,
        email,
        password
    })

    newUser.save()
    
    // const user = userModel.create({name:"test", email:"test@test.com", password:"testpassword"})
    
    res.json({name:"added a new user"})
    
}

const updateUser = (req, res)=>{
    userModel.findById(req.params.id)
        .then(user => {
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.name;

            user.save()
                .then(() => res.json('user updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })

        .catch(err => res.status(400).json('Error: ' + err));
}


module.exports = {listUsers, addUser, findUser, deleteUser, updateUser}