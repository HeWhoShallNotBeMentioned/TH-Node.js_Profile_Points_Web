var Profile = require("./profile.js");

// Handle HTTP route GET / and POST i.e. Home
  function homeRoute(request, response) {
    //if url === "/" && GET
    if (request.url === "/") {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.write("Header\n");
      response.write("Search\n");
      response.end('Footer\n');
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
      response.setHeader('Content-Type', 'text/plain');
      response.write("Header\n");
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
        response.write(values.username + " has " + values.badges + " badges" + "\n");
        response.write(values.avatarULR + "\n");
        response.write(values.javaScriptPoints + "\n");
        response.end('Footer\n');
      });
      //on "error"
      studentProfile.on("error", function(error){
        //show error
        response.write(error.message + "\n");
        response.end('Footer\n');
      });

    }
  }

module.exports.homeRoute = homeRoute;
module.exports.userRoute = userRoute;
