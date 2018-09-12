var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("This repository is actually on GitHub! It wasn't going up at first, but it seems that doing the following worked: 1) git init, 2) git add ., 3) git commit -m \"commit name\", 4) heroku create, 5) git push heroku master");
});
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);