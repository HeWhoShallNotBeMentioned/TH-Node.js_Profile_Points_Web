# _{TH-Node.js_Profile_Points_Web}_

#### _{Connects to Treehouse student profile api to show specific student info}, {4/6/2017}_

#### By _**{Chris Underwood}**_

## Description

_{The application connects to the Treehouse student profile api and displays the total number of badges earned and the specific number of JavaScript points earned. If the student profile does not exist or is hidden by privacy settings, the system displays an error saying their was an error getting the profile.

  app.js is used to configure the node.js server, create the 2 routes, and send message to the console letting the user know the server is up and running along with the url info for accessing the app in the browser.

  router.js connects everything to app.js. It contains the criteria to send an incoming request to which route, including the error. In the 2 processing paths, it connections to renderer.js which compiles the mulitple temaplates in the views folder. router.js also send any necessary data to renderer.js. router.js obtains its data from profile.js which actually does the api call and returns the JSON. router.js then takes the page elements that that renderer.js has manipulted and returns them to app.js for display.

  The system uses one customized error message, for if a student profile is not returned. The profile.js was given with the start of the project but is almost exactly the same as the profile.js we created for the command line version of this app.   }_

## Setup/Installation Requirements
_{ Download the files to a directory of your choice. Make sure you have node.js available on your system. Navigate to the folder you downloaded the files from via your console. Run the appliction by running node app.js }_

## Known Bugs

_{ None that I am aware of. }_

## Support and contact details

_{cunderwoodmn [at] gmail {dot} com}_

## Technologies Used

_{ node.js, JSON, Treehouse student api, views (dry), custom error messages, css, routing }_

### License

Copyright (c) <2017> <Chris Underwood>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2017 **_{Chris Underwood}_**
