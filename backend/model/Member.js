const mongoose=require("mongoose")
const {Schema}=mongoose


const memberSchema=new Schema({
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
    },
    admin:{
        type:Schema.Types.ObjectId,
        ref:'Admin',
        required:true
    }
},{versionKey:false})


module.exports=mongoose.model("Member",memberSchema)