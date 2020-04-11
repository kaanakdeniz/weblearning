var express = require('express');
var router = express.Router({
   mergeParams: true
});
var Campground = require('../models/campground');
var Comment = require('../models/comment');

router.get("/", (req, res) => {
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

router.post("/", isLoggedIn, (req, res) => {
   var name = req.body.name;
   var image = req.body.image;
   var description = req.body.description;
   console.log(req.user);
   var author = {
      id: req.user._id,
      username: req.user.username
   }
   var newCampground = {
      name: name,
      image: image,
      description: description,
      author: author
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

router.get("/new", isLoggedIn, (req, res) => {
   res.render("campgrounds/new");
});

router.get("/:id", (req, res) => {
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

function isLoggedIn(req, res, next) {
   if (req.isAuthenticated()) {
      return next();
   }
   res.redirect("/login");
}

module.exports = router;