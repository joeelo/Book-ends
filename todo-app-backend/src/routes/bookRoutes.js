const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const User = require("../models/User");
const request = require("request");
const fetch = require("node-fetch")

router.get("/books/:bookTitle", async (req, res) => {
    try {
        const book = req.params.bookTitle;
        const url = `https://www.googleapis.com/books/v1/volumes?q=allthelightwecannotsee&key=${process.env.GOOGLE_BOOKS_API}`
        const response = await fetch(url);
        const json = await response.json();
        res.send(json.items[0]);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/book", async (req, res) => {
    try {
        request(url, (error, response) => {
            console.log(response.body)
        })
        res.send("json");
    } catch (error) {
        res.status(404).send(error);
    }
})

router.post("/books", async (req, res) => {
    try {  
        const book = new Book(req.body);
        console.log(book);
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
