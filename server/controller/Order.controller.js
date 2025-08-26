const mongoose = require("mongoose")
const Order = require("../model/Order.model")

const orderController =  {
    test: (req, res) => {
        res.status(200).json({message: "Message route is working"})
    },

    create: async(req, res) => {
        // res.status(200).json({message: "Your Order Placed, we will back to you Soon"})
        const {name, email, phone, service, description} = req.body

        if(!name || !email || !phone || !service || !description){
            return res.status(422).json({message: "All fields are required"})
        }

        if(phone.length !== 10){
            return res.status(422).json({message: "Invalid Number"})
        }

        try {
            const order = await Order.create({...req.body})
            return res.status(200).json({message: "Your Order Placed, We will get back to you", order})
        } catch (error) {
            return res.status(500).json({message: "internal server error", error})
        }
    } 
}

module.exports = orderController