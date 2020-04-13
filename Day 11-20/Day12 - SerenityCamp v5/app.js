var express = require('express'),
   bodyParser = require('body-parser'),
   app = express(),
   mongoose = require('mongoose'),
   passport = require('passport'),
   localStrategy = require('passport-local'),
   Campground = require('./models/campground'),
   Comment = require('./models/comment'),
   User = require('./models/user'),
   seedDB = require('./seeds'),
   methodOverride = require('method-override');

var commentRoutes = require('./routes/comments'),
   campgroundRoutes = require('./routes/campgrounds'),
   indexRoutes = require('./routes/index');

mongoose.connect("mongodb://localhost/serenity_camp", {
   useUnifiedTopology: true,
   useNewUrlParser: true,
});
//seedDB();

app.use(require('express-session')({
   secret: "Hello World!",
   resave: false,
   saveUninitialized: false
}))
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use((req, res, next) => {
   res.locals.currentUser = req.user;
   next();
})

app.use(express.static(__dirname + "/assets"));
app.set("view engine", "ejs");

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


app.listen(3000, () => {
   console.log("App Started on port localhost:3000!");
});