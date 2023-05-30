const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require("../helpers/mysql")

const AuthorModel = sequelize.define('Author', 
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idade: DataTypes.INTEGER
    }
)

AuthorModel.sync()

module.exports = {
    list: async function() {
        const authors = await AuthorModel.findAll()
        return authors
    },
    
    save: async function(nome, idade) {
        const author = await AuthorModel.create({
            nome: nome,
            idade: idade
        })
        return author
    },

    update: async function(id, obj) {
        
        let author = await AuthorModel.findByPk(id)
        if (!author) {
            return false
        }
        
        Object.keys(obj).forEach(key => author[key] = obj[key])
        await author.save()
        return author
    },

    delete: async function(id) {
        const author = await AuthorModel.findByPk(id)
        return author.destroy()
    },

    getById: async function(id) {
        return await AuthorModel.findByPk(id)
    }
}