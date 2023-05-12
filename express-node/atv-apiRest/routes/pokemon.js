const express = require('express')
const router = express.Router()
var Pokemon = require('../model/PokemonModel')

//Listar
router.get('/', (req, res) => {
    res.json(Pokemon.listar())
})

//Buscar por ID
router.get('/:id', (req, res) => {
    let busca = Pokemon.buscar(parseInt(req.params.id)) 
    if(busca.status == false){
        res.status(busca.error).json(busca)
    }
    else{
        res.json(busca)
    }
})

//Inserir
router.post('/', (req, res) => {
    let insercao = Pokemon.inserir(req.body)
    if(insercao.status == false){
        res.status(insercao.error).json(insercao)
    }
    else{
        res.json(insercao)
    }
})
/* Exemplo para Inserir: 
    {
    "id": 4,
    "name": "Charmander",
    "type": "Fire"
    }
*/

//Alterar
router.put('/:id', (req, res) => {
    let alteracao = Pokemon.alterar(parseInt(req.params.id), req.body)
    if(alteracao.status == false){
        res.status(alteracao.error).json(alteracao)
    }
    else{
        res.json(alteracao)
    }
})
/* Exemplo para Alteração: 
    {
    "id": 1,
    "name": "Bulbasaur",
    "type": "Grass-Poison"
    }
*/

//Deletar
router.delete('/:id', (req, res) => {
    let exclusao = Pokemon.excluir(parseInt(req.params.id))
    if(exclusao.status == false){
        res.status(exclusao.error).json(exclusao)
    }
    else{
        res.json(exclusao)
    }
})




module.exports = router