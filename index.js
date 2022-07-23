const express = require("express");
const cors = require("cors");
const moongose = require('mongoose');
const categoryRoutes = require("./routes/categorieRoutes")
const authorRoutes = require("./routes/authorRoutes")
const postRoutes = require("./routes/postRoutes")
require('dotenv').config()

//Porta
const PORT = process.env.PORT || 3001

//conecção com mongo
moongose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log('db concectado'))

//server com express
const app = express();

//middlewares
app.use(cors());
app.use(express.json())
app.use(express.static('./uploads/images'))


//instância do servidor
app.listen(PORT, () => {
    console.log('ok')
})

//Rotas
app.get('/', (req, res) => {
    res.send('Bem vindo a Api')
})
app.use('/categories', categoryRoutes),
app.use('/authors', authorRoutes),
app.use('/posts', postRoutes )
