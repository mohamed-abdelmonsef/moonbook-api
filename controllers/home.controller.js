const postModel = require('../model/post.model')


module.exports = async(req,res)=>{
    try {
        let posts = await postModel.find({})
        res.json(posts)
    } catch (error) {
        res.json({message:'catch an error in home',error})
    }
}