// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

// var Careers = require('.models/careers');

var careers_list = [
  {
    title: "title",
    company: "company",
    accomplishment: "accomplishment"
  },
  {
    title: "title",
    company: "company",
    accomplishment: "accomplishment"
  }
];

db.Careers.remove({}, function(err, careers){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all careers');

    // create new records
    db.Careers.create(careers_list, function(err, careers){
      if (err) { return console.log('err', err); }
      console.log("created", careers.length, "careers");
      process.exit();
    });
  }
});
// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
