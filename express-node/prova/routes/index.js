var express = require('express')
var Task = require("../model/tasks")
var router = express.Router()


router.get('/', (req, res) => {
    let obj = Task.getElementById(req.query.tid);
    let params = { tasks: Task.list(), task: obj }
    let situacaoPadrao = '';
    if (obj){
        situacaoPadrao = obj.situacao;
    }

    params['situacao'] = [
        {nome:'Aguardando', value:'aguardando', selected:situacaoPadrao == 'aguardando'}, 
        {nome:'Andamento', value:'andamento', selected:situacaoPadrao == 'andamento'}, 
    ]

    console.log(obj)
    res.render('index', params)
})


router.post('/tarefas/new', (req, res) => {

    const {id, nome, situacao} = req.body

    if(id === undefined){
        Task.new(nome, situacao);
    }
    else{
        Task.update(id, nome, situacao);
    }

    res.redirect('/')
})


router.get('/tarefas/updt', (req, res) => {

})


router.get('/tarefas/del/:id', (req, res) => {
    const {id} = req.params;

    if (!Task.delete(id)) {
        res.send("Falha ao concluir a tarefa");
        return;
      }
      res.redirect("/");
})





module.exports = router