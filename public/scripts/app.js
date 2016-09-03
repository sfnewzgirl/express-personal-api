console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var source = $('#profile-template').html();

var template = Handlebars.compile(source);

var profileHtml = template({ profile: .json });

console.log(profileHtml);

$("#profile").append(profileHtml);

});
