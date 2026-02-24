// ========= Creating a promise and consuming a promise with .then() and .catch()==========
// fetch('https://fakestoreapi.com/products') 
//   .then(response => response.json())
//   .then(data => console.log(data));


// const { response } = require("express")

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())            
//             .then(json=>console.log(json))

// ================ Async and await===============
/** 
async function fetchData(){
    try{
        const reponse= await fetch('https://fakestoreapi.com/products/1')
        const data=await response.json
        console.log(data)
    }
    catch(error){
        console.log(`fetch operation failed:${error}`)
    }
}
fetchData()
*/

//================libuv ========
 
console.log("Start")
setTimeout(()=>{
    console.log("Timer")   //libuv handles timer internally.
}, 5000)
console.log("end")

