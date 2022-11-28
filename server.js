const express = require('express');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const app = express()

const AuthRoute = require('./routes/auth')

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/reactapp/public/index.html');
});

app.listen(port, ()=>{
    console.log("Server started")
});

