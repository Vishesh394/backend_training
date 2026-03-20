const express=require("express")
const router=express.Router()
const userController=require("../controllers/userControllers")
const validateUser=require("../middleware/validateUser")

router.post("/", validateUser, userController.createUser)


module.exports=router

router.get("/",userController.getUsers)

router.get("/:id",userController.getUsers)

router.put("/:id/update",userController.updateUsers)

router.delete("/:id/delete",userController.deleteUsers)

