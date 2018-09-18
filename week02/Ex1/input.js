var readline = require('readline'); //gives access to readline module

//to build a web server...
var express = require("express"); //gives access to express module
var app = express(); //the object returned by express

var HTTP_PORT = process.env.PORT || 8080;

//function called after the http server starts listening for requests
function onHttpStart() {
    console.log("Exress http server listening on: " + HTTP_PORT);
};

//set up a 'route' to listen on the default url (/)
app.get("/", function (req, res) {
    res.send("Hello World<br /><a href'/about'>Go to the page</a");
});

//set up another route to listen on /about
app.get("/about", function (req, res) {
    res.send("<h3>About</h3>");
});

//set up http server to listen on HTTP_PORT
// app.listen(HTTP_PORT, onHttpStart);

// // ...end web server build
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("First of all, how dare you? ",
//     function (answer) {
//         console.log("Oh, you \"" + answer + "\", huh?");
//         rl.close();
//     });