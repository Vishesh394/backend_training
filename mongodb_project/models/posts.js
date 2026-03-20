const mongoose= require('mongoose')
const userSchema=new mongoose.Schema({
    title:String,
    userId:mongoose.Schema.Types.ObjectId
})
module.exports=mongoose.model("Posts", postSchema)
