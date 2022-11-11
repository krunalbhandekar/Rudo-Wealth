const express=require("express");
require("dotenv").config();

const app=express();
app.use(express.json());

const connection=require("./config");
const CustomerRoute=require("./routes/CustomerRoute")

app.use("/customer",CustomerRoute)

app.get("/",(req,res)=>{
    return res.status(200).send("HomePage")
})

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("DB Connected")
    }
    catch(err){
        console.log(err)

    }
    console.log(`DB Connected at port ${process.env.PORT}`)
})

