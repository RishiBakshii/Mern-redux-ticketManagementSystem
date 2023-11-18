const express=require('express')
const router=express.Router()
const ticketController=require("../controller/Ticket")


router
    .post("/",ticketController.create)
    .get("/project/:id",ticketController.getByProjectId)
    .patch('/:id',ticketController.updateById)
    .delete("/:id",ticketController.deleteById)

module.exports=router