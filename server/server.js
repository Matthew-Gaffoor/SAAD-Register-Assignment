const express = require('express');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connDB = require('./database')
const app = express()

connDB()


//might need cors 
app.use(express.json()); //necessary for the post requests

app.get('/', (req, res) => {
    res.send("<h1> Hello </h1>");
})

app.use('/user', require('./routes/userRoute')) //allows the specific route to be used under the /user tag
app.use('/authentication', require('./routes/authenticationRoute')) 



app.listen(port, ()=>{
    console.log("Server started")
});


