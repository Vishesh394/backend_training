require("dotenv").config()
const express = require("express")
const connectDB = require("./config/db")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const userRoutes = require("./routes/userRoutes")
const MongoStore = require('connect-mongo').default

const app = express()
connectDB()

//MODDLEWARES : INSIDE APP.USE()
app.use(express.json())
app.use(cookieParser())
app.use(session({ //MIDDLE WARE
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,  //property name
    store: MongoStore.create({
        mongoUrl: "mongodb://127.0.0.1:27017/roleDB"

    }),
    cookie: {
        maxAge: 60 * 60 * 1000, //1 hour
        httpOnly: true
    }
}))
app.use("/api/auth", userRoutes)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:5000")
})


