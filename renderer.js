let fs = require('fs');


function view(templateName, values, response) {
  //read from template files
    var fileContents = fs.readFileSync('./views/' + templateName + '.html');
      //Insert values into the content

      //Write out to the response
      response.write(fileContents);

}

module.exports.view = view;
