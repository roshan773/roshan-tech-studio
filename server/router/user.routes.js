const express = require("express")
const userController = require("../controller/user.controller")
const userRouter = express.Router()


userRouter.get("/test", userController.test)
userRouter.post("/register", userController.register)


module.exports = userRouter