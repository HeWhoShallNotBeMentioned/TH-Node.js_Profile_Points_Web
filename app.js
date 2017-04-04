//problem: We need a simple way to look at a users badge count and JavaScript points from a web browser.
//solution: Use Node.js to perform the profile lookups and serve our template via http.

//1.Create a web server.

//2. Handle HTTP route GET / and POST i.e. Home
  //if url === "/" && GET
    //show search field
  //if url == "/" && POST
    //rediredt to /:username

//3. Handle HTTP route GET /:username i.e. /chrisunderwood
  //if url=="/..." ... = anything
    //get json from Treehouse
      //on "end"
        //show profile
      //on "error"
        //show error

//4. function that handles the reading of files and merge in values
  //read from a file and get a string
    //merge values into string
