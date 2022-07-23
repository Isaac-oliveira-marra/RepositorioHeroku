const moongose = require('mongoose');

const CategorySchemma = moongose.Schema({name: { type: String, required: true }})

const category = moongose.model('categories', CategorySchemma)

module.exports = category