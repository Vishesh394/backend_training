const  mongoose =require('mongoose')

//=== STUDENTS DATABASE SCHEMA : Performing operation using reqular expression =====

const studentSchema= new mongoose.Schema({
    name:String,
    age:Number,
    course:String
})
const Student=mongoose.model("Student", studentSchema)
module.exports=Student;
