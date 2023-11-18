const mongoose=require("mongoose")
const {Schema}=mongoose

const projectSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    members:{
        type:[Schema.Types.ObjectId],
        ref:'Member',
        required:true
    },
    admin:{
        type:Schema.Types.ObjectId,
        ref:'Admin',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    dueDate: {
        type: Date
    },
    updatedAt:{
        type: Date
    }
},{versionKey:false})


module.exports=mongoose.model("Project",projectSchema)