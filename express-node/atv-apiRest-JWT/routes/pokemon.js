const express = require('express')
var jwt = require('jsonwebtoken')
const { token } = require('morgan')
var Pokemon = require('../model/Pokemon')
var router = express.Router()


router.post('/login', function(req, res){
    const {user, password} = req.body
    if(user === password){
        //Relizar login e gerar token
        let token = jwt.sign({user:user}, "#Abcasdfqwr", {
            expiresIn: '20 min'
        })
        res.json({status:true, token:token})
    }else{
        res.status(403).json({status:false, msg: 'Invalid Username/Password'})
    }
})

function validateToken(req, res, next){
    let token_full = req.headers['authorization']
    if(!token_full){
        token_full = ''
    }
    let token = token_full.split(': ')[1]
    jwt.verify(token, '#Abcasdfqwr', (error, payload) => {
        if(error){
            console.log(token)
            res.status(403).json({status:false, msg:"Access denied - Invalid token", token:token})
            return
        }
        req.user = payload.user
        next()
    })
}

function validateId(req, res, next){
    let id = req.params.id

    if(!id || id < 0){
        res.status(403).json({status:false, msg:"ID is invalid"})
    }
    next()
}

function validateBody(req, res, next){
    let name = req.body.name
    let type = req.body.type

    if(!name || !type){
        res.status(403).json({status:false, msg:"Name or Type NULL"})
    }
    next()
}

// List
router.get('/', (req, res, next) => {
    if(Pokemon.list().length == 0){
        Pokemon.new("Bulbasaur", "grass-poison")
        Pokemon.new("Charmander", "fire")
        Pokemon.new("Squirtle", "water")
    }

    res.json({status:true, list:Pokemon.list()})
})

// Search
router.get('/:id', validateId, (req, res) => {
    let obj = Pokemon.getElementById(req.params.id)
    if(!obj){
        return res.json({status:false, msg:'Pokémon not found'})
    }

    return res.json({status:true, poke:obj})
})

// New
router.post('/', validateToken, validateBody, (req, res) => {
    res.json({status:true, poke:Pokemon.new(req.body.name, req.body.type)})
})

// Update
router.put('/:id', validateToken, validateId, validateBody, (req, res) => {
    let obj = Pokemon.update(req.params.id, req.body.name, req.body.type)
    
    if(!obj){
        return res.json({status:false, msg:'Pokémon update error'})
    }

    res.json({status:true, poke:obj})
})

// Delete
router.delete('/:id', validateToken, validateId, (req, res) => {
    if(!Pokemon.delete(req.params.id)){
        return res.json({status:false, msg:"Pokémon delete error"})
    }

    res.json({status:true})
})



module.exports = router