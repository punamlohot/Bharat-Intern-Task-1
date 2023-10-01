
// const mongoose= require("mongoose");
// mongoose.connect("mongodb://localhost:27017/e-comm");

const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Connected to MongoDB"))
    .catch((error) => {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    } );
};