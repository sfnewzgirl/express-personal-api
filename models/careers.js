var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CareersSchema = new Schema({
  title: String,
  company: String,
  accomplishment: String,
});

var Careers = mongoose.model('Careers', CareersSchema);
module.exports = Careers;
