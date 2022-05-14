const mongoose = require('mongoose')
require('dotenv').config()

const BASE_URL = process.env.MONGO_CONNECTION_STRING

mongoose.connect(BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', ()=>{
    console.log('database connected')
})
