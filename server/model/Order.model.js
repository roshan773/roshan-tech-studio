const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "Please Enter valid Number"]
    },

    email: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["pending", "In-progress", "Completed"],
        default: "pending"
    },

    service: {
        type: String,
        enum: ["Portfolio website", "Simple website", "Business website", "Premium website"]
    },

    description: {
        type: String,
        required: true
    },

    placedAT: {
        type: Date,
        default: () => new Date
    }
}, {
    timeStamps: true
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order
