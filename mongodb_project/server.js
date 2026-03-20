const express=require('express')
const connectDB=require('./config/db')
// app.use(espress.json());
const app=express()
//connect database
connectDB();
//routing : check if server is running or not:
app.get('/',(req,res)=>{
    res.send("server is running and MongoDb is connected")

})
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
/* //============= CRUD OPERATION =============
//POST API(Insert data/ add data to database)
const Product=require('./models/Products')
app.post('/add-product',async(req,res)=>{
    try{
        const product=new Product({
            title:"Laptop",
            Category:"Elecronics",
            price:6000,
            stock:10
        });
        const savedProduct= await product.save();
        res.send(savedProduct);

    }
    catch(error){
        res.send(error)
    }
})

//GET API(Read data/get data from database)
app.get('/products',async(req,res)=>{
    try{
        const products=await Product.find();
        res.send(products);
    }
    catch(error){
        res.send(error)
    }
})

//PUT API(Update data/update data in database)
app.put('/update-product/:id',async(req,res)=>{
    try{
        const updateProduct=await Product.findByIdAndUpdate(req.params.id,
            {price:5000},
            {new:true}
        );
        res.send(updateProduct);

    }
    catch(error){
        res.send(error);
    }
});

//DELETE API(Delete data/delete data from database)
app.delete('/delete-product/:id',async(req,res)=>{
    try{
        const deleteProduct=await Product.findByIdAndDelete(req.params.id);
        res.send(deletedProduct);  
    }
    catch(error){
        res.send(error);
    }
})
*/
//==== use multiple queries(Pending) ======

/*
//06-MARCH-2026
//==============REGULAR EXPRESSION ================
//Students Data: now we have to perform $regex queries in this route:

//20 student's data inserted 
const Student=require('./models/studentDB');
const { get } = require('mongoose');
app.post('/add-studentData',async(req,res)=>{ //POST API(DATA INSERTION)
    try{
        const students = [
        { name: "Aman", age: 20, course: "Computer Science" },
        { name: "Rohit", age: 21, course: "Mechanical Engineering" },
        { name: "Neha", age: 19, course: "Electrical Engineering" },
        { name: "Ankit", age: 22, course: "Information Technology" },
        { name: "Priya", age: 20, course: "Civil Engineering" },
        { name: "Rahul", age: 23, course: "Computer Science" },
        { name: "Sneha", age: 21, course: "Data Science" },
        { name: "Vishal", age: 22, course: "Artificial Intelligence" },
        { name: "Naman", age: 20, course: "Computer Science" },
        { name: "Karan", age: 24, course: "Mechanical Engineering" },
        { name: "Pooja", age: 19, course: "Electrical Engineering" },
        { name: "Arjun", age: 23, course: "Cyber Security" },
        { name: "Riya", age: 20, course: "Information Technology" },
        { name: "Sahil", age: 22, course: "Data Science" },
        { name: "Komal", age: 21, course: "Civil Engineering" },
        { name: "Varun", age: 23, course: "Artificial Intelligence" },
        { name: "Nisha", age: 20, course: "Computer Science" },
        { name: "Deepak", age: 24, course: "Cyber Security" },
        { name: "Tanya", age: 19, course: "Data Science" },
        { name: "Mohit", age: 22, course: "Information Technology" }
        ];
        const result=await Student.insertMany(students)
        res.json({
            message:"20 students added successfully!!",
            data: result
        })


    }
    catch(error){
        res.status(500).json({error:error.message});
    }
})
// PERFORMING REGULAR EXPRESSION QUERIES :

//find students whose name start with "A"
app.get("/students/startA", async(req,res)=>{
    const students=await Student.find({
        name:{$regex:"^A", $options: "i"}  // ^A: means Name start with A
                                          // "i" : means case insensitive
    })
    res.json(students);
})
// check at: http://localhost:5000/students/startA
//---------------------------------------------------------
//find students whose name ends with "n"
app.get("/students/endn", async (req, res) => {
        const students = await Student.find({
            name:{$regex:"n$", $options:"i"} 
        });

        res.json(students);
    
});
//check at: http://localhost:5000/students/endn
//--------------------------------------------------------

//find the student whose name contains "an"
app.get("/students/containsAn", async(req,res)=>{
    const students=await Student.find({
        name: {$regex:"an",$options:"i"}
    })
    res.json(students);
})
//check at: http://localhost:5000/students/containsAn
//-----------------------------------------------------------

//find student NOT starting with "Na"
app.get("/students/notNa",async(req,res)=>{
    const students=await Student.find({
        name:{$not:{$regex:"^Na",$options:"i"}}
    })
    res.json(students);
})
// check at: http://localhost:5000/students/notNa
//------------------------------------------------------------

//find the student with only 5 letter names
app.get('/students/fiveletter', async(req,res)=>{
   const students= await Student.find({
     name:{$regex:"^.{5}$"}
   })
   res.json(students)
})
//check at: http://localhost:5000/students/fiveletter
//------------------------------------------------------------------

//get top 2 students
app.get("/students/top2", async(req,res)=>{
    const students=await Student.find().limit(2);
    res.json(students);


})
//check at: http://localhost:5000/students/top2
//------------------------------------------------------------------

//get students age>20 and course="Computer Science"
app.get("/students/cs20",async(req,res)=>{
    const students=await Student.find({
        age:{$gt:20},
        course:"Computer Science"
    })
    res.json(students);
})
//check at: http://localhost:5000/students/cs20
//-----------------------------------------------------------------

//list student skipping first 3

app.get("/students/skip3", async(req,res)=>{
    const students= await Student.find().skip(3);
    res.json(students);
})
// check at: http://localhost:5000/students/skip3
// -----------------------------------------------------------------

//list all student age is exactly 22 and 23.
app.get("/students/age22or23", async(req,res)=>{
    const students= await Student.find({
        age: {$in:[22,23]}
    })
     res.json(students);
})
//check at: http://localhost:5000/students/age22or23
//----------------------------------------------------------------
*/

