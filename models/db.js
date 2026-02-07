const mongoose = require("mongoose");
require("dotenv").config();
const connectDB=async()=>{
    try{
        const con=await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connectecd")
    }
    catch(error){
        console.error("Error:",error);
        process.exit(1);

    }
};
const con=connectDB();
module.exports=connectDB;