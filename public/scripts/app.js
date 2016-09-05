console.log("Sanity Check: JS is working!");
var templateProfile;
var careerProfile;
var careerList;
var allCareers = [];

$(document).ready(function(){
  careerList = $('#career-list');

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

  $('#newCareer').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url:'/api/careers',
      dataType: 'json',
      data: $(this).serialize(),
      success: newCareerSuccess,
      error: handleError,
    });
  });

  careerList.on('click', '.editBtn', function() {
    event.preventDefault();
    $('.form-edit-career').show();
  });

  careerList.on('submit', '.form-edit-career', function(event) {
    event.preventDefault();
    $.ajax({
      method: 'PUT',
      url: '/api/careers/'+$(this).attr('data-id'),
      dataType: 'json',
      data: $(this).serialize(),
      success: editCareerSuccess,
      error: handleError
    });
  });

  careerList.on('click', '.deleteBtn', function() {
    $.ajax({
      method: 'DELETE',
      url: '/api/careers/'+$(this).attr('data-id'),
      success: deleteCareerSuccess,
      error: handleError
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
}

function render () {
  $("#career-list").empty();
  var careerHtml = careerProfile({careers: allCareers});
  $("#career-list").append(careerHtml);
}

function careerSuccess(json) {
  allCareers = json;
  render();
}

function newCareerSuccess(json) {
  $('#newCareer input').val('');
  allCareers.push(json);
  render();
}

function editCareerSuccess(json) {
  $('.form-edit-career').hide();
  var career = json;
  var careerId = career._id;
  for (var i = 0; i < allCareers.length; i++) {
    if (allCareers[i]._id === careerId) {
       allCareers[i] = career;
       break;
     }
   }
  render();
};

function deleteCareerSuccess(json) {
  var career = json;
  var careerId = career._id;
  for (var index = 0; index < allCareers.length; index++) {
    if (allCareers[index]._id === careerId) {
      allCareers.splice(index, 1);
      break;
    }
  }
  render();
}

function handleError(error) {
    console.log(error);
}
