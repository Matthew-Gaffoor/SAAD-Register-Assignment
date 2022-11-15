const express = require('express');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
    res.send("<h1> Hello </h1>");
})

app.listen(port, ()=>{
    console.log("Server started")
});

console.log("hello world");

