const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String
    },
    country: {
        type: String,
    },
    userType: {
        type: String,
        default: "default"
    }

}, { timestamps: true })

module.exports = mongoose.model("auth", AuthSchema)