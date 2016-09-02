var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

module.exports.Profile = require("./profile");
module.exports.Careers = require("./careers");
