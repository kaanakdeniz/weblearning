const express = require('express'),
   bodyParser = require('body-parser'),
   app = express(),
   mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/serenity_camp", {
   useUnifiedTopology: true,
   useNewUrlParser: true
});

app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(express.static("assets"));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
   name: String,
   img: String,
   description: String
})



var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/", (req, res) => {
   res.render("landing");
})

app.get("/campgrounds", (req, res) => {
   Campground.find({}, (err, campgrounds) => {
      if (err) {
         console.error("Error: ", err);
      } else {
         res.render("campgrounds", {
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
      img: image,
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
   res.render("new");
});

app.get("/campgrounds/:id", (req, res) => {
   var id = req.params.id;
   Campground.findById(id, (err, campground) => {
      if (err) {
         console.error("Error: ", err);
      } else {
         res.render("show", {
            campground
         });
      }
   })

})








app.listen(3000, () => {
   console.log("App Started on port localhost:3000!");
});