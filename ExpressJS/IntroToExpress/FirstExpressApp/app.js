var express = require("express");
var app = express();

app.get("/", function (req, res) {
   res.send("Hi there!");
})

app.get("/bye", function (req, res) {
   res.send("Goodbye!");
})

app.get("/dog", function (req, res) {
   res.send("HAV HAV!");
})

app.get("/r/:subredditName", function (req, res) {
   var subreddit = req.params.subredditName.toUpperCase();
   res.send("WELCOME TO THE " + subreddit + " SUBREDDIT!");
})

app.get("/r/:subredditName/comments/:id/:title", function (req, res) {
   res.send("WELCOME TO COMMENTS PAGE");
})

app.get("*", function (req, res) {
   res.send("Page not found!");
})


app.listen(3000);