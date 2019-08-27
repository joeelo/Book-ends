const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Note = require("../models/Note");

router.get("/notes/:username", async (req, res) => {
    try {
        const notes = await User.findOne({username: req.params.username})
        .populate("notes")
        .exec();
        res.send(notes);
    } catch (error) {
        res.status(400).send({message: error});
    }
})

router.post("/notes", async (req, res) => {
    const { user, title, content } = req.body;
    const foundUser = await User.findOne({username: user.userName});
    console.log("user", foundUser);
    try {
        const newNote = new Note();
        newNote.user = user.id, newNote.title = title, newNote.content = content
        newNote.save();
        foundUser.notes.push(newNote);
        foundUser.save();
        res.send(newNote);
    } catch (error) {
        res.status(400).send({message: "rejected"});
    }
})

module.exports = router;