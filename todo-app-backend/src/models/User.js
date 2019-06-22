const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: [2, "name must be longer than that"],
        max: 16,
        unique: true
    },

    email :{
        type: String,
        required: true,
        unique: true
    },

    todo: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Todo"
    }]
})

const User = new mongoose.model("User", userSchema);

module.exports = User;