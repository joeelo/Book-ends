const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const User = require("../models/User")

router.get("/book", async (req, res) => {
    res.send("connected");
})

router.get("/book", async (req, res) => {
    try {
        const book = await Book.findOne({title: req.body.title});
        console.log(req.body.title);
        res.send(book)
    } catch (error) {
        res.status(404).send(error);
    }
})

router.post("/books", async (req, res) => {
    try {
        console.log(process.env.GOOGLE_API_KEY)        
        const book = new Book(req.body);
        const user = await User.findOne({_id: req.body.user})
        const existingTask = await Book.find({title: req.body.title, user: user});
        if (!!existingTask[0]) {
            return res.send("this already exists!")
        }
        await book.save(); 
        res.send(book);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.patch("/book/:id", async (req, res) => {
    try {
        const book = await Book.findOne({_id: req.params.id}, (err, book) => {
            book.set(req.body)

            book.save((err, newbook) => {
                if (err) {
                    res.send(err);
                }
                res.send(newBook);
            })
        })
    } catch (error) {
        res.status(400).send(error);
    }
})





module.exports = router;
