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
      response.write(username + "\n");
      response.end('Footer\n');
      //get json from Treehouse
        //on "end"
          //show profile
        //on "error"
          //show error
    }
  }

module.exports.homeRoute = homeRoute;
module.exports.userRoute = userRoute;