//09_MARCH_2026
//============ AGGREGATION======
/*
const Order=require('./models/orders');  //importing the Order Model
 app.post("/orders", async(req,res)=>{ // adding the data in the database using POST API.
    await Order.insertMany([
        { customer: "Aarav Sharma", product: "Wireless Mouse", price: 899, quantity: 2, status: "Pending" },
        { customer: "Diya Patel", product: "Bluetooth Speaker", price: 2499, quantity: 1, status: "Shipped" },
        { customer: "Rohan Mehta", product: "Laptop Stand", price: 1299, quantity: 3, status: "Delivered" },
        { customer: "Ananya Singh", product: "Mechanical Keyboard", price: 3999, quantity: 1, status: "Cancelled" },
        { customer: "Kabir Verma", product: "USB-C Hub", price: 1799, quantity: 2, status: "Pending" },
        { customer: "Isha Nair", product: "Smart Watch", price: 6999, quantity: 1, status: "Delivered" },
        { customer: "Vivaan Gupta", product: "Phone Case", price: 499, quantity: 4, status: "Shipped" },
        { customer: "Meera Iyer", product: "Power Bank", price: 1499, quantity: 2, status: "Pending" },
        { customer: "Arjun Rao", product: "Webcam", price: 2299, quantity: 1, status: "Delivered" },
        { customer: "Saanvi Joshi", product: "Gaming Headset", price: 3199, quantity: 2, status: "Shipped" },
        { customer: "Aditya Kulkarni", product: "External SSD", price: 5499, quantity: 1, status: "Pending" },
        { customer: "Priya Deshmukh", product: "Monitor 24-inch", price: 10499, quantity: 1, status: "Delivered" },
        { customer: "Yash Malhotra", product: "Desk Lamp", price: 899, quantity: 3, status: "Cancelled" },
        { customer: "Kavya Reddy", product: "Router", price: 2799, quantity: 1, status: "Shipped" },
        { customer: "Neel Banerjee", product: "Office Chair", price: 8499, quantity: 1, status: "Pending" },
        { customer: "Ritika Chawla", product: "Tablet Cover", price: 699, quantity: 5, status: "Delivered" },
        { customer: "Manav Arora", product: "Graphic Tablet", price: 4599, quantity: 1, status: "Shipped" },
        { customer: "Tanvi Kapoor", product: "HDMI Cable", price: 349, quantity: 6, status: "Delivered" },
        { customer: "Siddharth Jain", product: "Air Purifier", price: 11999, quantity: 1, status: "Pending" },
        { customer: "Nisha Agarwal", product: "Mini Projector", price: 8999, quantity: 1, status: "Shipped" }
    ])
    res.send("data inserted successfully")
})
//POST  http://localhost:5000/orders 
//-----------------------------------------
//GET http://localhost:5000/orders
app.get("/orders", async(req,res)=>{
    const order= await Order.find()
    res.json(order)
})

//------------------ Match function ($match) : filtering ---------------------

app.get("/orders/shipped",async(req,res)=>{
    const order=await Order.aggregate([
        {$match:{status:"Shipped"}} 
    ])
    res.json(order)
})
// check at : http://localhost:5000/orders/shipped

//---------------- Group filtering method:-----------------
app.get("/orders/totalquant", async(req,res)=>{
    const orders=await Order.aggregate([
        {$group:{_id:"$customer", totalQuantity:{$sum:"$quantity"}}}
    ])
    res.json(orders)
})

//------------- project function -------------------
app.get("/orders/amount", async(req,res)=>{
    const order= await Order.aggregate([
        {$project:{
            customer:1,
            price:1,
            quantity:1,
            amount:{$multiply:["$price", "$quantity"]}
        }}
    ])
    res.json(order)
})

//--------------- Add 18% tax --------------------

app.get("/orders/tax18", async(req,res)=>{
    const order=await Order.aggregate([])
})

=========================== PENDING ====================

*/
//10_March_2026
//============ KEYS ========
//Add the users to the database: 

