const express=require('express')
const server=express()
const cors=require("cors")
const morgan=require("morgan")
const { connectToDb } = require('./database/db')
const cookieParser = require('cookie-parser')

const adminRoutes=require("./routes/Admin")
const commentRoutes=require("./routes/Comment")
const memberRoutes=require("./routes/Member")
const projectRoutes=require("./routes/Project")
const ticketRoutes=require("./routes/Ticket")


// database connection
connectToDb()


// middlewares
server.use(cors({credentials:true,origin:"http://localhost:3000"}))
server.use(express.json())
server.use(morgan("tiny"))
server.use(cookieParser())


// route middlewares
server.use("/admin",adminRoutes)
server.use("/comment",commentRoutes)
server.use("/member",memberRoutes)
server.use("/project",projectRoutes)
server.use("/ticket",ticketRoutes)


server.get("/",(req,res)=>{
    res.status(200).json({"message":"running"})
})

server.listen(8000,()=>{
    console.log('server [STARTED] ~ http://localhost:8000')
})