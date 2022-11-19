const express = require('express');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connDB = require('./database')
const app = express()

connDB()

app.get('/', (req, res) => {
    res.send("<h1> Hello </h1>");
})

app.listen(port, ()=>{
    console.log("Server started")
});


