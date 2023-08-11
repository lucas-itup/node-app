const mongoose = require("mongoose");
//const localDB = 'mongodb://127.0.0.1:27017/db';
const localDB = "mongodb://atlas-sql-64d6323baced724294abf7b2-swydi.a.query.mongodb.net/Cluster0?ssl=true&authSource=admin";


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