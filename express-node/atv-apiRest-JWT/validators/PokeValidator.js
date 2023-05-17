const Joi = require('joi')

const PokeSchema = Joi.object({
    id: Joi.number().integer().greater(0),
    name: Joi.string().required(),
    type: Joi.string().required()
}).with("id", ["name", "type"])

module.exports = {
    validateId: function(req, res, next){
        const {error, value} = Joi.number().integer().greater(0).validate(req.params.id)

        if(error){
            return res.status(500).json({status: false, msg: "Invalid ID code"})
        }

        req.params.id = value
        return next()
    },
    validateName: function(req, res, next){
        const {error, value} = PokeSchema.validate(req.body.name)

        if (error) {
            return res.json({status: false, msg: "Pokémon name is invalid"})
        }

        req.body.name = value
        return next()
    },
    validateType: function(req, res, next){
        const {error, value} = PokeSchema.validate(req.body.type)

        if (error) {
            return res.json({status: false, msg: "Pokémon type is invalid"})
        }

        req.body.type = value
        return next()
    }
}