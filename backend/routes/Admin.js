const express=require('express')
const router=express.Router()
const adminController=require("../controller/Admin")


router
    .patch('/:id',adminController.updateById)

module.exports=router