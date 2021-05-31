const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
const { validationResult } = require('express-validator');
const userModel = require('../model/user.model')
var jwt = require('jsonwebtoken');


module.exports = async(req,res)=>{
    const {fname,lname,uname,email,password,cPassword} = req.body
    try {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let user =await userModel.findOne({email})
            if (user) {
                res.json({message:'this email is already exist',oldInputs:{fname,lname,uname,email,password,cPassword}})
            } else {
                bcrypt.hash(password, 7, async(err, hash)=> {
                    if (err) {
                        res.json({message:'hash error',err})
                    } else {
                        let token = jwt.sign({ email }, 'momo');
                        let transporter = nodemailer.createTransport({
                            service:'outlook',
                            auth: {
                              user: 'node.js.test@outlook.com',
                              pass: 'node.js.monsef'
                            },
                          }); 
                        let options = {
                            from: 'node.js.test@outlook.com', // sender address
                            to: email, // list of receivers
                            subject: "Hello ✔", // Subject line
                            text: "Hello world?", // plain text body
                            html: `<h1><a href='http://localhost:3000/check/${token}'> confirmed </a></h1>`, // html body
                          }    
                        await transporter.sendMail(options);
                        await userModel.insertMany({fname,lname,uname,email,password:hash})
                        res.json({message:'Done'})
                    }
                });
            }
        } else {
            res.json({message:'validation errors',errorMessage : errors.array()})
        }
    } catch (error) {
        res.json({message:'catch an error in signup',error})
    }
}