const {DataTypes, Op} = require("sequelize")
const sequelize = require("../helpers/bd")

const AuthorModel = sequelize.define('Author', 
    {
        codigo: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: DataTypes.STRING
    }
)

module.exports = {
    list: async function() {
        const authors = await AuthorModel.findAll()
        return authors
    },
    
    save: async function(nome) {
        const author = await AuthorModel.create({
            nome: nome
        })
        
        return author
    },

    update: async function(id, nome) {
        return await AuthorModel.update({nome: nome}, {
            where: { codigo: id }
        })
    },

    delete: async function(id) {
        //Precisa fazer algo para os livros que este autor possui
        return await AuthorModel.destroy({where: { codigo: id }})
    },

    getById: async function(id) {
        return await AuthorModel.findByPk(id)
    },

    getByName: async function(nome) {
        return await AuthorModel.findOne({where: {nome: {
            [Op.like]: '%' + nome + '%'
        } }})
    },

    Model: AuthorModel
}