const moongose = require('mongoose');

const ProductSchemma = moongose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
})
 
const product = moongose.model('products', ProductSchemma)

module.exports = product