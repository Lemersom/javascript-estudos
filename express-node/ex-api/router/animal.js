const express = require('express')
const router = express.Router()

let animals = [
    {id: 1, nome:'Cachorro', patas:4, voa:false},
    {id: 2, nome:'Gato', patas:4, voa:false},
    {id: 3, nome:'Pássaro', patas:2, voa:true},
    {id: 4, nome:'Pinguin', patas:2, voa:false}
]

router.get('/', (req, res) => {
    res.json({status: true, data: animals})
})

let validaId = function (req, res, next) {
    let id = parseInt(req.params.id)
    if (id != id || id < 1) {
        res.status(500).json({status:false, data:null, mensagem:"Id Invalido"})
        return;
    }
    for (let i = 0; i<animals.length; i++) {
        if (animals[i].id == id) {
            req.data = animals[i]
            return next()
        }
    }
    res.status(404).json({status:false, data:null, mensagem:"Animal nao encontrado"})
}

router.get('/:id', validaId, (req, res) => {
    res.json({status:true, data:req.data})
})

router.post('/', (req, res) => {
    //Validar

    let obj = req.body
    if (obj.id && obj.nome && obj.patas && obj.voa != undefined) {
        animals.push(obj)
        res.json({status:true, data: obj})
    } else {
        res.status(500).json({status: false, data: null, mensagem: 'Animal incompleto'})
    }
})

module.exports = router