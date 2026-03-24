const express=require("express")
const app=express()

//view from MVC: Model View Controller
//for small level: we can
app.set('view engine','ejs')
app.get("/", (req,res)=>{
    // res.render('index',{fullname: "Pankaj"})
    // res.render('index',{isLoggedIn:true})  //conditions 

    //passing array instead of a normal variable:
    res.render('index',
    {isLoggedIn:true},
    {users:['rahul','vikas','ajay','rohan']})

})
app.listen(5000,()=>console.log("Server is running on http://localhost:3000"))
