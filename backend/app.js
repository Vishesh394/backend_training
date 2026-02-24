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


