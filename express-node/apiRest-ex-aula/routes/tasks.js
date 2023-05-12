var express = require('express');
var Task = require("../model/Tasks")
var TaskValidator = require("../validators/TaskValidator")
var router = express.Router();

router.get('/', function(req, res, next) {
  if (Task.list().length == 0) {
    Task.new("Tarefa 1")
    Task.new("Tarefa 2")
  }

  res.json({status: true, list: Task.list()})
});

router.get("/:id", TaskValidator.validateId, function(req, res) {
    let obj = Task.getElementById(req.params.id);
    if (!obj) {
        return res.json({status:false, msg:"Tarefa não encontrada"})
    }

    return res.json({status:true, task:obj})
})

router.post("/", TaskValidator.validateNome, function (req, res){
    res.json({status: true, task:Task.new(req.body.nome)});
})

router.put("/:id", TaskValidator.validateId, TaskValidator.validateNome, function(req, res){ 
  let obj = Task.update(req.params.id, req.body.nome);
  if (!obj) {
    return res.json({status: false, msg: "Falha ao alterar a tarefa"})
  }
  
  res.json({status: true, task:obj});
})

router.delete("/:id", TaskValidator.validateId, function(req, res){
  if (!Task.delete(req.params.id)) {
    return res.json({status: false, msg: "Falha ao excluir a tarefa"});
  }
  
  res.json({status:true})
})

module.exports = router;
