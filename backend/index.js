require("dotenv").config();
const express=require('express');  //using express in this file
const app=express(); //create a variable 

const PORT=process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Api working!")
})

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`);
});


//========================Difference b/w vanila script and ES6(ECHMA script 6)==========================
/** var n1=2
var n2=3
var sum=n1+n2
console.log("sum="+sum)  //In vanila
console.log(`product of ${n1} and ${n2} is ${n1*n2}`) //In es6 
**/ 
//===============Functions======================
/**
//Name functions: (in vanila script)

function greet() //function definition
{   console.log('name function')
    console.log('welcome students')
}
greet() //function calling


function greet(fullname)
{
    console.log(`Welcome: ${fullname}`) //use ES6
}
greet('Dhaliwal')

//anonmous function:

const wish=function(message){
    console.log(message)
}
wish("hello students")

//arrow function:
*/
//====================Diff b/w name , arrow ==================
//name function: return statement is required 
function add(n1,n2){
s=n1+n2; 
return s
}
console.log(`sum=${add(33,35)}`)

//arrow function: for single calculation no return statement required.
const product=(a,b)=>a*b
console.log(`product=${(44,20)}`)


//=====================Rest parameter=========
/** 
// rest parameters(...)
// allows to reprsent an indefinite number of function argument as an Array.

// const show=(...rest)=>{
//     console.log(n1)
//     console.log(n2)
//     console.log(n3)
//     console.log(rest)

// }
// show(10,2,3,4,5,6,7)

//return an array
const show=(...rest)=>{

    console.log(rest)

}
show(10,2,3,4,5,6,7)
**/

//===================DESTRUCTURING=================
/** 
// destructuring allow us to extract value from array or object to variable in clean,shorter way.

//extracting values from array
const numberList=[10,20,30,40,50]
const[n1,n2,n3,n4,n5]=numberList
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
console.log(n5)

//extracting values from object

const UserData={ //object definition
    fullname:"admin", //key: value
    email:"admin@gmail.com",
    phone:12345678,
    city:"mohali"
}
console.log(UserData) //access whole object 
//concept of vanila scrip:
console.log(UserData.fullname) //individual access
console.log(UserData.email) //individual access
console.log(UserData.phone) //individual access
console.log(UserData.city) //individual access

//want to acess individually in single line use: DESTRUCTURING()

const{fullname,email,phone,city}=UserData
console.log(`fullname=${fullname}`)
console.log(`email=${email}`)
console.log(`Phone=${phone}`)
console.log(`City=${city}`)
**/
//========SPREAD OPERATOR===================
/** 
// allow you to expand(spread) the element of an array, string, or object into individual elements
// -spread inside an array

const numberList=[1,2,3]
// const newList=[number,10,20,30]  //gives ERROR
const newList=[...numberList,10,20,30] //using spread operator(...spread)
console.log(newList)
**/

//Adding new data in the object
const UserData={ //object definition
    fullname:"admin", //key: value
    email:"admin@gmail.com",
    phone:12345678,
    city:"mohali"
}
UserData.pin=140307 //intead of doing this
console.log(UserData)
console.log({...UserData,Billa_no:786,blood:'O'}  )  //we can do this (using Spread operator)
