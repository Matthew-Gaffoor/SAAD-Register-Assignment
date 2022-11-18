const express = require('express');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const app = express()

const AuthRoute = require('./routes/auth')

app.get('/', (req, res) => {
    res.send("<h1> Hello </h1>");
})

app.listen(port, ()=>{
    console.log("Server started")
});

app.use('/api', AuthRoute)
console.log("hello world");

