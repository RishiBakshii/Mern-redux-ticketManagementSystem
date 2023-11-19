const express=require('express')
const router=express.Router()
const authController=require("../controller/Auth")
const { verifyToken } = require('../middleware/middleware')


router
    .post("/login",authController.login)
    .post("/login-member",authController.loginMember)
    .post("/signup",authController.signup)
    .get("/check-auth",verifyToken,authController.checkAuth)
    .get("/logout",authController.logout)

module.exports=router