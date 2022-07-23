const Router = require('express').Router;
const post  = require('../Schemmas/Posts')
const multer = require("multer")
const router = new Router()
const multerConfig = require("../config/multer")
const upload = multer(multerConfig)

router.post('/post/:id_auth/:id_category',upload.single('foto'), async (req, res) => {
    try {
        const { title, content } = req.body;
        const { id_auth, id_category } = req.params
        const { filename } = req.file
        const img = `http://localhost:3001/${filename}`
        const response = await post.create({ title, foto: img, content, author: id_auth, category: id_category })
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

router.get('/get/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await post.findById(id)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})
router.put('/put/:id', async (req, res) => {
    try {
        const  data  = req.body;
        const { id } = req.params
        const response = await post.findByIdAndUpdate(id, data, { new: true })
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params
        const response = await post.findByIdAndDelete(id)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})


module.exports = router
