const User=require("../models/user")
exports.createUser=async(req,res)=>{
    try{
        const user=await User.create(req.body)
        res.json(user)

    }
    catch(error){
        res.json({
            error:err.message
        })

    }
}

//get all users
exports.getUsers=async(req,res)=>{
    const users=await User.find()
    res.json(users)
}

//get by id 
exports.getUsers=async(req,res)=>{
    const users=await User.findById(req.param.id)
    res.json(users)
}
//update user
exports.updateUsers=async(req,res)=>{
    const users=await User.findByIdAndUpdate(
        req.param.id,
        req.body,
        {new:true}
    )
    res.json(users)
}
//delete user
exports.deleteUsers=async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.json({message:"User Deleted"})
}


