const mongoose = require("mongoose");
//const localDB = 'mongodb://127.0.0.1:27017/db';
const localDB = 'mongodb://lucaspupillilp:sH6-xzxdGmsSBmw@cluster0.fdpf52b.mongodb.net/rich-gray-bream-cuffCyclicDB';

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