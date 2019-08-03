const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({

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

const Review = new mongoose.model("Review", reviewSchema);

module.exports = Review

