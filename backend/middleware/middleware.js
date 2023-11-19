const jwt=require("jsonwebtoken")

exports.verifyToken=async(req,res,next)=>{
    try {
        const {token}=req.cookies

        if (!token) {
            return res.status(401).json({ "message": "Token missing, please login again" });
        }
        const decodedInfo=jwt.verify(token,process.env.SECRET_KEY)

        if(decodedInfo._id && decodedInfo.email && decodedInfo.role){
            req.user={_id:decodedInfo._id,email:decodedInfo.email,role:decodedInfo.role}
            next()
        }

        // return res.status(401).json({ "message": "Token missing, please login again" });

    } catch (error) {
        console.log(error)
        switch (error.name) {
            case 'TokenExpiredError':
                res.status(401).json({ "message": "Token expired, please login again" });
                break;
            case 'JsonWebTokenError':
                res.status(401).json({ "message": "Invalid token, please login again" });
                break;
            default:
                res.status(500).json({ "message": "Internal Server Error" });
        }
    }
}