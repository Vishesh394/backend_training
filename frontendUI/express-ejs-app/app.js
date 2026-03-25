const express = require("express")
const path = require("path")
const app = express()

//view from MVC: Model View Controller
//for small level: we can
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')))

app.get("/", (req, res) => {
    // res.render('index',{fullname: "Pankaj"})
    // res.render('index',{isLoggedIn:true})  //conditions 

    //passing array instead of a normal variable:
    res.render('index', { users: ['rahul', 'vikas', 'ajay', 'rohan'] })

})

app.get("/about", (req, res) => {
    res.render('about')
})

app.get("/services", (req, res) => {
    res.render('services')
})

app.get("/contact", (req, res) => {
    res.render('contact')
})

app.listen(3000, () => console.log("Server is running on http://localhost:3000"))
