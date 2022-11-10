const mongoose=require("mongoose");
require("dotenv").config;

 connection:String=mongoose.connect(process.env.MONGO_URL)

module.exports=connection