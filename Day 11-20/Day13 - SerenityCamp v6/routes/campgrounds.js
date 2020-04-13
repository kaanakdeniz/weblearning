var express = require('express');
var router = express.Router({
   mergeParams: true
});
var Campground = require('../models/campground');
var middleware = require('../middleware');

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

router.post("/", middleware.isLoggedIn, (req, res) => {
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

router.get("/new", middleware.isLoggedIn, (req, res) => {
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

router.get("/:id/edit", middleware.checkCampgroundOwnership, (req, res) => {
   Campground.findById(req.params.id, (err, foundCampground) => {
      res.render("campgrounds/edit", {
         campground: foundCampground
      });
   })
})

router.put("/:id", middleware.checkCampgroundOwnership, (req, res) => {
   Campground.findById(req.params.id).updateOne(req.body.campground, (err, updatedCampground) => {
      if (err) {
         console.log(err);
         res.redirect("/campgrounds");
      } else {
         res.redirect("/campgrounds/" + req.params.id);
      }
   })
})

router.delete("/:id", middleware.checkCampgroundOwnership, (req, res) => {
   Campground.findById(req.params.id).deleteOne((err, deletedCampground) => {
      if (err) {
         console.log(err);
         res.redirect("/campgrounds");
      } else {
         res.redirect("/campgrounds");
      }
   })
})

module.exports = router;