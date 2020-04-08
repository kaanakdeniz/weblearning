var mongoose = require('mongoose');
var Post = require('./models/post');
var User = require('./models/user');
mongoose.connect("mongodb://localhost/assocs2", {
   useUnifiedTopology: true,
   useNewUrlParser: true
});


// User.create({
//    email: "kaanakdenz@gmail.com",
//    name: "Kaan akdeniz"
// })

// Post.create({
//    title: "Bla bla bla!2",
//    content: "Corona"
// }, (err, post) => {
//    User.findOne({
//       email: "kaanakdenz@gmail.com"
//    }, (err, user) => {
//       user.posts.push(post);
//       user.save();

//    })
// })

User.findOne({
   email: "kaanakdenz@gmail.com"
}).populate("posts").exec((err, user) => {
   console.log(user);
})