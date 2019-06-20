const express = require("express");
const app = express();
const router = express.Router();
const userRoutes = require("./routes/userRoutes")
const todoRoutes = require("./routes/todoRoutes");
const bodyParser = require("body-parser");

require("./mongoose/mongooseDB");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT || 3000;

app.use(userRoutes)
app.use(todoRoutes);

app.listen(port, () => {
    console.log("listening on port " + port);
})