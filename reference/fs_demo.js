const fs = require('fs');
const path = require('path');

//create a folder
/* fs.mkdir(path.join(__dirname, 'test'), {}, function(err) {
  if(err) throw err;
  console.log('Folder created...');
}); */

// create and write to a file

fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), "Hello World", function(err) {
  if(err) throw err;
  console.log('Folder writren to...');
});
