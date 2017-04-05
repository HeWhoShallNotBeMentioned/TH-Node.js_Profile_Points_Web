const router = require("./router.js");

//problem: We need a simple way to look at a users badge count and JavaScript points from a web browser.
//solution: Use Node.js to perform the profile lookups and serve our template via http.

//Create a web server.
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  router.homeRoute(request, response);
  router.userRoute(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
