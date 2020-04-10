var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
   useUnifiedTopology: true,
   useNewUrlParser: true
});

var userSchema = new mongoose.Schema({
   name: String,
   tc: Number
});

var User = mongoose.model("User", userSchema);

var kaan = new User({
   name: "Kaan",
   tc: 1995
})

kaan.save((err, user) => {
   if (err) {
      console.error("Error: ", err);
   } else {
      console.log(user + " is saved to db succesfully.");
   }
})

User.create({
   name: "Eda",
   tc: 2019
}, (err, user) => {
   if (err) {
      console.error("Error: ", err);
   } else {
      console.log(user);
   }
})

User.find({}, (err, users) => {
   if (err) {
      console.error("Error: ", err);
   } else {
      console.log(users);
   }
})