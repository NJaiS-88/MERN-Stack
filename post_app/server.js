const express = require("express");
const connectDB = require('./src/db/db');
require('dotenv').config();

const app = require("./src/app");
connectDB();

app.listen(3000, (req, res)=>{
    console.log("server has started at 3000");
})