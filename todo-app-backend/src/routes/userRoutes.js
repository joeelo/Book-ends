const express = require("express");
const router = express.Router();
const User = require("../models/User")

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

router.post("/user-todos", async (req, res) => {
    try {
        const user = await User.findOne({name: req.body.name}).populate("todo").exec((err, todo) => {
            console.log(todo)
        })
        // user.populate("todo").exec((err, todo) => {
        //     console.log(todo);
        // })
        res.send(user)
    } catch (error) {
        res.status(400).send(error); 
    }
})

module.exports = router