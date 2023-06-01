const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require("../helpers/mysql")

const PokemonModel = sequelize.define('Pokemon', 
    {
        name: DataTypes.STRING,
        type: DataTypes.STRING
    }
)

PokemonModel.sync()