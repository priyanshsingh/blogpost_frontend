const router = require('express').Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const utils = require('../lib/utils')
router.get('/blogs', utils.validateLogin, async (req, res, next)=>{
    User.find({}, {blogs: {_id: 1, title: 1, content: 1}, _id: 1})
    .then(data => {
        let blogs = []
        for(i = 0; i<data.length; i++){
            if(data[i].blogs.length !== 0){
                // blogs.push(data[i].blogs);
                for(j = 0; j<data[i].blogs.length; j++){
                    blogs.push(data[i].blogs[j])
                }
            }
        }
        // console.log(`data in home.js is ${data}`)
        return res.status(200).json({success: true, message: "blogs fetched successfully", blogs: blogs})
    })
    .catch(err => {
        console.log(`error occured while fetching blogs, error message: ${err.message},\nerror:${err}`)
        return res.status(500).json({success: false, message: "unable to fetch blogs"})
    })
})


router.get('/', (req, res, next)=>{
    User.find({})
    .then(data => {
        res.status(200).json({success: false, data: data})
    })
    .catch(err => {
        res.status(400).json({success: false})
    })
})


router.patch('/addBlog', utils.validateLogin, async (req, res, next)=>{
    const blog = req.body.blog
    const id = req.jwt.sub
    console.log(`id is ${id}, blog is ${blog}`)
    await User.updateOne({ _id: id },
        {
            $push : {
                blogs: blog
            }
        })
        .then(data=>{
            console.log(`data saved, data:${data}`)
            return res.send(data)
        })
        .catch(err=>{
            console.log("err is ", err.message)
        })
})

router.delete("/logout", (req, res, next)=>{
    try{
        req.logOut()
        return res.status(204).json({success: true, message: "user logged out successfully"})
    }
    catch(err){
        console.log(`home.js: unable to logout user, err message: ${err.message}\nerror: ${err}`)
        return res.status(500).json({success: "false", message: "unable to logout user, please try again"})
    }
})

module.exports = router