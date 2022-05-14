const express = require('express')
// to load variables of .env as environment variables during runtime
require('dotenv').config()

// to load database
require('./config/database')
// to load model created with mongoose
require('./model/user')

const port = process.env.PORT_NUMBER
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(require('./routes'))
app.use((err, req, res, next)=>{
    if(err){
        console.log(`error occured (in error handler): ${err}`)
    }
})

app.listen(port, ()=>{
    console.log(`app listening on http://localhost:${port}`)
})