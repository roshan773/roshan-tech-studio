const express = require("express")
const connectToDb = require("./utils/DB")
const userRouter = require("./router/user.routes")
require("dotenv").config()

const app = express()

app.use("/api/user/", userRouter)







app.listen(process.env.PORT, async() => {
    try {
        await console.log("Server is Running")
        await connectToDb()
    } catch (error) {
        
    }
})