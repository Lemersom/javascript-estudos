const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const mustacheExpress = require('mustache-express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const engine = mustacheExpress()
app.engine("mustache", engine);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache');

//app.use("/pokemon", require("./control/PokemonAPI"))
app.use("/", require("./control/index"))

app.listen(3000, () => {
    console.log("Listenning")
})