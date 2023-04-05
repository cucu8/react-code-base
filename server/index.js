const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const database = require("./config/database.js")
const authRouter = require("./routers/authRoutes.js");
const postRouter = require("./routers/postRoutes.js");

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cookieParser())
app.use("/", authRouter)
app.use("/", postRouter)


const PORT = process.env.PORT || 5000;
database()
app.listen(PORT, () => {
    console.log(`servise is running ${PORT}`)
})