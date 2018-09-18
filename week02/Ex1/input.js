var readline = require('readline'); //gives access to readline module

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("First of all, how dare you? ",
    function (answer) {
        console.log("Oh, you \"" + answer + "\", huh?");
        rl.close();
    });