const express = require('express');
const dotenv = require('dotenv').config()

const app = express();

app.listen(3000, ()=>console.log("Server started"))

console.log("hello world");

app.get('/', function (req, res){
    res.render('index', {});
});