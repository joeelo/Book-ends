const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");

router.get("/user", async (req, res) => {
    try {
        res.send("get user by id")
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/user/:id/books", async (req, res) => {
    try {
            const user = await User.findOne({_id: req.params.id})
            .populate("books")
            .exec((err, book) => res.send(book)); 
    } catch (error) {
        res.status(400).send(error); 
    }
})

module.exports = router