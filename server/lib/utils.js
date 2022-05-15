const crypto = require('crypto')
const jsonwebtoken = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')

const pathToPrivKey = path.join(__dirname, '..', 'id_rsa_priv.pem')
const pathToPubKey = path.join(__dirname, '..', 'id_rsa_pub.pem')
const PRIV_KEY = fs.readFileSync(pathToPrivKey, 'utf-8')
const PUB_KEY = fs.readFileSync(pathToPubKey, 'utf-8')

function validateLogin(req, res, next) {
    try {
        const tokenParts = req.headers.authorization.split(' ');
        if (tokenParts[0] === "Bearer" && tokenParts[1].match(/\S+\.\S+\.\S+/) !== null) {
            try {
                const verification = jsonwebtoken.verify(tokenParts[1], PUB_KEY, {
                    algorithms: ['RS256']
                })
                console.log('verification is ', verification)
                req.jwt = verification;
                // req.isAuthenticated = () => { return true }
                next()
            } catch (error) {
                console.log('error occured', error.message)
                return res.status(401).json({ success: false, msg: "you are not authorized to visit this route" });
            }
        } else if(req.isAuthenticated()){
            console.log(`utils.js: value of isAuthenticated is ${req.isAuthenticated()}`)
            next()
        }else{
            return res.status(401).json({success: false})
        }
    }
    catch (err) {
        console.log(`utils.js: value of isAuthenticated is ${req.isAuthenticated()}`)
        if(req.isAuthenticated()){
            next()
        }
        return res.status(401).json({success: false})
    }
}


function validPassword(password, hash, salt) {
    const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
}



function genPassword(password) {
    const salt = crypto.randomBytes(32).toString('hex');
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return {
        salt: salt,
        hash: genHash
    };
}

function isssueJWT(user) {
    const _id = user._id;

    const expiresIn = '1d';

    const payload = {
        sub: _id,
        iat: Date.now()
    };

    const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' })

    return {
        token: "Bearer " + signedToken,
        expiresIn: expiresIn
    }
}

function authMiddleware(req, res, next) {
    console.log(`is authenticated value is ${req.isAuthenticated()}`)
    if (req.headers.authorization != null) {
        const tokenParts = req.headers.authorization.split(' ');
        if (tokenParts[0] === "Bearer" && tokenParts[1].match(/\S+\.\S+\.\S+/) !== null) {
            try {
                const verification = jsonwebtoken.verify(tokenParts[1], PUB_KEY, {
                    algorithms: ['RS256']
                })
                console.log('verification is ', verification)
                req.jwt = verification;
                next();
            } catch (error) {
                console.log('error occured', error.message)
                return res.status(401).json({ success: false, msg: "you are not authorized to visit this route" });
            }
        } else {
            return res.status(401).json({ success: false, msg: "you are not authorized to visit this route" });
        }
    }else if(req.isAuthenticated() === null || !req.isAuthenticated()){
        return res.status(401).json({ success: false, msg: "you are not authorized to visit this route" });
    }else{
        next();
    }
}

module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;
module.exports.isssueJWT = isssueJWT;
module.exports.authMiddleware = authMiddleware;
module.exports.validateLogin = validateLogin;