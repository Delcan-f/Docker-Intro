const mongoose = require("mongoose");

async function connectDB(){
    // define the database URL
    let databaseUrl = process.env.DATABASE_URL || `mongodb://mongo:27017/${process.env.npm_package_name}`;
    try{
        // connect to the database
        await mongoose.connect(databaseUrl);
        // acknowledgement message
        console.log("Connected to the Database!");
    } catch (error) {
    // IF error, acknowledgement message
        console.error("Error connecting to Mongo DB: ", error);
        process.exit(1);
    }
}

module.exports = { connectDB };