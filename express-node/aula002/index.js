const express = require("express")

const app = express()

/*ex01
Crie uma rota que receba um texto por parâmetro GET e exiba o mesmo invertido
*/
app.get("/ex01/inverter/:texto", (req, res) => {
    let invertido = req.params.texto
    invertido = invertido.split("").reverse().join("")
    res.end("<h1>Ex01: "+invertido+"</h1>")
})


/*ex02
Considerando as 4 operações básicas (adição, subtração, multiplicação e divisão), crie uma única rota utilizando os parâmetros que receba 2 valores enviados por GET e exiba na tela o resultado da operação desejada. Exemplo:
/operacao/soma?x=1&y=2
/operacao/subtracao?x=1&y=2
/operacao/multiplicacao?x=1&y=2
/operacao/divisao?x=1&y=2
Observação: O nome da operação deve ser tratado como um parâmetro
*/
app.get("/ex02/operacao/:op", (req, res) => {
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


/*ex03
Crie uma rota que receba 2 valores por POST (usuário e senha) e faça a validação da
mesma. Se a senha estiver contida no nome do usuário exiba uma mensagem de que o
usuário possui permissão de acesso, caso contrário informe que não possui.
*/
const path = require('path');

//para conseguir acessar o arquivo html
app.use("./ex03login.html", express.static("public"))

//para conseguir trabalhar com as requisições post - req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/ex03/login", (req, res) => {
    res.sendFile(path.join(__dirname, '/ex03login.html'))
})

app.post("/ex03/login", (req, res) => {
    const usuario = req.body.usuario //.usuario vem do form
    const senha = req.body.senha     //.senha vem do form
    
    if(usuario.includes(senha)){
        res.send("Usuário possui permissão de acesso")
    }
    else{
        res.send("Usuário não possui permissão de acesso")
    }
})


/*ex04
Crie uma rota para gerar textos aleatórios. O usuário informa por parâmetro (livre
escolha) o número de caracteres ou o número de palavras e o sistema gera a partir de um conjunto de palavras pré-definidas um texto aleatório atendendo ao que foi
solicitado.
*/
app.get("/ex04/aleatorio", (req, res) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    function gerarString(tamanho){
        let str = '';
        for(let i = 0; i < tamanho; i++){
            str += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return str
    }

    res.end("<h1>Ex04: " + gerarString(req.query.tamanho) + "</h1>")
})


/*ex05
Crie uma rota que receba um número indeterminado de valores numéricos, informado
por GET e informe qual a média dos valores recebidos
*/
app.get("/ex05/media", (req, res) => {
    let nums = req.query.nums.split(",")
    let soma = 0
    for(let i = 0; i < nums.length; i++){
        soma += parseInt(nums[i])
    }

    let media = soma / nums.length

    res.end(`<h1>ex05: ${media}</h1>`)
})



//listen
app.listen(3000, () => {
    console.log("Running on port 3000")
})