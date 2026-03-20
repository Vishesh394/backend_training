const mongoose =require('mongoose')
//function for connecting with mongodb compass: 
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/dbauth")
        console.log("MongoDB connected successfully")

    }
    catch(error){
        console.error("MOngoDB connection failed:", error)
        process.exit(1)

    }
}
module.exports=connectDB;
