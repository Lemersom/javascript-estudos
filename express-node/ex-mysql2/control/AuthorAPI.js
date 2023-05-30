const express = require("express")
const router = express.Router()

const {sucess, fail} = require("../helpers/resposta")
const AuthorDAO = require("../model/Author")

router.get("/", (req, res) => {
    AuthorDAO.list().then((authors) => {
        res.json(sucess(authors, "list"))
    })
})

router.get("/:id", (req, res) => {
    AuthorDAO.getById(req.params.id).then(author => {
        res.json(sucess(author))
    }).catch(error => {
        console.log(error)
        res.status(500).json(fail("Não foi possível localizar o autor"))
    })
})

router.post("/", (req, res) => {
    const {nome, idade} = req.body

    AuthorDAO.save(nome, idade).then(author => {
        res.json(sucess(author))
    }).catch(error => {
        console.log(error)
        res.status(500).json(fail("Falha ao salvar o novo autor"))
    })
})

router.put("/:id", (req, res) => {
    const {id} = req.params
    const {nome, idade} = req.body

    let obj = {}
    if(nome){
        obj.nome = nome
    }
    if(idade){
        obj.idade = idade
    }

    if(obj == {}){
        return res.status(500).json(fail("Nenhum atributo foi modificado"))
    }

    AuthorDAO.update(id, obj).then(author => {
        if(author){
            res.json(sucess(author))
        }
        else{
            res.status(500).json(fail("Autor não encontrado"))
        }
    }).catch(error => {
        console.log(error)
        res.status(500).json(fail("Falha ao alterar o autor"))
    })
})

router.delete("/:id", (req, res) => {
    AuthorDAO.delete(req.params.id).then(author => {
        if(author){
            res.json(sucess(author))
        }
        else{
            res.status(500).json(fail("Autor não encontrado"))
        }
    }).catch(error => {
        console.log(error)
        res.status(500).json(dail("Falha ao excluir o autor"))
    })
})

module.exports = router