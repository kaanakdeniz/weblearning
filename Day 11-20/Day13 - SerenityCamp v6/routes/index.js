var express = require('express');
var router = express.Router({
   mergeParams: true
});
var passport = require('passport');
var User = require('../models/user');

router.get("/", (req, res) => {
   res.render("landing");
})

router.get("/register", (req, res) => {
   res.render("register");
})

router.post("/register", (req, res) => {
   var newUser = new User({
      username: req.body.username
   });
   User.register(newUser, req.body.password, (err, user) => {
      if (err) {
         console.log("Error: ", err);
         return res.render("register")
      }
      passport.authenticate("local")(req, res, () => {
         res.redirect("/campgrounds");
      })
   })
})

router.get("/login", (req, res) => {
   res.render("login", {
      message: req.flash("error")
   });
})

router.post("/login", passport.authenticate("local", {
   successRedirect: "/campgrounds",
   failureRedirect: "/login"
}), (req, res) => {})

router.get("/logout", (req, res) => {
   req.logOut();
   req.flash("success", "You logged out!");
   res.redirect("/campgrounds");
})


module.exports = router;