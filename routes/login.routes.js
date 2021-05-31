const app = require('express').Router()
const validation = require('../middleware/logIn.validation')
const loginController = require('../controllers/login.controller')

app.post('/handleLogin' ,validation ,loginController)


module.exports = app 