const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(express.static("assets"));
app.set("view engine", "ejs");

var campgrounds = [{
   name: "Salmon Creek",
   image: "https://source.unsplash.com/euaPfbR6nC0/800x600"
}, {
   name: "Granite Hill",
   image: "https://source.unsplash.com/mzZVGFfMOkA/800x600"
}, {
   name: "Secret Mountain",
   image: "https://source.unsplash.com/ELevCx8PX4o/800x600"
}, {
   name: "Mountain Goat's Rest",
   image: "https://source.unsplash.com/2DH-qMX6M4E/800x600"
}, {
   name: "Salmon Creek",
   image: "https://source.unsplash.com/euaPfbR6nC0/800x600"
}, {
   name: "Granite Hill",
   image: "https://source.unsplash.com/mzZVGFfMOkA/800x600"
}, {
   name: "Secret Mountain",
   image: "https://source.unsplash.com/ELevCx8PX4o/800x600"
}, {
   name: "Mountain Goat's Rest",
   image: "https://source.unsplash.com/2DH-qMX6M4E/800x600"
}, {
   name: "Salmon Creek",
   image: "https://source.unsplash.com/euaPfbR6nC0/800x600"
}, {
   name: "Granite Hill",
   image: "https://source.unsplash.com/mzZVGFfMOkA/800x600"
}, {
   name: "Secret Mountain",
   image: "https://source.unsplash.com/ELevCx8PX4o/800x600"
}, {
   name: "Mountain Goat's Rest",
   image: "https://source.unsplash.com/2DH-qMX6M4E/800x600"
}, ]


app.get("/", (req, res) => {
   res.render("landing");
})

app.get("/campgrounds", (req, res) => {
   res.render("campgrounds", {
      campgrounds
   });
});

app.post("/campgrounds", (req, res) => {
   var name = req.body.name;
   var image = req.body.image;
   var campground = {
      name: name,
      image: image
   }
   campgrounds.push(campground);

   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
   res.render("new.ejs");
});










app.listen(3000, () => {
   console.log("App Started on port localhost:3000!");
});