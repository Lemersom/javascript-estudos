const express = require("express")

const app = express() //server

app.use((req, res, next) =>{
    console.log("Houve uma requisição")
    next()
})

app.use(express.static("public")) //definindo a pasta que será publica

app.get("/", (req, res) => {
    res.end("<h1>Teste Express</h1>") //usar res.end no fim das rotas para finalizar a requisição
})

app.get("/usuario/:user/mostrar", (req, res) =>{
    res.end("<h1>Tela Nome: " + req.params.user + "</h1>")
})

app.listen(3000, () => {
    console.log("Running on por 3000")
})

/*Comandos:
npm init
npm i express
npm i nodemon
nodemon index.js (ou add start no package)
*/