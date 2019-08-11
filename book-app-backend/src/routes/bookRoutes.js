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

router.post("/book/id/:id", async (req, res) => {
    try {
        const book = req.params.id;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${process.env.GOOGLE_BOOKS_API}`;
        const response = await fetch(url);
        const json = await response.json();
        // res.send(json.items[0]);  
        const foundBookReviews = await Book.findOne({ "any.id": req.body.book })
        .populate("reviews")
        .exec()
        res.send({data: json.items[0], reviews: foundBookReviews});
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/book/:id/user/reviews", async (req, res) => {
    try {
        const book = req.params.id;
        console.log(req.params.id);
    } catch (error) {
        console.log(error);
    }
})

router.post("/books", async (req, res) => {
    try {  
        const foundBook = await Book.findOne({"any.id": req.body.any.id, user: req.body.user.id});
        if (foundBook) {
            foundBook.finished = true;
            foundBook.save();
            res.send({message: "already saved to DB and user"});    
        } else {
            console.log("new book");
            const book = new Book();
            book.any = req.body.any;
            book.user = req.body.user.id;
            book.finished = req.body.finished;
            await book.save(); 
            res.send(book);
        }
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
        const foundBook = await Book.findOne({"any.id": req.body.book.id, user: req.body.user});
        const user = await User.findOne({ _id: req.body.user });
        const review = new Review();
        console.log(req.body.user);
        if (foundBook) {
            review.title = req.body.title, review.content = req.body.content, review.book = req.body.book.id, review.user = req.body.user;
            await review.save();
            user.reviews.push(review);
            foundBook.reviews.push(review);
            res.send(review);
        } else {
            let newBook = new Book();
            newBook.any = req.body.book, newBook.user = req.body.user
            await book.save();
            review.title = req.body.title, review.content = req.body.content, review.book = req.body.book.id, review.user = req.body.user;
            await review.save();
            newBook.reviews.push(review), newBook.save();
            user.reviews.push(review);
            res.send(review);
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put("/rating", async (req, res) => {
    try {
        const foundBook = await Book.findOne({ "any.id": req.body.book.id, user: req.body.user.id});
        if (foundBook) {
            foundBook.rating = req.body.rating;
            foundBook.save();
            console.log("hit");
            return res.send({message: "updated rating!", foundBook});
        } else {
            let newBook = new Book();
            newBook.any = req.body.book;
            newBook.user = req.body.user.id;
            newBook.rating = req.body.rating;
            // await newBook.save();
            console.log("working")
            res.send({message: "created book and rating!", newBook});
        }
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})


module.exports = router;
