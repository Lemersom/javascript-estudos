const express = require("express")
const router = express.Router()

const {sucess, fail} = require("../helpers/resposta")
const AuthorDAO = require('../model/Author')

router.get("/", async (req, res) => {
    let authors = await AuthorDAO.list()
    res.json(sucess(authors, "list"))
})

router.get("/:id", async (req, res) => {
    let obj = await AuthorDAO.getById(req.params.id)
    if (obj)
        res.json(sucess(obj))
    else 
        res.status(500).json(fail("Não foi possível localizar o autor"))
})

router.post("/", async (req, res) => {
    const {nome} = req.body

    //TODO validar os campos
    let obj = await AuthorDAO.save(nome)
    if (obj)
        res.json(sucess(obj))
    else 
        res.status(500).json(fail("Falha ao salvar o novo autor"))
})

router.put("/:id", async (req, res) => {
    const {id} = req.params
    const {nome} = req.body

    //TODO validar os campos

    let [result] = await AuthorDAO.update(id, nome)
    console.log(result)
    if (result)
        res.json(sucess(result))
    else
        res.status(500).json(fail("Falha ao alterar o autor"))
})

router.delete("/:id", async (req, res) => {
    let result = await AuthorDAO.delete(req.params.id)
    if (result)
        res.json(sucess(result))
    else
        res.status(500).json(fail("Autor não encontrado"))
})

module.exports = router