const User=require("../models/user")

const validateUser=async(req,res,next)=>{
    try{
        const user=new User(req.body)
        await user.validate()
        next()
    }
    catch(error){
        res.json({
            success:false,
            errors: error
        })
    }
}
module.exports=validateUser
