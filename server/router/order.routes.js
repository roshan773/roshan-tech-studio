const express = require("express")
const orderController = require("../controller/Order.controller")
const orderRouter = express.Router()


orderRouter.get("/test", orderController.test)
orderRouter.post("/create", orderController.create)

module.exports = orderRouter