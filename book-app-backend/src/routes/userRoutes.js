const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Review = require("../models/Review");

router.get("/user", async (req, res) => {
    try {
        res.send("get user by id");
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/users", async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email, password: req.body.password});
        // await user.save();
        if (user) {
            res.send(user)
        } else {
            res.send({message: "wrong login info please try again"});
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/user/show/:id", async (req, res) => {
    try {
            const user = await User.findOne({ _id: req.params.id })
            .populate("books")
            .exec((err, book) => {
                book.user = null;
                res.send(book);
            });
    } catch (error) {
        res.status(400).send(error); 
    }
})

module.exports = router