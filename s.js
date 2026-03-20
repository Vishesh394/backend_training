// for(let x=1;x<=5;x++){
//     console.log(x)
// }
// console.log(x) //x is not defined

//------------- project function ----------

// app.get("/order",async(req,res)=>{
//     const order=await Order.aggregate([
//         {$project:
//             {
//              customer:1,
//              price:1,
//              quantity:1,
//              Amount:{$multiply:["$price","$quantity"]}
//             }
//         }
//     ])
//     res.json(order)
// })

//------------ Add 18% tax -------------

// app.get("/order",async(req,res)=>{
//     const order=await Order.aggregate([
//         {$project:
//             {
//              customer:1,
//              price:1,
//              quantity:1,
//              Amount:{$multiply:["$price","$quantity"]},
//              totalWithTax:{$multiply:["$price","$quantity",1.18]}
//             }
//         }
//     ])
//     res.json(order)
// })

//--------------- Discount -----------

// app.get("/order",async(req,res)=>{
//     const order=await Order.aggregate([
//         {$project:
//             {
//              customer:1,
//              price:1,
//              quantity:1,
//              Amount:{$multiply:["$price","$quantity"]},
//              Discount:{$multiply:["$price","$quantity",0.10]},
//              Payment:{$subtract:[{$multiply:["$price","$quantity"]},{$multiply:["$price","$quantity",0.10]}]}
//             }
//         }
//     ])
//     res.json(order)
// })

//---------------------------------


app.get("/order",async(req,res)=>{
    const order=await Order.aggregate([
        {$match:{status:"shipped"}},
        {$project:
            {
             _id:0,
             customer:1,
             price:1,
             quantity:1,
             Amount:{$multiply:["$price","$quantity"]},
             Discount:{$multiply:["$price","$quantity",0.10]},
             Payment:{$subtract:[{$multiply:["$price","$quantity"]},{$multiply:["$price","$quantity",0.10]}]}
            }
        }
    ])
    res.json(order)
})