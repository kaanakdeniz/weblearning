var express = require('express');
var router = express.Router({
   mergeParams: true
});
var Campground = require('../models/campground');
var Comment = require('../models/comment');
var middleware = require('../middleware');

router.get("/new", middleware.isLoggedIn, (req, res) => {
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

router.post("/", middleware.isLoggedIn, (req, res) => {
   Campground.findById(req.params.id, (err, campground) => {
      if (err) {
         console.log("Error: ", err);
         redirect("/campgrounds")
      } else {
         Comment.create(req.body.comment, (err, comment) => {
            if (err) {
               console.log("Error: ", err);
            } else {
               comment.author.id = req.user._id;
               comment.author.username = req.user.username;
               comment.save();
               campground.comments.push(comment);
               campground.save();
               res.redirect("/campgrounds/" + campground._id);
            }
         })

      }
   })
});


router.get("/:comment_id/edit", middleware.checkCommentOwnership, (req, res) => {
   Comment.findById(req.params.comment_id, (err, foundComment) => {
      if (err) {
         res.redirect("back");
      } else {
         res.render("comments/edit", {
            campground_id: req.params.id,
            comment: foundComment
         });
      }
   })
})

router.put("/:comment_id", middleware.checkCommentOwnership, (req, res) => {
   Comment.findById(req.params.comment_id).updateOne(req.body.comment, (err, updated) => {
      if (err) {
         res.redirect("back")
      } else {
         res.redirect("/campgrounds/" + req.params.id);
      }
   })
})

router.delete("/:comment_id", middleware.checkCommentOwnership, (req, res) => {
   Comment.findById(req.params.comment_id).deleteOne({}, (err, deleted) => {
      if (err) {
         res.redirect("back")
      } else {
         res.redirect("/campgrounds/" + req.params.id);
      }
   })
})

function checkCommentOwnership(req, res, next) {
   if (req.isAuthenticated()) {
      Comment.findById(req.params.comment_id, (err, foundComment) => {
         if (err) {
            res.redirect("back");
         } else {
            if (foundCampground.author.id.equals(req.user._id)) {
               next();
            } else {
               res.redirect("back");
            }
         }
      })
   } else {
      res.redirect("back");
   }
}

function isLoggedIn(req, res, next) {
   if (req.isAuthenticated()) {
      return next();
   }
   res.redirect("/login");
}

module.exports = router;