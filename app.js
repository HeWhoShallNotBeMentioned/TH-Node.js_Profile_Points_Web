//problem: We need a simple way to look at a users badge count and JavaScript points from a web browser.
//solution: Use Node.js to perform the profile lookups and serve our template via http.

//1.Create a web server.
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  // setInterval runs after the end statement which means it never loads on screen
  // setInterval(function() {
  //   response.write("This is before the end\n");
  //   response.write(new Date() + "\n");
  // }, 1000);
  response.write("This is before the end\n");
  response.write(new Date() + "\n");

  response.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

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
