console.log("Sanity Check: JS is working!");
var templateProfile;
var careerProfile;
var allCareers = [];

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
  });

  $('#newCareer').on('submit', function (element) {
    element.preventDefault();
    $.ajax({
      method: 'POST',
      url:'/api/careers',
      // dataType: 'json',
      data: $(this).serialize(),
      success: newCareerSuccess,
      error: handleError,
    });
  });

});

function onSuccess(json) {
  var profileHtml = templateProfile({
    name: json.name,
    githubLink: json.githubLink,
    githubProfileImage: json.githubProfileImage,
    personalSiteLink: json.personalSiteLink,
    currentCity: json.currentCity,
    pets: json.pets
  })
  $('#profile').append(profileHtml);
};

function render () {
  $("#career-list").empty();
  var careerHtml = careerProfile({careers: allCareers});
  $("#career-list").append(careerHtml);
};

function careerSuccess(json) {
  allCareers = json;
  render ();
};

function newCareerSuccess (json) {
  $('#newCareer input').val('');
  allCareers.push(json);
  render ();
};

function handleError(error) {
    console.log(error);
};
