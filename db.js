const mongoose = require("mongoose");
const localDB = `mongodb+srv://${process.env.CYCLIC_DB}:${encodeURIComponent(
    process.env.CYCLIC_APP_ID
)}@${process.env.CYCLIC_URL}`;

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