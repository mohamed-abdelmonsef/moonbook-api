const postModel = require('../model/post.model')

module.exports = async(req,res)=>{
    try {
        const {title,desc} = req.body
        await postModel.findOneAndUpdate({_id:req.body.id},{title,desc,user_id:req.userId})
        res.json({message:'updated'})
    } catch (error) {
        res.json({message:'catch an error in edit post'})
    }
}