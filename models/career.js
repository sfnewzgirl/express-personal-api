var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CareerSchema = new Schema({
  jobTitle: String,
  company: String,
  accomplishment: String,
});

var Career = mongoose.model('Career', CareerSchema);
module.exports = Career;
