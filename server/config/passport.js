// const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')
const passport = require('passport')
const googleStrategy = require('passport-google-oauth2').Strategy
require('dotenv').config()
const User = mongoose.model('User')

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

authUser = (req, accessToken, refreshToken, profile, done)=>{
    console.log(`accesstoken: ${accessToken}, refreshtoken: ${refreshToken}, profile: ${profile.id}`)
    console.log(`provider is ${profile.provider}\ndisplayName is ${profile.displayName}\nemail is ${profile.email}`)

    User.findOne({googleId: profile.id})
    .then(data => {
        if(!data){
            console.log(`passport.js: data not found and saving user`)
            console.log(`passport.js: email is ${profile.value}`)
            const userToSave = {
                firstName: profile.given_name,
                lastName: profile.family_name,
                email: profile.email,
                googleId: profile.id
            }
            console.log(`passport.js: user to be saved is, ${userToSave.email}`)
            const newUser = new User(userToSave)
            newUser.save()
            .then(dat => {
                console.log(`passport.js: user added via google account: ${dat}`)
                return done(null, profile)
            })
            .catch(err => {
                console.log(`passport.js: unable to save user via google err message: ${err.message} \nerr: ${err}`)
                return done(err, null)
            })
            // return done(null, profile)
        }else{
            console.log(`passport.js: profile found and proceeding forward`)
            console.log()
            return done(null, profile)
        }
    })
    .catch(err => {
        console.log(`passport.js: error occcured in 2nd catch statement while saving user via google, err message: ${err.message}\nerr:${err}`)
        return done(err, null)
    })

    // return done(null, profile)
}

const strategy = new googleStrategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:4000/auth/google/callback",
        passReqToCallback: true,
        useProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    authUser
)

module.exports.strategy = strategy