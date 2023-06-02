const {DataTypes} = require("sequelize")
const sequelize = require("../helpers/bd")
const Author = require('./Author')

const BookModel = sequelize.define('Book', 
    {
        nome: DataTypes.STRING,
        editora: DataTypes.STRING,
        ano: DataTypes.INTEGER
    }
)

BookModel.belongsTo(Author.Model, {
    foreignKey: 'autor'
})
Author.Model.hasMany(BookModel, {foreignKey: 'autor'})

module.exports = {
    list: async function() {
        const books = await BookModel.findAll({ include: Author.Model })
        return books
    },
    
    save: async function(nome, autor, editora, ano) {
        if (autor instanceof Author.Model) {
            autor = autor.codigo
        } else if (typeof autor === 'string') {
            obj = await Author.getByName(autor) 
            console.log(obj)
            if (!obj) {
                return null
            }
            autor = obj.codigo
        }

        const book = await BookModel.create({
            nome: nome,
            autor: autor,
            editora: editora,
            ano: ano
        })
        return book
    },

    update: async function(id, obj) {
        
        let book = await BookModel.findByPk(id)
        if (!book) {
            return false
        }
        
        Object.keys(obj).forEach(key => book[key] = obj[key])
        await book.save()
        return book
    },

    delete: async function(id) {
        const book = await BookModel.findByPk(id)
        return book.destroy()
    },

    getById: async function(id) {
        return await BookModel.findByPk(id)
    },

    Model: BookModel 
}