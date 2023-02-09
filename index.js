const express = require("express");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const dotenv = require("dotenv");

app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongo db");
    } catch (error) {
        throw error;
    }
}

app.use(express.json())

app.use("/auth", authRoute);
app.use("/users", usersRoute);

app.listen(9000, () => {
    connect()
    console.log("connected to backend")
});