const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const User = require("../models/User");
const Review = require("../models/Review");
const fetch = require("node-fetch");

router.get("/book/:bookTitle", async (req, res) => {
    try {
        const book = req.params.bookTitle;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${process.env.GOOGLE_BOOKS_API}`;
        const response = await fetch(url);
        const json = await response.json();
        res.send(json.items);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/book/id/:id", async (req, res) => {
    try {
        const book = req.params.id;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${process.env.GOOGLE_BOOKS_API}`;
        const response = await fetch(url);
        const json = await response.json();
        res.send(json.items[0]);  
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/book/:id/reviews", async (req, res) => {
    try {
        const book = req.params.id;
        console.log(req.params.id);
    } catch (error) {
        console.log(error);
    }
})

router.post("/books", async (req, res) => {
    try {  
        const book = new Book(req.body);
        const user = await User.findOne({_id: req.body.user});
        await book.save(); 
        user.books.push(book);
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

router.post("/book/:bookId/review", async (req, res) => {
    try {
        const book = await Book.findOne({"any.id": req.body.book});
        const user = await User.findOne({ _id: req.body.user });
        const review = new Review(req.body);
        console.log(review)
        // if (book) {
        //     user.reviews.push(review);
        //     await user.save();
        //     Review.create(review);
        //     res.send(review)
        // } else {
        //     Book.create({any: req.body.bookObj, user: req.body.user.id});
        //     user.reviews.push(review);
        //     Review.create(review)
        //     res.send(review)
        // }
    } catch (error) {
        res.status(400).send(error);
    }
});

router.patch("/rating", async (req, res) => {
    try {
        const book = await Book.findOne({ "any.id" : req.body.bookId, user: req.body.user.id });
        book.rating = req.body.rating;
        book.save();
        res.send("patch completed");
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})


module.exports = router;
