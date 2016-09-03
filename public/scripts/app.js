console.log("Sanity Check: JS is working!");
var template

$(document).ready(function(){
  var source = $('#profile-template').html();
  template = Handlebars.compile(source);
  $.ajax({
        method:'GET',
        url: '/api/profile',
        dataType: 'json',
        success: onSuccess,
        error: handleError
      });
});

function onSuccess(json) {
  $("#profileItem").empty();
  var profileHtml = template({
    name: json.name,
    githubLink: json.githubLink,
    githubProfileImage: json.githubProfileImage,
    personalSiteLink: json.personalSiteLink,
    currentCity: json.currentCity,
    pets: json.pets
  })
  $("#profile").append(profileHtml);
}

function handleError(e) {
    console.log(e);
}
