const express=require('express')
const router=express.Router()
const projectController=require("../controller/Project")


router
    .post("/",projectController.create)
    .get("/admin/:id",projectController.getByAdminId)
    .patch('/:id',projectController.updateById)
    .delete("/:id",projectController.deleteById)

module.exports=router