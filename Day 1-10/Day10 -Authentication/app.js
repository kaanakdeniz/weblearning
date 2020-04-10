var express = require('express'),
   mongoose = require('mongoose'),
   passport = require('passport'),
   bodyParser = require('body-parser'),
   localStrategy = require('passport-local'),
   passportLocalMongoose = require('passport-local-mongoose'),
   User = require('./models/user');

mongoose.connect("mongodb://localhost/auth", {
   useUnifiedTopology: true,
   useNewUrlParser: true
});

var app = express();

app.use(require('express-session')({
   secret: "Hello World!",
   resave: false,
   saveUninitialized: false
}))
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "ejs");

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
   res.render("home");
})

app.get("/secret", isLoggedIn, (req, res) => {
   res.render("secret");
})

app.get("/register", (req, res) => {
   res.render("register")
})

app.post("/register", (req, res) => {
   User.register(new User({
      username: req.body.username
   }), req.body.password, (err, user) => {
      if (err) {
         return res.render("/register");
      }
      passport.authenticate("local", (req, res, () => {
         res.redirect("/secret");
      }))

   })
   res.send("register")
})

app.get("/login", (req, res) => {
   res.render("login")
})

app.post("/login", passport.authenticate("local", {
   successRedirect: "/secret",
   failureRedirect: "/login"
}), (req, res) => {})

app.get("/logout", (req, res) => {
   req.logOut();
   res.redirect("/");
})

function isLoggedIn(req, res, next) {
   if (req.isAuthenticated()) {
      return next();
   }
   res.redirect("/login");
}

app.listen(3000);