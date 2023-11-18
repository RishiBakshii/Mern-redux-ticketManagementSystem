const Admin = require("../model/Admin")

// update
exports.updateById=async(req,res)=>{
    try {
        const {id}=req.params
        const updated=await Admin.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updated)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error updating details"})
    }
}
