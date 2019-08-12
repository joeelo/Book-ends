const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: [3, "name must be longer than that"],
        max: 22,
    },

    email :{
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    books: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Book"
    }],

    // bookArray: [{
    //     book: {
    //         any: {},

    //         rating: {
    //             type: Number, 
    //             default: 0
    //         }, 

    //         notes: [{
    //             type: String
    //         }]
    //     }
    // }],

    reviews: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Review"
    }], 

    notes: [{
        any: Object
    }]


})

const User = new mongoose.model("User", userSchema);

module.exports = User;