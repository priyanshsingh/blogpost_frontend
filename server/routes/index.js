const router = require('express').Router()
router.use('/', require('./home'))
router.use('/local', require('./local'))
router.use('/auth', require('./auth'))
module.exports = router