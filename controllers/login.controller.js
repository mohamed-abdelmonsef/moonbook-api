const userModel = require('../model/user.model')
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

module.exports = async(req,res)=>{
    const {email,password} = req.body
    try {
        let loginErrors = validationResult(req)
        if (loginErrors.isEmpty()) {
            let user = await userModel.findOne({email})
            if (user) {
                let match =await bcrypt.compare(password,user.password)
                if (match) {
                    if (user.confirmed) {
                        let token = jwt.sign({userId:user._id,userName:user.uname,isLogged:true},'momo')
                        res.header({token}).json({message:'logged in success'})
                    } else {
                        res.json({message:'please confirm your email first',oldInputs:{email,password}})
                    }
                } else {
                    res.json({message:'password is wrong',oldInputs:{email,password}})
                }
            } else {
            res.json({message:"this email doesn't exist",oldInputs:{email,password}})
            }
        } else {
            res.json({message:'invalid inputs',oldInputs:{email,password}})
        }
    } catch (error) {
        res.json({message:'catch an error in login',error})
    }
}