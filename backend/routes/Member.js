const express=require('express')
const router=express.Router()
const memberController=require("../controller/Member")


router
    .post("/",memberController.create)
    .get("/admin/:id",memberController.getByAdminId)
    .patch('/:id',memberController.updateById)
    .delete("/:id",memberController.deleteById)

module.exports=router