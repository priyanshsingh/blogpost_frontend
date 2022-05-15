const router = require('express').Router()
const passport = require('passport')

router.get('/google', passport.authenticate('google', {scope: ['email', 'profile']}))

router.get('/google/callback', passport.authenticate('google',{
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/blogs'
}))

module.exports = router