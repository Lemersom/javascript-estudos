var express = require("express")
var app = require("../app")

app.get('/', (req, res) => {
    res.render('index')
})

//Cookies
app.get('/cookies', (req, res) => {
    res.render('cookies')
})

app.post('/cookies/login', (req, res) => {
    res.cookie("usuario", req.body.usuario)
    res.cookie("senha", req.body.senha)
    
    res.render('login-cookies')
})

app.get('/cookies/logout', (req, res) => {
    res.clearCookie("usuario")
    res.clearCookie("senha")
    res.render('logout-cookies')
})

app.get('/cookies/intranet', (req, res) => {
    if(!req.cookies.usuario && !req.cookies.senha){
        res.redirect("/cookies")
    }
    else{
        res.render('intranet-cookies', {usuario: req.cookies.usuario, senha: req.cookies.senha})
    }
})


//Session
app.get('/session', (req, res) => {
    res.render('session')
})

app.post('/session/login', (req, res) => {
    req.session.usuario = req.body.usuario
    req.session.senha = req.body.senha

    res.render('login-session', { usuario: req.session.usuario, senha: req.session.senha})
})

app.get('/session/logout', (req, res) => {
    req.session.usuario = ""
    req.session.senha = ""
    res.clearCookie("connect.sid")
    res.render('logout-session')
})

app.get('/session/intranet', (req, res) => {
    if(!req.session.usuario && !req.session.senha){
        res.redirect("/session")
    }
    else{
        res.render('intranet-session', {usuario: req.session.usuario, senha: req.session.senha})
    }
})



app.listen(3000, () => {
    console.log("Running on port 3000")
})