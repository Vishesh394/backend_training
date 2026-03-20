//========routing in express(WITHOUT using http module) =======
// PORT=3000
// const express=require("express")
// const app=express()
/*

        //here there is no need of http module( if and else ), just simply write app.get which is in express.js
app.get("/", (req,res)=>{
    res.send("Hii!! Api is working")
})
app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>")
})
app.get("/services",(req,res)=>{
    res.send("<h1>SERVICES PAGE</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("")
})
app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`+ `http://localhost:${PORT}`)
})
*/

// ================== rendering text or html componets in express js ============

// serve static files
/*
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
*/


//26-FEB-2026
// ======= Query and id' =====
/*

const express=require("express")
const path=require('path')
const app = express();
const PORT = 5000; 
const staticPath=path.join(__dirname,'public')
app.get("/about",(req,res)=>{
    res.sendFile(`${staticPath}/about.html`)
})
app.get("/users/:id",(req,res)=>{
    const taskId=req.params.id
    res.json({
        Message:"Task Fetched",
        id:taskId
    })
})

app.listen(PORT,()=>{
    console.log(`Server is runnig at http://localhost:${PORT}`)
})
*/


// ======Multiple parameter =======

/* NOT WORKING----


const express=require("express")
const path=require("path")
const app=express()
const PORT=5000
const staticPath=path.join(__dirname,"public")
app.get("/about",(req,res)=>{
    res.sendFile(path.join(staticPath,"about.html"))
})
app.get("contact/:contactId/post/:postId", (req,res)=>{
    const{contactId,postId}=req.params.id
    res.json({
        contactId: contactId,
        postId:postId
    })
})
app.listen(5000,()=>{
    console.log("server is running on http://localhost:5000")
})
*/

//======vaidating parameter===============
// ........................



//====Query parameter ================
/*
const express=require("express")
const path=require('path')
const app=express()
// const PORT=5000
// const staticPath=path.join(__dirname,'public')
app.get("/users/:userId",(req,res)=>{
    const userId=parseInt(req.params.userId)
    if(isNaN(userId)){
        return res.json({
            message:"Invalid Id"
        })
    }
})
app.get("/tasks",(req,res)=>{
    res.json(req.query)
})
app.listen(5000,()=>{
    console.log("server is running on http://localhost:5000")
})
*/

//================ task problem ==============
/*
const express=require("express")
const app=express()
const path=require('path')
const staticpath=path.join(__dirname,'public')
app.get("/users/:userId",(req,res)=>{
    const userId=parseInt(req.params.userId)
    if(isNaN(userId)){
        return res.json({
            message:"Invalid Id"
        })
    }

    res.json({
        message:"User fetched",
        userId
    })
})
app.get("/tasks", (req,res)=>{
    const tasks=[
        {id:1,title:"task1",completed:true},
        {id:2,title:"task2",completed:true},
        {id:3,title:"task3",completed:false},
        {id:4,title:"task4",completed:true},
        {id:5,title:"task5",completed:false}
    ];
    // filtering the task
    let filteredTasks=[...tasks]
     if(req.query.completed){
        const isCompleted=req.query.completed==='true'
        filteredTasks=filteredTasks.filter((tasks)=> tasks.completed=== isCompleted)
        
    }
    res.json(filteredTasks)
})
app.listen(5000,()=>{
    console.log(" the server is listening on http://localhost:5000")
})

*/

//27-FEB-2026
//=================== ASSIGNMENT: 2 ==============
/* Incomplete: have to do for other urls
const express=require("express")
const app=express()
const products=[
    {pid:1,title:"monitor",price:4999},
    {pid:2,title:"keyboard",price:999},
    {pid:3,title:"mouse",price:499},
    {pid:4,title:"speakers",price:1499},
    {pid:5,title:"hrad-phones",price:599},
]
//route

app.get("/products",(req,res)=>{
    // console.log(req.query)
    let filteredProducts=[...products]
    if(req.query.maxPrice){
        const maxPrice=parseFloat(req.query.maxPrice)
        filteredProducts=filteredProducts.filter(
            (product)=> product.price<maxPrice
        )
    }
    res.json(filteredProducts)
  
   
})
app.listen(5000,()=>{
    console.log("the server is responding on http://localhost:5000")

})
*/

//================= Middle ware : ex: AGE DETECTOR ======
/*
const express=require('express')
const app=express()
const ageDetector=(req,res,next)=>{
    const age=parseInt(req.query.age)
    if(age<18){
        return res.json({message:"You are under age!!"+"You must be 18+"})
    }
    next()
}
app.get("/auth", ageDetector,(req,res)=>{
    res.json({message:"Access Granted!"})
})
app.listen(5000,(req,res)=>{
    console.log("the server is runng on http://localhost:5000 ")
})
*/
//==============Middle ware for login check ==========
/*
const express=require('express')
const app=express()
const checkAuthentication=(req,res,next)=>{
    const isLoggedIn =req.query.isLoggedIn
    if(isLoggedIn!=="true"){
        return  res.send("Unauthorized!! You are not logged In")
    }
    next()
}
app.get("/dashboard", checkAuthentication,(req,res)=>{
    res.json({Message:"Welcomwe to dashboard"})
})
app.listen(5000,(req,res)=>{
    "the server is runnig on : http://localhost:5000"
})
*/

//==== passing query parameter for checking authentication====
/*
1. pass the user id and passward
2. if id and passs invalid res= message: invlaid user id or password
3.if both are correct the next() dashboard and pass message as welcome to dash board
*/
/* NOT WORKING ------

const express=require ('express')
const app=express()
const checkAuthentication=(req,res)=>{
    const pass=req.query
if(pass!="pass234")
    {
        return res.json({Message:"Invalid or missing password!!"})
    }
    next()
}

app.get("/dashboard",checkAuthentication,(req,res)=>{
    res.json({Message: "welcome to dashboard :D"})
})

*/

//*------------Crud Operation------------*
//express crud without database
//c-create
//r-read
//u-update
//d-delete
const express=require('express')
const app=express()
app.use(express.json())
let productList=[]
app.post("/createProducts",(req,res)=>{
    const newProduct = {
        pid:productList.length+1,
        name:req.body.name,
        price:req.body.price
    }
    productList.push(newProduct)
    res.json({
        message:"Product added successfully",
        product : newProduct
    })
})
app.listen(5000,()=>{
    console.log("Server is running on port http://localhost:5000")
})

app.get
