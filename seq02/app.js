require('dotenv').config()
const express = require('express')
const notfound =require('./middlewares/notFound')
const error =  require('./middlewares/error')
const todoRoute = require('./routes/todoRoute')
const authRoute = require('./routes/authRoute')
const app = express()

app.use(express.json())


//-----------------------


app.use('/auth', authRoute)
app.use('/todos', todoRoute)








//-----------------------

app.use(notfound)
app.use(error)




let port = process.env.PORT || 8080
app.listen(port, ()=> console.log('SV PORT', port))