const mongoose=require("mongoose")
const {Schema}=mongoose


const commentsSchema=new Schema({
    message:{
        type:String,
        required:true
    },
    member:{
        type:Schema.Types.ObjectId,
        ref:'Member',
        required:true
    },
    ticket:{
        type:Schema.Types.ObjectId,
        ref:'Ticket',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type: Date
    }
},{versionKey:false})


module.exports=mongoose.model("Comment",commentsSchema)