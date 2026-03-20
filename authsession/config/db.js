const mongoose=require("require")
const connectDB=async()=>{
    try{
        await mongoose.connect(ProcessingInstruction.env.MONGO_URI)
        
    }
}