const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true,

    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: new Date()
    },
}, { timestamps: true })

module.exports = mongoose.model("post", PostSchema)