const mongoose = require('mongoose');

async function connectDB(){
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected successfully");
    }catch(error){
        console.log("database connection error:", error);
    }
}

module.exports = connectDB;