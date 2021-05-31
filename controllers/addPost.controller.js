const postModel = require('../model/post.model')
const { validationResult } = require('express-validator');


module.exports = async(req,res)=>{
    try {
        const {title,desc} = req.body
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            await postModel.insertMany({title,desc,user_id:req.userId})
            res.json({message:'Done'})
        } else {
            res.json({message:'invalid input',messageErr:errors.array(),oldinputs:{title,desc},})
        }
    } catch (error) {
        res.json({message:'catch addPost error',error})
    }
}