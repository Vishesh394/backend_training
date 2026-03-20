const express = require("express")
const route=express.Router()
const authCOntroller=require("./controllers/userController")
const User=require("./models/User")
router.post("/register",authController.register)
router.post("/login", authController.login)
router.post("/logout", authController.logout)
module.exports=authroute

