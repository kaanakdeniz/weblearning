const express = require('express'),
   bodyParser = require('body-parser'),
   app = express(),
   mongoose = require('mongoose'),
   Campground = require('./models/campground'),
   Comment = require('./models/comment'),
   seedDB = require('./seeds');


mongoose.connect("mongodb://localhost/serenity_camp", {
   useUnifiedTopology: true,
   useNewUrlParser: true
});
seedDB();

app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(express.static(__dirname + "/assets"));
app.set("view engine", "ejs");



app.get("/", (req, res) => {
   res.render("landing");
})

app.get("/campgrounds", (req, res) => {
   Campground.find({}, (err, campgrounds) => {
      if (err) {
         console.error("Error: ", err);
      } else {
         res.render("campgrounds/campgrounds", {
            campgrounds
         });
      }
   })
});

app.post("/campgrounds", (req, res) => {
   var name = req.body.name;
   var image = req.body.image;
   var description = req.body.description;
   var newCampground = {
      name: name,
      image: image,
      description: description
   }
   Campground.create(newCampground, (err, campground) => {
      if (err) {
         console.error("Error: ", err);
      } else {
         console.log("Campground created: ");
         console.log(campground);
         res.redirect("/campgrounds");
      }
   });
});

app.get("/campgrounds/new", (req, res) => {
   res.render("campgrounds/new");
});

app.get("/campgrounds/:id", (req, res) => {
   var id = req.params.id;
   Campground.findById(id).populate("comments").exec((err, campground) => {
      if (err) {
         console.error("Error: ", err);
      } else {
         res.render("campgrounds/show", {
            campground
         });
      }
   })
})

app.get("/campgrounds/:id/comments/new", (req, res) => {
   Campground.findById(req.params.id, (err, campground) => {
      if (err) {
         console.log("Error: ", err);
      } else {
         res.render("comments/new", {
            campground
         });
      }
   })
})

app.post("/campgrounds/:id/comments", (req, res) => {
   Campground.findById(req.params.id, (err, campground) => {
      if (err) {
         console.log("Error: ", err);
         redirect("/campgrounds")
      } else {
         Comment.create(req.body.comment, (err, comment) => {
            if (err) {
               console.log("Error: ", err);
            } else {
               campground.comments.push(comment);
               campground.save();
               res.redirect("/campgrounds/" + campground._id);
            }
         })

      }
   })
})






app.listen(3000, () => {
   console.log("App Started on port localhost:3000!");
});