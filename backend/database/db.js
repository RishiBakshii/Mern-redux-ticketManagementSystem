require("dotenv").config()
const mongoose=require("mongoose")

exports.connectToDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to DB') 
    } catch (error) {
        console.log(error)
    }
}