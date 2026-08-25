require('dotenv').config();
connectDB = require('./src/db/db');
const app = require('./src/app');

app.listen(3000, ()=>{
    connectDB();
    console.log("server is running on port 3000");
})