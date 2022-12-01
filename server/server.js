const express = require('express');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connDB = require('./database')
const app = express();
const path = require('path');
const cors = require("cors");
const mongoose = require('mongoose');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credential');




app.use(credentials);

app.use(cors(corsOptions));

connDB();


//might need cors 
app.use(express.json()); //necessary for the post requests

app.get('/', (req, res) => {
    res.send("<h1> Hello </h1>");
})

app.use('/user', require('./routes/userRoute')) //allows the specific route to be used under the /user tag
app.use('/authentication', require('./routes/authenticationRoute')) 
app.use('/student', require('./routes/studentRoute')) 
app.use('/lecturer', require('./routes/lecturerRoute')) 
app.use('/group', require('./routes/groupRoute')) 
app.use('/course', require('./routes/courseRoute')) 
app.use('/module', require('./routes/moduleRoute')) 
app.use('/registration', require('./routes/registrationRoute')) 
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));


app.use('/employees', require('./routes/api/employees'));

app.listen(port, ()=>{
    console.log("Server started")
});


