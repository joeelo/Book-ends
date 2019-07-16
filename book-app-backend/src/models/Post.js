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

    book: {
        type: mongoose.Schema.Types.ObjectId, ref: "Book",
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required: true
    } 

})

const Post = new mongoose.model("Post", postSchema);

module.exports = Post

