const mongoose = require("mongoose");
const localDB = 'mongodb+srv://lucas:lucaspupilli@cyclic.mongodb.net/rich-gray-bream-cuffCyclicDB';

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