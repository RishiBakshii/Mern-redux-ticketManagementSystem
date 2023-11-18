const Comment = require("../model/Comment")

// create
exports.create=async(req,res)=>{
    try {
        const created=new Comment(req.body)
        await created.save()
        res.status(201).json(created)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error creating comment"})
    }
}

// read
exports.getByTicketId=async(req,res)=>{
    try {
        const {id}=req.params
        const fetched=await Comment.find({ticket:id})
        res.status(200).json(fetched)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error fetching comments"})

    }
}

// update
exports.updateById=async(req,res)=>{
    try {
        const {id}=req.params
        const updated=await Comment.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updated)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error updating comment"})

    }
}

// delete
exports.deleteById=async(req,res)=>{
    try {
        const {id}=req.params
        const deleted=await Comment.findByIdAndDelete(id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error deleting comment"})
    }
}
