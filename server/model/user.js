const mongoose = require('mongoose')

const blog = {
    title: {
        type: String,
    },
    content: {
        type: String,
    }
}

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    hash:{
        type: String,
    },
    salt:{
        type: String,
    },
    blogs: [{   
        type: blog,
    }],
    googleId: {
        type: String,
        required: false,
    }
})

mongoose.model('User', UserSchema)