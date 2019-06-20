const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    finished: {
        default: false,
    }
})

const Todo = new mongoose.model("Todo", TodoSchema);

module.exports = Todo;