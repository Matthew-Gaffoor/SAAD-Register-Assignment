const userModel = require('../models/userModel')

const listUsers = (req, res)=>{
    userModel.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
    // res.send("Listing users...")
}

const addUser = (req, res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    const newUser = new userModel({
        name,
        email,
        password
    })

    newUser.save()
    
    // const user = userModel.create({name:"test", email:"test@test.com", password:"testpassword"})
    
    res.json({name:"added a new user"})
    
}

module.exports = {listUsers, addUser}