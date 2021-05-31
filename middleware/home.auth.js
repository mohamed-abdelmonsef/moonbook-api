var jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    const token = req.header('token')

    if (token && token!=undefined && token!=null) {
        jwt.verify(token ,'momo' ,(err,decoded)=>{
            if (err) {
                res.json({message:'invalid token'})
            } else {
                if (decoded.isLogged) {
                    req.userId=decoded.userId
                    req.userName=decoded.userName
                    next()
                } else {
                    res.json({message:'please login first'})
                }
            }
        })
    }
}