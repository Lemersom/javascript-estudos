const express = require('express')
var path = require('path')

const app = express()

// view engine setup
var mustacheExpress = require("mustache-express")
var engine = mustacheExpress()
app.engine("mustache", engine)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

const pokemonRouter = require('./routes/pokemon')
app.use('/api/pokemon', pokemonRouter)

var indexRouter = require('./routes/index');
app.use('/', indexRouter);



module.exports = app