const express=require("express")
const CustomerRoute=express.Router()
const CustomerModel=require("../models/CustomerModel")

//create customer

CustomerRoute.post("/create",async(req,res)=>{
    try{
        const{ full_name,current_location,no_of_rides,avg_rating}=req.body
        const newCustomer=new CustomerModel({full_name,current_location,no_of_rides,avg_rating})
        await newCustomer.save()
        return res.send({message:"New Customer Created",data:newCustomer})

    }
    catch(err){
        return res.send(err)
    }
})

//get all customer

CustomerRoute.get("/",async(req,res)=>{
    const allCustomer=await CustomerModel.find()
    const count=await CustomerModel.countDocuments()
    return res.send({data:allCustomer,total:count})
})

//edit customer

CustomerRoute.put("/:id",async(req,res)=>{
    try{
        const updateCustomer=await CustomerModel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        return res.send({message:"Customer Data Update",data:updateCustomer})
    }
    catch(err){
        return res.send(err)
    }
})

//delete customer

CustomerRoute.delete("/:id",async(req,res)=>{
    try{
        await CustomerModel.findByIdAndDelete(req.params.id)
        return res.send({message:"Customer Data Delete"})
    }
    catch(err){
        return res.send(err)
    }
})


module.exports=CustomerRoute
