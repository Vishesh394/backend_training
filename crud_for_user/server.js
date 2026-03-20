const express= require('express')
const connectDB=require('./config/db')
require('dotenv').config()


const app=express();
//connect database
connectDB();


//routing for checking if its working or not:
app.get("/",(req,res)=>{
    res.json({
        message: " API is Running"
    })
})

app.listen(5000,()=>{
    console.log(`server is running at http://localhost:5000`)
})

//now routing for the crud operation 
const userRoutes=require("./routes/userRoutes")
app.use(express.json())
