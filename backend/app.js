 //imorting the local modules (math.js)
/**
const math=require('./math')
console.log(math.add(10,20))
console.log(math.multiply(5,6))
 */

//====== CRUD Operation =========
/**
//===Creating folder====

const{error}= require("console")
const fs=require("fs")
fs.mkdir('newfolder', (error)=>{
    if(error) throw error
    console.log('folder create')
})
 */
/**
// ======= Creating File =======

const{error}= require("console")
const FileSystem=require("fs")  
FileSystem.writeFile("newfolder/example.txt", 'Hello', (error)=>{
    if(error) throw error
    console.log('file written successfully')
})

 */

/*
//======= Read file =====
// const{error}=require("console")
const fs=require('fs')
fs.readFile("backend/newfolder/example.txt",'utf-8',(error,data)=>{
    if(error){
        console.log("The file is empty!!!")
    }
    console.log(data)
})
*/

//====== APPEND FILE: ADD CONTENT TO THE FILE ========
/*
const fs=require('fs')
fs.appendFile("newfolder/example.txt", "\n Oh shit!! Here we go again.", (error)=>{
    if(error) throw error
    console.log("Content Appended!!")
})
*/

//========= Delete file ======
/*
const fs=require("fs")
fs.unlink("newfolder/exam.txt",(error)=>{
    if(error){
        console.log("Opps!! No such file exits.")
    }
    console.log("file deleted!!")
})
*/

//=============Delete the folder =======
/*
const fs=require("fs")
fs.rmdir("newfolder", (error)=>{
    if(error){
        console.log("No such folder exists!!")
    }
    console.log("Folder deleted!!")
})
*/

// 24-FEB-2026
// ====== PATH MODULES =====
/*
const fs=require("fs") //using file system module
const path=require("path") //using path module

const filePath=path.join(__dirname, 'data', 'users.json') //this gives the absolute path of our file(users.json)
console.log(filePath)

fs.readFile(filePath,'utf-8',(error,data)=>{
    if(error){
        console.log("the file is empty!")
        return
    }
    // cosnole.log("the file is empty")
    console.log(data)
    console.log("successfull!!")
})
*/

//                                  ======== OS Modules ======
// const os=require("os")

/*
//platform
console.log(`platform: ${os.platform()}`)

//arch
console.log(`Architecture:${os.arch()}`)

// CPU cores
console.log(`CPU cores: ${os.cpus().length}`)

//total memory(in bits)
console.log(`total memory:${os.totalmem()}`) //gives memory in bytes

//total memory(in GB)
console.log(`toal memory(GB):${(os.totalmem()/(1024**3)).toFixed(2)}`)

//free mememory
console.log(`total free memory:${(os.freemem()/(1024**3)).toFixed(2)}`)

//checking or passing message after rquirement fullfilled or not 
const totalMemory=(os.totalmem()/(1024**3).toFixed(2))
console.log(totalMemory)
if(totalMemory<16){
    console.log('System does not meet minimum requirements')
}
else{
    console.log('system is good to run the application')
}
*/

//============= HTTP MODULES ===========
/*
const http=require('http')
const server=http.createServer((request,response)=>{
    response.write('welcome!!! \n OH SHIT HERE WE GO AGAIN')
    response.end()
})
server.listen(5000,()=>console.log('the server is running on http://localhost:5000'))
*/
/* == another way ==
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response
  res.end("Hello! This is my HTTP Server 🚀");
});

// Start server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/
//==== routing multiple pages ===
/*
const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.end("Home Page")
    }
    if(req.url=='/about'){
        res.end("About")
    }
    if(req.url=='/services'){
        res.end("Services")
    }
    if(req.url=='/contacts'){
        res.end("Contacts")
    }
})
const PORT=3000
server.listen(PORT,()=>{console.log("Server is runnig on http://localhost:3000")})
*/

//==setting response header==
/*
//handling response in text form
const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'}) //sending data text 
    res.end('<h1>Hello World!!</h1>')
})

const PORT=3000
server.listen(PORT,()=>{console.log("Server is runnig on http://localhost:3000")})
*/
//handling response in json format:
/*
const http=require('http')
const server=http.createServer((req,res)=>{
    const data={
        fullname: "admin",
        email: "admin@gmail.com"
    }
    res.writeHead(200,{'content-type':'application/json'}) //used or sending the text data on the webpage 
    res.end(JSON.stringify(data))
})
const PORT=3000
server.listen(PORT,()=>{console.log("Server is runnig on http://localhost:3000")})
*/

//25-FEB-2026
//============== JSON Placeholder ==========\
/*
const { application } = require('express')
const data=require('./api.json')
const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(404,{'content-type':' application/json'})
        res.end(JSON.stringify(data))

    }
})
server.listen(3000,()=>{
    console.log("Server is runnig on http://localhost:3000")
})
*/
//============== read data from the file using api ================
/*
const fs=require('fs')
const http=require('http')
const server=http.createServer((req,res)=>{
   if(req.url==='/'){
    res.end("Home page ")
    // 
   }
   else if(req.url==='/users'){
    fs.readFile('api.json', 'utf-8',(error,jsonData)=>{
        if(error){
            console.log(error)
            return
        }
        res.end(jsonData)
    })
    
   }
})

server.listen(3000,()=>{
    console.log("Server is runnig on http://localhost:3000")})

*/
