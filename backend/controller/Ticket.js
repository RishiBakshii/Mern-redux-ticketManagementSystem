const Ticket = require("../model/Ticket");

// create
exports.create=async(req,res)=>{
    try {
        const created=new Ticket(req.body)
        await created.save()
        res.status(201).json(created)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error creating ticket"})
    }
}

// read
exports.getByProjectId=async(req,res)=>{
    try {
        const {id}=req.params
        const fetched=await Ticket.find({project:id})
        res.status(200).json(fetched)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error fetching tickets"})

    }
}

// update
exports.updateById=async(req,res)=>{
    try {
        const {id}=req.params
        const updated=await Ticket.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updated)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error updating ticket"})

    }
}

// delete
exports.deleteById=async(req,res)=>{
    try {
        const {id}=req.params
        const deleted=await Ticket.findByIdAndDelete(id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error deleting ticket"})
    }
}
