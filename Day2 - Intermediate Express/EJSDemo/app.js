var express = require('express');
var app = express();

app.use(express.static("assets"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
   res.render("home")
})

app.get("/fallinlove/:thing", function (req, res) {
   var thing = req.params.thing;
   res.render("love", {
      thing: thing
   });
})

app.get("/posts", function (req, res) {
   var posts = [{
         title: "Post 1",
         author: "Susy"
      },
      {
         title: "My lovely girl",
         author: "Kaan"
      },
      {
         title: "Hello",
         author: "Kaan"
      }
   ]

   res.render("posts", {
      posts: posts
   });
})


app.listen(3000);