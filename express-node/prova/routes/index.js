var express = require('express')
var Task = require("../model/Tasks")
var router = express.Router()


function validarNome(req, res, next){
    let nome = req.body.nome
    if(nome && nome.length >= 3){
        next()
    }
    else{
        res.redirect('/error')
    }
}

function validarSituacao(req, res, next){
    let situacao = req.body.situacao
    if(situacao == 'aguardando' || situacao == 'andamento'){
        next()
    }
    else{
        req.body.situacao = 'aguardando'
        next()
    }
}


router.get('/', (req, res) => {
    req.session.nome = 'user' //session

    let params = {tasks: Task.list()}
    let situacaoPadrao = '';
    

    params['situacao'] = [
        {nome:'Aguardando', value:'aguardando', selected:situacaoPadrao == 'aguardando'}, 
        {nome:'Andamento', value:'andamento', selected:situacaoPadrao == 'andamento'}
    ]

    params['aguardando'] = Task.tasksAguardando()
    params['andamento'] = Task.tasksAndamento()
    params['finalizadas'] = Task.tasksFinalizadas()


    res.render('index', params)
})


router.post('/tarefas/new', validarNome, validarSituacao, (req, res) => {
    var {id, nome, situacao} = req.body
    
    Task.new(nome, situacao);
      
    res.redirect('/')  
})


router.get('/tarefas/updt/:id', (req, res) => {
    Task.update(req.params.id)
    
    res.redirect('/')
})


router.get('/tarefas/del/:id', (req, res) => {
    const {id} = req.params;

    if (!Task.delete(id)) {
        res.redirect('/error');
    }

    res.redirect("/");
})


router.get('/error', (req, res) => {
    res.render('error')
})



module.exports = router