const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const User = require("../models/User");
const Comment = require("../models/Comment")
const Review = require("../models/Review");
const fetch = require("node-fetch");


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

router.post("/book/:id/user/reviews", async (req, res) => {
    try {
        const book = req.params.id;
        console.log(req.params.id);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;