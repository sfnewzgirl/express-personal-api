// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var Profile = require('./models/profile');

var mishaLeClair = new Profile({
  name: "Misha LeClair",
  githubLink: "https://github.com/sfnewzgirl",
  githubProfileImage: "https://avatars1.githubusercontent.com/u/19892743?v=3&s=460",
  personalSiteLink: "https://sfnewzgirl.github.io/",
  currentCity: "Concord",
  pets: "1 fish"
});

mishaLeClair.save(function(err, Profile){
  if(err) {return console.log(err);}
  console.log("saved profile: ", Profile);
});

var Career = require('.models/careers');

var career_list = [
  {
    title: String,
    company: String,
    accomplishment: String
  },
  {
    title: String,
    company: String,
    accomplishment: String
},
];
// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
