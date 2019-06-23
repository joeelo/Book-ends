const mongoose = require("mongoose");
const User = require("./User")

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        default: ""
    },

    author: {
        type: String,
        default: ""
    },

    finished: {
        type: Boolean,
        default: false,
    },

    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },

    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required: true
    }
})

BookSchema.pre("save", async function(next) {

    const self = this;
    const user = await User.findOne({_id: this.user});
    user.books.push(this);
    await user.save();

    next();
})

const Book = new mongoose.model("Book", BookSchema);

module.exports = Book;