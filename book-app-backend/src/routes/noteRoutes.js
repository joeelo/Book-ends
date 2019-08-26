const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Note = require("../models/Note");

router.post("/notes", async (req, res) => {
    const { user, title, content } = req.body;
    try {
        const newNote = new Note();
        newNote.user = user.id, newNote.title = title, newNote.content = content
        console.log(newNote);
        res.send(newNote);
    } catch (error) {
        res.status(400).send({message: "rejected"});
    }
})

module.exports = router;