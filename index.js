const express = require("express");
const cors = require("cors");
const starDB = require("./config/dbconfig")
const categoryRoutes = require("./routes/categorieRoutes")
const authorRoutes = require("./routes/authorRoutes")
const postRoutes = require("./routes/postRoutes")

//Porta
const PORT = process.env.PORT || 3001

//conecção com mongo
starDB()

//server com express
const app = express();

//Schemmas
const author = require('./Schemmas/Author')
const posts = require('./Schemmas/Posts');

//middlewares
app.use(cors());
app.use(express.json())
app.use(express.static('./uploads'))


//instância do servidor
app.listen(PORT, () => {
    console.log('ok')
})

//Rotas
app.use('/categories', categoryRoutes),
app.use('/authors', authorRoutes),
app.use('/posts', postRoutes )
