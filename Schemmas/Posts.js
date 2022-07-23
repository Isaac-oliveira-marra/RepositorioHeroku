const moongose = require('mongoose');

const PostSchemma = moongose.Schema({
    title: { type: String, required: true },
    foto: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: moongose.Schema.Types.ObjectId, ref: 'authors', required: true},
    category: { type: moongose.Schema.Types.ObjectId, ref: 'categories', required: true},
})
 
const posts = moongose.model('posts', PostSchemma)

module.exports = posts