var
    express = require("express"),
    favicon = require("serve-favicon"),
    url = require("url"),
    fs = require("fs"),
    app = express(),
    port = 3000;

app.use(favicon(__dirname + '/favicon.ico'));

app.get("/", function (req, res) {
    fs.readFile("public/index.html", "utf-8", function (err, data) {
        if (err) {
            res.status(500).send({ error: err });
        } else {
            res.set({"Content-Type":"text/html"}).send(data);
        }
    });
});

app.get("/css/style.css", function (req, res) {
    fs.readFile("public/css/style.css", "utf-8", function (err, data) {
        if (err) {
            res.status(500).send({ error: err });
        } else {
            res.set({"Content-Type":"text/css"}).send(data);
        }
    });
});

app.get("/js/app.js", function (req, res) {
    fs.readFile("public/js/app.js", "utf-8", function (err, data) {
        if (err) {
            res.status(500).send({ error: err });
        } else {
            res.set({ "Content-Type": "text/javascript" }).send(data);
        }
    });
});


app.listen(port, function () {
    console.log("Server is listening port " + port);
});