const Users=require('./models/users');
app.post("/users/add20",async(req,res)=>{
    try{
         const users = [
            { fullname: "Aman Sharma", email: "aman1@gmail.com", age: 21 },
            { fullname: "Rohit Kumar", email: "rohit2@gmail.com", age: 22 },
            { fullname: "Neha Gupta", email: "neha3@gmail.com", age: 20 },
            { fullname: "Pooja Verma", email: "pooja4@gmail.com", age: 23 },
            { fullname: "Rahul Singh", email: "rahul5@gmail.com", age: 24 },
            { fullname: "Karan Mehta", email: "karan6@gmail.com", age: 25 },
            { fullname: "Simran Kaur", email: "simran7@gmail.com", age: 21 },
            { fullname: "Priya Arora", email: "priya8@gmail.com", age: 22 },
            { fullname: "Ankit Jain", email: "ankit9@gmail.com", age: 23 },
            { fullname: "Vikas Yadav", email: "vikas10@gmail.com", age: 24 },
            { fullname: "Sanya Malhotra", email: "sanya11@gmail.com", age: 20 },
            { fullname: "Aditya Kapoor", email: "aditya12@gmail.com", age: 22 },
            { fullname: "Riya Bansal", email: "riya13@gmail.com", age: 21 },
            { fullname: "Mohit Aggarwal", email: "mohit14@gmail.com", age: 23 },
            { fullname: "Kavita Sharma", email: "kavita15@gmail.com", age: 24 },
            { fullname: "Nitin Verma", email: "nitin16@gmail.com", age: 26 },
            { fullname: "Megha Singh", email: "megha17@gmail.com", age: 22 },
            { fullname: "Deepak Chauhan", email: "deepak18@gmail.com", age: 27 },
            { fullname: "Tanvi Gupta", email: "tanvi19@gmail.com", age: 20 },
            { fullname: "Arjun Patel", email: "arjun20@gmail.com", age: 25 }
        ];
        const result=await Users.insertMany(users);
        res.json({
            message: "20 users inserted successfully",
            data:result 
        })
        
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
})

//-------- 
const Post = mongoose.model('Post', postSchema)
app.post("/posts", async(req,res)=>{
    await Post.insertMany([


 ])
})
