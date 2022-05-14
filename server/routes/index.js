const router = require('express').Router()
router.use('/', require('./home'))
router.use('/local', require('./local'))
module.exports = router