const express = require("express")
const connecttoDb = require("./utils/db")
const messageRouter = require("./router/order.routes")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())


app.use("/api/Order/", messageRouter)





app.listen(PORT, () => {
    try {
        console.log("Server is running")
        connecttoDb()
    } catch (error) {
        console.log("Internal server Error")
    }
})