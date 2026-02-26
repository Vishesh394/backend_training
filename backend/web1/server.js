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

// /* NOT WORKING----


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
// */

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