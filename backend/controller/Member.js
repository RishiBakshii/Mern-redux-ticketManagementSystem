const Member = require("../model/Member")

// create
exports.create=async(req,res)=>{
    try {
        const existingMember=await Member.findOne({email:req.body.email})
        if(existingMember){
            return res.status(400).json({"message":"Member already exists"})
        }
        const created=new Member(req.body)
        await created.save()
        res.status(201).json(created)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error creating member"})
    }
}

// read
exports.getByAdminId=async(req,res)=>{
    try {
        const {id}=req.params
        const fetched=await Member.find({admin:id})
        res.status(200).json(fetched)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error fetching members"})

    }
}

// update
exports.updateById=async(req,res)=>{
    try {
        const {id}=req.params
        const updated=await Member.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updated)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error updating member"})

    }
}

// delete
exports.deleteById=async(req,res)=>{
    try {
        const {id}=req.params
        const deleted=await Member.findByIdAndDelete(id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error deleting member"})
    }
}
