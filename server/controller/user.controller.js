const express = require("express")
const User = require("../model/user.model")
const bcrypt = require("bcrypt")

const userController = {
    test: (req, res) => {
        res.status(200).json({ message: "Test Routes are Working" })
    },

    register: async (req, res) => {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(409).json({ message: "All Fields are required" })
        }

        try {
            const isExist = await User.findOne({ email })
            if (isExist) {
                return res.status(200).json({ message: "User already Exist" })
            }

            const hashpassword = await bcrypt.hash(password, 10)

            const newuser = await new User({ name, email, password: hashpassword })
            await newuser.save()

            await res.status(200).json({ message: "User Registered Successfully" })
        } catch (error) {
            res.status(500).json({ message: "Internal server" , error: error.message})
        }
    }
}

module.exports = userController