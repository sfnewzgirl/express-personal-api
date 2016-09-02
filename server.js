// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//gets profile
app.get('/api/profile', function (req, res) {
    res.json({
        name: "Misha LeClair",
        githubLink: "https://github.com/sfnewzgirl",
        githubProfileImage: "https://avatars1.githubusercontent.com/u/19892743?v=3&s=460",
        personalSiteLink: "https://sfnewzgirl.github.io/",
        currentCity: "Concord",
        pets: "1 fish"
    });
});

//list careers
// app.get('/api/careers', function (req, res) {
//   db.Career.find(function (err, careers){
//     if (err) {return console.log(err);}
//     res.json(careers);
//   });
// });

//list one career
// app.get('/api/careers/:id', function (req, res) {
//   db.Career.findOne({_id: req.params.id}, function(err, data) {
//     if (err) {return console.log(err);}
//     res.json(data);
//   });
// });

//adds one career
// app.post('/api/careers', function (req, res) {
//   var newCareer = new db.Career(req.body);
//   newCareer.save(function (err, savedCareer) {
//     if (err) {return console.log(err);}
//     res.json(savedCareer);
//   });
// });

//updates one career
// app.put('/api/careers/:id', function (req, res) {
//   db.Career.findOne({_id: req.params.id}, function (err, selectedCareer) {
//     selectedCareer.jobTitle = req.body.jobTitle,
//     selectedCareer.company = req.body.company,
//     selectedCareer.accomplishment = req.body.accomplishment
//     selectedCareer.save(function (err, savedUpdate) {
//       if (err) {return console.console.log(err);}
//       res.json(savedUpdate);
//     });
//   });
// });

//deletes one career
// app.delete('/api/careers/:id', function (req, res) {
//   db.Career.findOneAndRemove({_id: req.params.id}, function (err, deletedCareer) {
//     if (err) {return console.log(err);}
//     res.json(deletedCareer);
//   });
// });

/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    MishaLeClairEndpoints: true,
    message: "Welcome to Misha's Personal API!",
    documentationUrl: "https://github.com/sfnewzgirl/express-personal-api/blob/master/README.md",
    baseUrl: "https://afternoon-plains-79332.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Homepage"},
      {method: "GET", path: "/api/profile", description: "my profile information"},
      {method: "GET", path: "/api/careers", description: "lists past careers"},
      {method: "GET", path: "/api/careers/:id", description: "lists one career"},
      {method: "POST", path: "/api/careers", description: "adds one career"},
      {method: "PUT/PATCH", path: "/api/careers/:id", description: "updates one career"},
      {method: "DELETE", path: "api/careers/:id", description: "deletes one career"}
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
