const app = require('express').Router()
const auth = require('../middleware/home.auth')
const profileController = require('../controllers/displayProfile.controller')
app.get('/displayProfile',auth,profileController)

const editPostController = require('../controllers/editPost.controller')
app.put('/editPost' ,auth ,editPostController)

const deletePostController = require('../controllers/deletePost.controller')
app.delete('/deletePost',auth ,deletePostController)

module.exports = app