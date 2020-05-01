# 100DaysOfCode Challenge
## Code at least one hour a day, share repos, and repeat the next day for 100 days.

### Day 1 - Introduction to ExpressJS - *01/04/2020*
I've started to learn NodeJS and ExpressJS. I made my first EJS application and I did some routing exercises.
  
  > See the [First App](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day1%20-%20IntroToExpress/FirstExpressApp) and 
  [Routing Exercises](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day1%20-%20IntroToExpress/Routing%20Exercies)
  
### Day 2 - Intermediate ExpressJS - *02/04/2020*
I've learned some next level EJS like views, partials, include and assests and rendering ".ejs" files as html page, I created post requests and tested them.
   
  > See the [EJS Demo](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day2%20-%20Intermediate%20Express/EJSDemo) and 
  [Post Request](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day2%20-%20Intermediate%20Express/PostRequest)
    
### Day 3 - Working with APIs in NodeJS - *03/04/2020*
I worked on some APIs in NodeJS, used request, request-promise packages for send request, locus package for debugging javascript code. I tried sending a request first then try JSON Placeholder [API](https://jsonplaceholder.typicode.com/) and at last made a simple movie search application by using OMDb [API](http://www.omdbapi.com/).
   
  > See the [Request Exercise](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day3%20-%20Working%20with%20APIs/First%20Exercise) , [JSON Placeholder API](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day3%20-%20Working%20with%20APIs/JSON%20Placeholder%20API) and [Movie Search App](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day3%20-%20Working%20with%20APIs/Movie%20Search%20App)  

### Day 4 - SerenityCamp - *04/04/2020*

#### Note about project!
This project is about camping grounds all around the world. I am learning web development on [Udemy](https://www.udemy.com/course/the-web-developer-bootcamp/) from [Colt Steele](https://github.com/Colt) and doing this project with this course. This project will take a few days and i am using HTML5/CSS3/Bootstrap4 on front-end side, NodeJS/ExpressJS back-end side for now. 

This day i started to project, created pages; camping ground showpage, camping ground add page, created routes; to get this pages and post function for adding new camping grounds. Some styling improvements with Bootstrap.
    
 > See the [SerenityCamp](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day4%20-%20SerenityCamp)
 
 > [Click here](https://serenitycamp.herokuapp.com/) for see and try to app.

### Day 5 - MongoDB/Mongoose - *05/04/2020*
I installed mongoDB and learned how to use mongo shell. After that i installed mongoose package with npm and learned how to connect to mongoDB database on JS, did some exercises on CRUD transactions.

> See the [Mongoose](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day5%20-%20Mongoose)

### Day 6 - SerenityCamp v2 - *06/04/2020*
In first version of the project we was keeping of campground datas in the static array in js code. After the learning of mongoDB and Mongoose i switched the location of data. I'm using database now. After that i had to change the get and post functions to integrate database to my code. Finally i can create my campgrounds on the site and send into database and get the campground datas from database for showing in the pages.

> See the [SerenityCamp v2](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day6%20-%20SerenityCamp%20v2)

### Day 7 - RESTful Blog App - *07/04/2020*
This project is basic blog app which can perform CRUD transactions with MongoDB and it uses [RESTful](https://restfulapi.net/) pattern. I learned how to override POST funtion to PUT or DELETE or something in expressJS with method-overried package, I learned another CSS framework [Semantic UI](https://semantic-ui.com/) and used in project. I did mongoDB works with moongoose package.

> See the [RESTful Blog App](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day7%20-%20RESTful%20Blog%20App)

### Day 8 - Data Associations - *08/04/2020*
This little project is about how to represent [one-to-many](https://en.wikipedia.org/wiki/One-to-many_(data_model)) relationships like user and post in ExpressJS and mongoDB with [mongoose](https://mongoosejs.com/) package. 

> See the [Data Associations](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day8%20-%20Data%20Associations)

### Day 9 - SerenityCamp v3 - *09/04/2020*
In this version I made a module named seedDB.js for loading default random data to database. I carried my user model to models directory and i will create another file for any model in this directory later. I separate views directory to different subdirectories like comments and users to differenciate same named pages like new etc. Then refactor the old code for new requirements.

> See the [SerenityCamp v3](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day9%20-%20SerenityCamp%20v3)

### Day 10 - Authentication - *10/04/2020*
This little project i used [passportJS](http://www.passportjs.org/) module for learn how to make authentication in expressJS and mongoDB. There is a basic pages; register, login and show page after success login. These information will be use for authentication in Serenity Camp project.

> See the [Authentication](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%201-10/Day10%20-Authentication)

### Day 11 - SerenityCamp v4 - *11/04/2020*
Yesterday i learned how to do authentication in expressJS with using passportJS. Today i add user authentication in the SerenityCamp project with these informations. After that i created some data assosications; user-comments and user-campgrounds. I did some refactoring on my code; create routes directory and carry all routes for separate files in this directory and clean app.js file.

> See the [SerenityCamp v4](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%2011-20/Day11%20-%20SerenityCamp%20v4)

### Day 12 - SerenityCamp v5 - *12/04/2020*
I create RESTful routes for comments to edit,add and delete functions, so logged user can be write comment about campgrounds. In here HTML just supports POST and GET methods so i used method-override function to execute PUT and DELETE routes.

> See the [SerenityCamp v5](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%2011-20/Day12%20-%20SerenityCamp%20v5)

### Day 13 - SerenityCamp v6 - *13/04/2020*
There was a problem like any user can delete or edit comments and campgrounds which anyone create. System have to allow these for just who created. So i add authentication functions to this routes then on the HTML controls the buttons with ejs if statements.

> See the [SerenityCamp v6](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%2011-20/Day13%20-%20SerenityCamp%20v6)

### Day 14 - SerenityCamp Final - *23/04/2020*
After all of these, i improved ui of app. I added to bootstrap forms login and register views, i install [flash-messages](https://www.npmjs.com/package/flash-messages) module to show errors to users with nice looking. Development is finally finished. After that i deployed the app via [Heroku](https://www.heroku.com/) and i used [Clever Cloud](https://www.clever-cloud.com/) for using MongoDB database online. These sites provides free usage with small limits.

> See the [SerenityCamp Final](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%2011-20/Day14%20-%20SerenityCamp%20Final)
and deployed app [SerenityCamp](https://serenitycamp.herokuapp.com/)

### Day 15 - TwitterClone v1 - *28/04/2020*
I want to improve my css skills so i decided to make a clone of Twitter with Boostrap4 i made aside menu but i have to a lot of override to Boostrap so i decided to learn CSS Grid and Flex in advance and make the site with Vanilla CSS.

> See the [TwitterClone v1](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%2011-20/Day15%20-%20TwitterClone%20v1)

> See the deployed site [Twitter Clone](https://twitterclonev1.netlify.app/#)

### Day 16 - TwitterClone Final - *01/05/2020*
I learned CSS Grid and Flexbox in advance. After that i started to create layout first. After that i started to create styling of page and it takes almost 800 lines of CSS code. Site is not responsive but thats enough for this. I'll improve my responsive css skills on my next project. Twitter has a lot of big and little feature so I dont want to struggle with it anymore.

> See the [TwitterClone Final](https://github.com/kaanakdeniz/100DaysOfCode/tree/master/Day%2011-20/Day16%20-%20TwitterClone%20Final)

> See the deployed site [Twitter Clone Final](https://twitterclonefinal.netlify.app/#)
