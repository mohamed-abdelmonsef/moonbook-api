const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title : String,
    desc : String,
    user_id : {type: mongoose.Schema.Types.ObjectId,ref:'user'}
})

module.exports = mongoose.model('post',postSchema)