var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/assocs", {
   useUnifiedTopology: true,
   useNewUrlParser: true
});

var postSchema = new mongoose.Schema({
   title: String,
   content: String,
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var newUser = new User({
   email: "kaanakdenz@gmail.com",
   name: "Kaan Akdeniz",
});

newUser.posts.push({
   title: "Merhaba",
   content: "Deneme"
})

newUser.save((err, user) => {
   if (err) {
      console.log("Error: ", err);
   } else {
      console.log(user);
   }
});