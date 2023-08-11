const mongoose = require("mongoose");
const localDB = 'mongodb://127.0.0.1:27017/rich-gray-bream-cuffCyclicDB';
const connectDB = async () => {
    try {
        await mongoose.connect(localDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
};

module.exports = connectDB;