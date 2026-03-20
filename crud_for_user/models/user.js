const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:[true, "Full Name is required"],
        minlength:[3,"Name must be atleast 3 characters"]  
        },
        email:{
            type:String,
            required:[true,"Email is required"],
            unique: true
        },
        age:{
            type:Number,
            min:[18,"Age must be atleast 18"],
            max:[60,"Age must be below 60"]
        }
    
})
module.exports=mongoose.model("User",userSchema)
