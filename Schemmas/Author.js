const moongose = require('mongoose');

const AuthorSchemma = moongose.Schema({name: {
    type: String,
    required: true
}})

const author = moongose.model('authors', AuthorSchemma)

module.exports = author