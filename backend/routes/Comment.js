const express=require('express')
const router=express.Router()
const commentController=require("../controller/Comment")


router
    .post("/",commentController.create)
    .get("/ticket/:id",commentController.getByTicketId)
    .patch('/:id',commentController.updateById)
    .delete("/:id",commentController.deleteById)

module.exports=router