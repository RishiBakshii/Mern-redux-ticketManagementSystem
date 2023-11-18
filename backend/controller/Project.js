const Project = require("../model/Project")

// create
exports.create=async(req,res)=>{
    try {
        const created=new Project(req.body)
        await created.save()
        res.status(201).json(created)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error creating project"})

    }
}

// read
exports.getByAdminId=async(req,res)=>{
    try {
        const {id}=req.params
        const fetched=await Project.find({admin:id})
        res.status(200).json(fetched)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error fetching Projects"})

    }
}

// update
exports.updateById=async(req,res)=>{
    try {
        const {id}=req.params
        const updated=await Project.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updated)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error updating project"})

    }
}

// delete
exports.deleteById=async(req,res)=>{
    try {
        const {id}=req.params
        const deleted=await Project.findByIdAndDelete(id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Error deleting Project"})
    }
}
