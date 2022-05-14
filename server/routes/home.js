const router = require('express').Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const utils = require('../lib/utils')
router.get('/blogs', utils.validateLogin, async (req, res, next)=>{
    User.find({}, {blogs: {_id: 1, title: 1, content: 1}, _id: 1})
    .then(data => {
        return res.status(200).json({success: true, message: "blogs fetched successfully", blogs: data})
    })
    .catch(err => {
        console.log(`error occured while fetching blogs, error message: ${err.message},\nerror:${err}`)
        return res.status(500).json({success: false, message: "unable to fetch blogs"})
    })
})

router.patch('/addBlog', async (req, res, next)=>{
    const blog = req.body.blog
    const id = req.body.id
    await User.updateOne({ _id: id },
        {
            $push : {
                blogs: blog
            }
        })
        .then(data=>{
            return res.send(data)
        })
        .catch(err=>{
            console.log("err is ", err.message)
        })
})

module.exports = router