const express = require('express')
const session = require('express-session')
// to load database
require('./config/database')
// to load model created with mongoose
require('./model/user')
// to load variables of .env as environment variables during runtime
require('dotenv').config()
const passport = require('passport')
const strategy = require('./config/passport').strategy



const port = process.env.PORT_NUMBER
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(session({
    secret: process.env.GOOGLE_CLIENT_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(strategy)

passport.serializeUser((user, done)=>{
    done(null, user)
})

passport.deserializeUser((user, done)=>{
    done(null, user)
})

showLogs = (req, res, next) => {
    console.log("\n==============================")
    console.log(`------------>  ${count++}`)

    console.log(`\n req.session.passport -------> `)
    console.log(req.session.passport)

    console.log(`\n req.user -------> `)
    console.log(req.user)

    console.log("\n Session and Cookie")
    console.log(`req.session.id -------> ${req.session.id}`)
    console.log(`req.session.cookie -------> `)
    console.log(req.session.cookie)

    console.log("===========================================\n")

    next()
}

let count = 1
app.use(showLogs)

app.use(require('./routes'))
app.use((err, req, res, next)=>{
    if(err){
        console.log(`error occured (in error handler): ${err}`)
    }
})

app.listen(port, ()=>{
    console.log(`app listening on http://localhost:${port}`)
})