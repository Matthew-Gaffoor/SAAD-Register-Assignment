const mongoose = require('mongoose')
const connectDB = async()=>{
    try{
        const conn = mongoose.connect(process.env.MONGO_URI)
    console.log('database connection established');
}catch{
    console.log(error);
}
    
}
module.exports = connectDB