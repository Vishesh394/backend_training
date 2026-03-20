const  mongoose =require('mongoose')
//creating schema:it define the structure of our MongoDB data.
//  == this is for products =======
const productSchema=new mongoose.Schema({
    title: String,
    Category:String,
    price: Number,
    stock:Number,
    rating:Number

})
module.exports=mongoose.model("product",productSchema)

