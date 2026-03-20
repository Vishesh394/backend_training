const mongoose = require('mongoose')
const orderSchema=new mongoose.Schema({ //SCHEMA:structure of utilization
    customer:String,
    product:String,
    price:Number,
    status:String,
    quantity:Number
    
})
//model
const Order=mongoose.model("Order", orderSchema)  //this is the model 
module.exports = Order;
