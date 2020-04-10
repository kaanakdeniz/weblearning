var express = require("express");
var app = express();

app.get("/", function (req, res) {
   res.send("Hi! Welcome Routing Exercise!")
})

app.get("/speak/:animalName", function (req, res) {
   var animal = req.params.animalName.toLowerCase();
   if (animal === "donkey") {
      res.send("Aiiii!");
   } else if (animal === "cow") {
      res.send("Mööö!");
   } else if (animal === "dog") {
      res.send("Hav Hav!");
   }
})

app.get("/repeat/:message/:times", function (req, res) {
   var times = Number(req.params.times);
   var message = req.params.message;
   var speak = "";
   for (var i = 0; i < times; i++) {
      speak += message + " ";
   }
   res.send(speak);
})


app.listen(3000);