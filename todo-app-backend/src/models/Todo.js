const mongoose = require("mongoose");
const User = require("./User")

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    finished: {
        default: false,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }
})

TodoSchema.pre("save", async function(next) {

    const self = this;
    const user = await User.findOne({_id: "5d0d01a9286b52046c33ba99"});
    user.todo.push(this);
    await user.save();
    console.log(user);
    console.log(this);

    next();
})

const Todo = new mongoose.model("Todo", TodoSchema);

module.exports = Todo;