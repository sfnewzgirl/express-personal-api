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
//
// function render () {
//   $("#profileItem").empty();
//   var profileHtml = template({
//     name: json.name,
//     githubLink: json.githubLink,
//     githubProfileImage: json.githubProfileImage,
//     personalSiteLink: json.personalSiteLink,
//     currentCity: json.currentCity,
//     pets: json.pets
//   })
//    $("#profile").append(profileHtml);
// };

function onSuccess(json) {
  $("#profileItem").empty();
  var profileHtml = template({    });
  // var profileHtml = template({
  //      name: json,
  //      githubLink: json,
  //      githubProfileImage: json,
  //      personalSiteLink: json,
  //      currentCity: json,
  //      pets: json
  //    })
  $("#profile").append(profileHtml);
  // render ();
  console.log(json);
}

function handleError(e) {
    console.log(e);
}
