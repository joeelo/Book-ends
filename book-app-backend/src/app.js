const express = require("express");
const app = express();
const router = express.Router();
const userRoutes = require("./routes/userRoutes")
const bookRoutes = require("./routes/bookRoutes");
const bodyParser = require("body-parser");
require("dotenv").config();

require("./mongoose/mongooseDB");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT || 3000;

app.use(userRoutes)
app.use(bookRoutes);

app.listen(port, () => {
    console.log("listening on port " + process.env.PORT);
})