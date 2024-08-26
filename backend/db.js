const mongoose = require("mongoose");

const mongo_url = "mongodb://localhost:27017/";

const connectMongo = async () => {
    try {
        await mongoose.connect(mongo_url)

        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = connectMongo;

