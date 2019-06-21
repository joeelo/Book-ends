const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const User = require("../models/User")

router.get("/todos", async (req, res) => {
    res.send("connected");
})

router.get("/todo", async (req, res) => {
    try {
        const todo = await Todo.findOne({title: req.body.title});
        console.log(req.body.title);
        res.send(todo)
    } catch (error) {
        res.status(404).send(error);
    }
})

router.post("/todos", async (req, res) => {
    try {        
        const todo = new Todo(req.body);
        await todo.save();
        res.send(todo);
    } catch (error) {
        res.status(400).send(error);
    }
})





module.exports = router;
