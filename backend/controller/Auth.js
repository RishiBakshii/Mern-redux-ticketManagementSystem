require('dotenv').config()
const Admin = require("../model/Admin");
const Member = require("../model/Member");
const jwt=require("jsonwebtoken")
const bcrypt=require('bcryptjs');
const { sanitizeUser } = require("../common/common");




exports.signup=async(req,res)=>{

    try {
        const existingUser=await Admin.findOne({email:req.body.email})
        if(existingUser){
            return res.status(400).json({"message":"User already exists"})
        }

        const hashedPassword=await bcrypt.hash(req.body.password,10)
        req.body.password=hashedPassword

        const created=new Admin(req.body)
        await created.save()

        const secureInfo=sanitizeUser(created)

        const token=jwt.sign(secureInfo,process.env.SECRET_KEY,{expiresIn:"7d"})

        res.cookie('token',token,{
            httpOnly:true,
            sameSite:"Lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(201).json(created)

    } catch (error) {
        console.log(error)
        res.status(500).json({'message':"Some error occured, please try again later"})
    }

}

exports.login=async(req,res)=>{
    try {
        const existingUser=await Admin.findOne({email:req.body.email})

        if(!existingUser){
            return res.status(400).json({"message":"Invalid Credentails"})
        }

        else if(existingUser && (await bcrypt.compare(req.body.password,existingUser.password))){
            const secureInfo=sanitizeUser(existingUser)

            const token=jwt.sign(secureInfo,process.env.SECRET_KEY,{expiresIn:"7d"})
    
            res.cookie('token',token,{
                httpOnly:true,
                sameSite:"Lax",
                maxAge: 7 * 24 * 60 * 60 * 1000
            })

            res.status(200).json(secureInfo)
        }
        else{
            return res.status(400).json({"message":"Invalid Credentails"})
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({'message':"Some error occured, please try again later"})
    }
}

exports.loginMember=async(req,res)=>{
    try {
        const existingMember=await Member.findOne({email:req.body.email})
        if(!existingMember){
            return res.status(400).json({"message":"Invalid Credentails"})
        }
        if(existingMember && req.body.password===existingMember.password){
            const secureInfo=sanitizeUser(existingMember)
            return res.status(200).json(secureInfo)
        }
        res.status(400).json({"message":"Invalid Credentails"})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Some error occured, please try later"})
    }
}

exports.checkAuth=async(req,res)=>{
    try {
        if(req.user){
            return res.status(200).json(req.user)
        }
        else{
            return res.status(401).json({"message":"Please login again"})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({"message":"Some error occured, please login again"})
    }
}

exports.logout=async(req,res)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).json({"message":"logout successfull"})
}