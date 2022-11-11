const mongoose=require("mongoose")

const CustomerSchema= new mongoose.Schema({
    full_name:{type:String, required:true},
    current_location:{type:String, required:true},
    no_of_rides:{type:Number, required:true},
    avg_rating:{type:Number, required:true}
})

const CustomerModel=mongoose.model("customer",CustomerSchema)

module.exports=CustomerModel