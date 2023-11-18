const mongoose=require("mongoose")
const {Schema}=mongoose


const adminSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{versionKey:false})


module.exports=mongoose.model("Admin",adminSchema)