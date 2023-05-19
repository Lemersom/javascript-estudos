const path = require('path')

//Express
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

//Template
var mustacheExpress = require("mustache-express")
var engine = mustacheExpress()
app.engine("mustache", engine)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "mustache")

//Public
app.use(express.static(path.join(__dirname, 'public')));

//Cookies
const cookieParser = require("cookie-parser")
app.use(cookieParser())

//Sessão
const session = require("express-session")
app.use(session({
    secret: "#@A4327Asdzw",
    resave: false,
    saveUninitialized: false
}))

//Rotas
var indexRouter = require('./routes/index')
var apiRouter = require('./routes/api')

app.use('/', indexRouter)
app.use('/api/test', apiRouter)


module.exports = app