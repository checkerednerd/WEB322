console.log("Current file directory...\n" + __dirname);

console.log("File name...\n" + __filename);

//after 1 second delay (1000ms), print through the loop
setTimeout(function() {
    for (var x = 0; x < 5; x++) {
        console.log(x*2);
    }
}, 1000);

//cycle through a loop 10 times, once per second
var count = 1; //global counter
var maxCount = 10; //global maximum

var funcCountInterval = setInterval(function() {
    console.log("Hello after " + (count++) + " second(s)");
    checkMaximum();
}, 1000);

var checkMaximum = function() {
    if (count > maxCount) {
        clearInterval(funcCountInterval);
    }
}