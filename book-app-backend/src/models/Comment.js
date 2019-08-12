const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content: {
        type: String
    },

    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    updated_at: {
        type: Date,
        default: Date.now
    }
})

const Comment = new mongoose.model("Comment", commentSchema);

module.exports = Comment;