const express = require("express");
const User = require("../models/User")

const router = express.Router();

router.get("/", async (req,res) => {
    res.send("hello auth endpoint")
    try {
        const newUser = new User(req.body)
        const user = await newUser.save()
    } catch (error) {
        res.send(error)
    }
})

module.exports = router