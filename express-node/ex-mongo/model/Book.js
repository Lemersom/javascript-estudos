const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    nome: String,
    autor: String,
    editora: String,
    ano: Number
})

const BookModel = mongoose.model("Book", BookSchema)

module.exports = {
    list: async function() {
        const books = await BookModel.find({}).lean()
        return books
    },
    
    save: async function(nome, autor, editora, ano) {
        const book = new BookModel({
            nome: nome,
            autor: autor,
            editora: editora,
            ano: ano
        })
        await book.save()
        return book
    },

    update: async function(id, obj) {
        //Devolve o objeto antigo
        //return await BookModel.findByIdAndUpdate(id, {$set: obj}) 

        let book = await BookModel.findById(id)
        if (!book) {
            return false
        }
        
        Object.keys(obj).forEach(key => book[key] = obj[key])
        await book.save()
        return book
    },

    delete: async function(id) {
        return await BookModel.findByIdAndDelete(id)
    },

    getById: async function(id) {
        return await BookModel.findById(id).lean()
    }
}