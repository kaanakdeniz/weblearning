var express = require('express');
var app = express();
var request = require('request');
app.set("view engine", "ejs");


app.get("/", (req, res) => {
   res.render("search")
})

app.get("/results", (req, res) => {
   var search = req.query.movieName;
   var url = "http://www.omdbapi.com/?s=" + search + "&apikey=thewdb";
   request(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
         var data = JSON.parse(body)
         res.render("results", {
            data
         });
      }
   });
})



app.listen(3000);