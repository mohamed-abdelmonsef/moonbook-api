const express = require('express')
var cors = require('cors')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')

app.use(cors())
app.use(require('./routes/register.routes'))
app.use(require('./routes/login.routes'))
app.use(require('./routes/home.routes'))
app.use(require('./routes/profile.routes'))

mongoose.connect('mongodb+srv://admin:admin@cluster0.srnvy.mongodb.net/moobook-api',
 {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false }).then(()=>{
     console.log('DB===Connect');
 }).catch(()=>{
     console.log('DB ERoR');
 })
app.listen(process.env.PORT || 3000, () =>{
    console.log('server is working')
})