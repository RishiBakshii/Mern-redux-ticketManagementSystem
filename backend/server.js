const express=require('express')
const server=express()
const cors=require("cors")
const morgan=require("morgan")
const { connectToDb } = require('./database/db')
const cookieParser = require('cookie-parser')


// database connection
connectToDb()


// middlewares
server.use(cors({credentials:true,origin:"http://localhost:3000"}))
server.use(express.json())
server.use(morgan("tiny"))
server.use(cookieParser())


server.get("/",(req,res)=>{
    res.status(200).json({"message":"running"})
})

server.listen(8000,()=>{
    console.log('server [STARTED] ~ http://localhost:8000')
})