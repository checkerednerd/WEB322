//2018-09-11

//Blocking Code Example

//executes sequentially
var fs = require('fs');

var data = fs.readFileSync('web322.txt');
console.log(data.toString());

console.log('Dense Webdev course');
console.log('Really nice Webdev course');
console.log('A little tough Webdev course');
console.log('Blocking Program Ended');

console.log('*****************************');

//Non-Blocking Code Example

//console.logs executed first, file contents executed later
var fs = require('fs'); //only re-declaring it for example readability, normally we would not do this

fs.readFile('web322.txt', function(err, data) { //nameless function that requires the parameters error and data read from the file
    if (err) return console.error(err); //if an error was found opening the file (error detected by runtime environment, node.JS)
    console.log(data.toString());
});

console.log('Dense Webdev course');
console.log('Really nice Webdev course');
console.log('A little tough Webdev course');
console.log('Non-Blocking Program Ended');