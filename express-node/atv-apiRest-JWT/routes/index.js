var express = require('express')
var Pokemon = require('../model/Pokemon')
var router = express.Router()

/* GET home page */
router.get('/', function(req, res, next) {
    res.render('index')
})

module.exports = router