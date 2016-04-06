var
    express = require("express"),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    favicon = require("serve-favicon"),
    url = require("url"),
    fs = require("fs"),
    app = express(),
    port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(favicon(__dirname + "/public/favicon.ico"));

app.post("/user", function (req, res) {
    var ans = {
        name: req.body.username.toUpperCase(),
        lastname: req.body.userlastname.toUpperCase()
    };
    res.set("Content-Type","application/json").send(ans);
});

app.listen(port, function () {
    console.log("Server is listening port " + port);
});