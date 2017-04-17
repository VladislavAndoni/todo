var http = require("http");
var express = require("express");
var app = express();
var handlebars = require("express-handlebars").create({
    defaultLayout: "main",
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }});

app.set("port",process.env.portt || 8080);

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get("/", function (req,res) {
    res.render("home");
});
app.get("/about",function (req, res) {
    res.render("about");
});
app.get("/login", function (req, res) {
   res.render("signin");
});


app.use(function (req, res) {
    res.status(404);
    res.render("404");
});
app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500);
    res.render("500");
});
http.createServer(app).listen(app.get("port"), function () {
    console.log("Listening on port: " + app.get("port") + "...");
});




