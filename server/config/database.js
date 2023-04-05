const mongoose = require("mongoose");

const database = () => {

    mongoose.connect(process.env.DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("connected db"))
        .catch((e) => console.log(e))
}

module.exports = database