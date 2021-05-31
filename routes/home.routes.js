const app = require('express').Router()
const auth = require('../middleware/home.auth')
const homeController = require('../controllers/home.controller')

app.get('/home',auth ,homeController)

const validation = require('../middleware/addPost.validation')
const addPostController = require('../controllers/addPost.controller')
app.post('/addPost',validation ,auth,addPostController)


module.exports = app