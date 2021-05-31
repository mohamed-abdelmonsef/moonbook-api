const app = require('express').Router()
const validation = require('../middleware/signup.validation')

const registerController = require('../controllers/register.controller')
app.post('/handleRegister',validation,registerController)

const checkController = require('../controllers/checkEmail.controller')
app.get('/check/:token' ,checkController)


module.exports = app