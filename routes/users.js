const express = require("express");

const router = express.Router();

router.get("/", (req,res) => {
    res.send("hello auth endpoint")
})

module.exports = router