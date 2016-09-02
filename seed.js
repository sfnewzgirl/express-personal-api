var db = require('./models');

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

//scrub seed.js
db.Careers.remove({}, function(err, careers){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all careers');

    //fill seed.js
    db.Careers.create(careers_list, function(err, careers){
      if (err) { return console.log('err', err); }
      console.log("created", careers.length, "careers");
      process.exit();
    });
  }
});
