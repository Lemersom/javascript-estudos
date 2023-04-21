const express = require("express")
const mustache = require("mustache-express")
const path = require("path")

const app = express()
const engine = mustache()

app.engine("mustache", engine)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "mustache")

app.get("/", (req, res) => {
    res.render("home", {titulo: "teste"})
})

app.get("/", (req, res) => {
    res.render("home", {titulo: "teste"})
})


app.listen(3000, () => {
    console.log("Running on port 3000")
})