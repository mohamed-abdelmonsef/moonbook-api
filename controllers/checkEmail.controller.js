const userModel = require('../model/user.model')
var jwt = require('jsonwebtoken');


module.exports =(req,res)=>{
    const token = req.params.token
    if (token && token !=undefined && token !=null) {
        jwt.verify(token, 'momo', async(err, decoded)=> {
            if (err) {
                res.json({message:'invalid token'})
            } else {
            const email = decoded.email
            await userModel.findOneAndUpdate({email},{confirmed:true})
            res.json({message:'confirmed'})
            }
          });
    }
}