var express = require('express'),
   methodOverride = require('method-override'),
   app = express(),
   expressSanitizer = require('express-sanitizer'),
   bodyparser = require('body-parser'),
   mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({
   extended: true
}));
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(methodOverride("_method"));

var blogSchema = new mongoose.Schema({
   title: String,
   image: String,
   description: String,
   created_at: {
      type: Date,
      default: Date.now
   }
});

var Blog = mongoose.model("Blog", blogSchema);

app.get("/", (req, res) => {
   res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
   Blog.find({}, (err, blogs) => {
      if (err) {
         console.log("Error: ", err);
      } else {
         res.render("index", {
            blogs
         });
      }
   });
});

app.get("/blogs/new", (req, res) => {
   res.render("new");
});



app.post("/blogs", (req, res) => {
   Blog.create(req.body.blog, (err, newBlog) => {
      if (err) {
         console.log("Error: ", err);
         res.render("new");
      } else {
         res.redirect("/blogs");
      }
   });
});


app.get("/blogs/:id", (req, res) => {
   Blog.findById(req.params.id, (err, foundBlog) => {
      if (err) {
         res.redirect("/blogs");
      } else {
         res.render("show", {
            blog: foundBlog
         });
      }
   });
});

app.get("/blogs/:id/edit", (req, res) => {
   Blog.findById(req.params.id, (err, foundBlog) => {
      if (err) {
         res.redirect("/blogs");
      } else {
         res.render("edit", {
            blog: foundBlog
         });
      }
   });
});

app.put("/blogs/:id", (req, res) => {
   Blog.findOneAndUpdate(req.params.id, req.body.blog, (err, foundBlog) => {
      if (err) {
         console.log("Error: ", err);
         res.redirect("/blogs");
      } else {
         res.redirect("/blogs/" + req.params.id);
      }
   });
});

app.delete("/blogs/:id", (req, res) => {
   Blog.findOneAndDelete(req.params.id, (err) => {
      if (err) {
         console.log("Error: ", err);
         res.redirect("/blogs");
      } else {
         res.redirect("/blogs");
      }
   });
});


app.listen(3000);