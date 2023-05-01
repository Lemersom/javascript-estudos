var express = require("express")
var path = require("path")
var mustacheExpress = require("mustache-express")
var cookieParser = require("cookie-parser")
var session = require("express-session")

var app = express()

var engine = mustacheExpress()
app.engine("mustache", engine)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "mustache")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(session({
    secret: "#@A4327Asdzw",
    resave: false,
    saveUninitialized: false
}));



module.exports = app
