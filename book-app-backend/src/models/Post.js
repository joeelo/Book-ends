const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    likes: {
        type: Number,
        default: 0
    },

    book: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required: true
    } 

})

const Post = new mongoose.model("Post", postSchema);

module.exports = Post

