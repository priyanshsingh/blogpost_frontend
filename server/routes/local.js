const router = require('express').Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const utils = require('../lib/utils')

router.post('/login', async(req, res, next)=>{
    const email = req.body.email
    // console.log(`email is ${req.body.email}`)
    await User.findOne({email: email})
    .then(data => {
        if(!data){
            console.log(`data is invalid`)
            return res.status(401).json({success: false, message: "invalid credentials"})
        }else{
            console.log(`data is ${data}`)
            const originalHash = data.hash
            const originalSalt = data.salt
            const reqPassword = req.body.password
            const passwordMatch = utils.validPassword(reqPassword, originalHash, originalSalt)
            if(passwordMatch){
                const jwt = utils.isssueJWT(data)
                const token = jwt.token
                const expiresIn = jwt.expiresIn
                return res.status(200).json({success: true, message: "valid credentials", token: token, expiresIn: expiresIn})
            }else{
                return res.status(401).json({success: false, message: "invalid credentials"})
            }
        }
    })
    .catch(err => {
        console.log(`error occured while loggin user, message: ${err.message},\nerror: ${err}`)
        return res.status(500).json({success: false, message: "error occured while loggin in user, please try again"})
    })
})


router.post('/register', async (req, res, next)=>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
    const hashSalt = utils.genPassword(password)
    const hash = hashSalt.hash
    const salt = hashSalt.salt

    User.findOne({email: email})
    .then(async(data) => {
        if(data && data.email === email){
            console.log(`username already exists`)
            return res.status(409).json({success: false, message:"username already exists"})
        }
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            hash: hash,
            salt: salt,
        }
        const userToSave = new User(newUser)
        await userToSave.save()
        .then(data => {
            console.log(`user saved, data returned: ${data}`)
            return res.status(201).json({success: true, message: "user registered successfully"})
        })
        .catch(err => {
            console.log(`error occured while saving user, error message: ${err.message}, error: ${err}`)
            return res.status(422).json({success: false, message: "unable to register user"})
        })
    })
    .catch(err => {
        console.log(`error occured, error message: ${err.message},\nerror ${err}`)
        return res.status(422).json({success: "false", message: "unable to register user, please try again"})
    })
})

module.exports = router