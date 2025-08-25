const mongoose = require("mongoose")

const connecttoDb = async() => {
    try {
        await mongoose.connect(process.env.Mongo_url + "roshan-tech-studio")
        console.log("Conected to Database")
    } catch (error) {
        console.log("Unable to connect to db")
    }
}

module.exports = connecttoDb