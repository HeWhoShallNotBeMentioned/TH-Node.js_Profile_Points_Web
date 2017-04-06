let Profile = require("./profile.js");
let renderer = require('./renderer.js');
//let commonHeaders = ("Content-Type", "text/plain");

// Handle HTTP route GET / and POST i.e. Home
  function homeRoute(request, response) {
    //if url === "/" && GET
    if (request.url === "/") {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      renderer.view("header", {}, response);
      renderer.view("search", {}, response);
      renderer.view('footer', {}, response);
      response.end();
    //show search field
    }
  //if url == "/" && POST
    //rediredt to /:username

  }
// Handle HTTP route GET /:username i.e. /chrisunderwood
  function userRoute(request, response){
    //if url=="/..." ... = anything
    var username = request.url.replace("/","");
    if(username.length > 0){
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      renderer.view("header", {}, response);
      //get json from Treehouse
      var studentProfile = new Profile(username);
      //on "end"
      studentProfile.on("end", function(profileJSON){
        //show profile

        //store the value that we need
        var values = {
          avatarULR: profileJSON.gravatar_url,
          username: profileJSON.profile_name,
          badges: profileJSON.badges.length,
          javaScriptPoints: profileJSON.points.JavaScript
        };
        //simple response
        renderer.view("profile", values, response);
        renderer.view('footer', {}, response);
        response.end();
      });
      //on "error"
      studentProfile.on("error", function(error){
        //show error
        renderer.view('error', {errorMessage: error.message}, response);
        renderer.view("search", {}, response);
        renderer.view('footer', {}, response);
        response.end();
      });

    }
  }

module.exports.homeRoute = homeRoute;
module.exports.userRoute = userRoute;
