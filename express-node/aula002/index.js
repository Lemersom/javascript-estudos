const express = require("express")

const app = express()

//exercicio 01
app.get("/:texto", (req, res) => {
    let invertido = req.params.texto
    invertido = invertido.split("").reverse().join("")
    res.end("<h1>Ex01: "+invertido+"</h1>")
})

//exercicio 02
app.get("/operacao/:op", (req, res) => {
    let op = req.params.op
    let x = parseInt(req.query.x)
    let y = parseInt(req.query.y)
    let result = 0;

    if(op == "soma"){
        result = x + y
    }
    else if(op == "subtracao"){
        result = x - y
    }
    else if(op == "multiplicacao"){
        result = x * y
    }
    else if(op == "divisao"){
        result = x / y
    }
    else{
        res.end("<h1>ERRO</h1>")
    }

    res.end(`<h1>Ex02: ${result} </h1>`)
})

//exercicio 03
app.get("/ex03/login", (req, res) => {
    res.redirect("ex03login.html")
    //fazer publico
})

app.listen(3000, () => {
    console.log("Running on port 3000")
})