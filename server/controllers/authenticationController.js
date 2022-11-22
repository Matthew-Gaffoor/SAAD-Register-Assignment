const authenticationModel = require('../models/authenticationModel')

const listAuthentications = (req, res)=>{
    authenticationModel.find()
        .then(authentication => res.json(authentication))
        .catch(err => res.status(400).json('Error: ' + err));
}

const findAuthentication = (req, res)=>{
    authenticationModel.findById(req.params.id)
        .then(user => res.json(user))
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
                .then(() => res.json('user updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })

        .catch(err => res.status(400).json('Error: ' + err));
}

const addAuthentication = (req, res)=>{

    const username = req.body.username;
    const password = req.body.password;
    
    const newAuthentication = new authenticationModel({
        username,
        password
    })

    newAuthentication.save()
        
    res.json({name:"added a new authentication"})
    
}



module.exports = {listAuthentications, addAuthentication, updateAuthentication, deleteAuthentication, findAuthentication}