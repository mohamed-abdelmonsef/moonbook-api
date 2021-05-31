
const postModel = require('../model/post.model')

module.exports = async(req,res)=>{
    try {
        await postModel.findOneAndDelete({_id:req.body.id})
        res.json({message:'Deleted'})
    } catch (error) {
        res.json({message:'catch an error in delete post'})
    }
}