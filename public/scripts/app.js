console.log("Sanity Check: JS is working!");
var template

$(document).ready(function(){
  var profileSource = $('#profile-template').html();
  template = Handlebars.compile(profileSource);
  $.ajax({
        method:'GET',
        url: '/api/profile',
        dataType: 'json',
        success: onSuccess,
        error: handleError
      });

  var careerSource = $('#career-template').html();
  template = Handlebars.compile(careerSource);
  $.ajax({
    method: 'GET',
    url: '/api/careers',
    dataType: 'json',
    success: careerSuccess,
    error: handleError
  })

});

function onSuccess(json) {
//  $("#profileItem").empty();
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

function careerSuccess(json) {
  var careerHtml = template ({careers: json});
  $("#career-list").append(careerHtml);
}

function handleError(e) {
    console.log(e);
}
