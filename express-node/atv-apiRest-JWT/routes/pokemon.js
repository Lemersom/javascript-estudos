const express = require('express')
var jwt = require('jsonwebtoken')
const { token } = require('morgan')
var PokeValidator = require('../validators/PokeValidator')
var Pokemon = require('../model/Pokemon')

var router = express.Router()


module.exports = router