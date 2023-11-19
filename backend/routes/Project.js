const express=require('express')
const router=express.Router()
const projectController=require("../controller/Project")


router
    .post("/",projectController.create)
    .get("/admin/:id",projectController.getByAdminId)
    .get('/:id',projectController.getById)
    .patch('/:id',projectController.updateById)
    .delete("/:id",projectController.deleteById)

module.exports=router