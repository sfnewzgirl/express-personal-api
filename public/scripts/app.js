console.log("Sanity Check: JS is working!");
var templateProfile,
  careerProfile;

$(document).ready(function(){
  var profileSource = $('#profile-template').html();
  templateProfile = Handlebars.compile(profileSource);

  var careerSource = $('#career-template').html();
  careerProfile = Handlebars.compile(careerSource);


  $.ajax({
        method:'GET',
        url: '/api/profile',
        dataType: 'json',
        success: onSuccess,
        error: handleError
      });


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
  var profileHtml = templateProfile({
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
  var careerHtml = careerProfile({careers: json});
  $("#career-list").append(careerHtml);
}

function handleError(e) {
    console.log(e);
}
