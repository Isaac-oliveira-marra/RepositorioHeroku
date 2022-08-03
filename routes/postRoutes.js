const Router = require('express').Router;
const post  = require('../Schemmas/Posts')
const router = new Router()
const upload = require("../config/multer")
const cloudinary = require("../config/clodinary")

router.post('/post/:id_auth/:id_category',upload.single('foto'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        const { title, content } = req.body;
        const { id_auth, id_category } = req.params
        const response = await post.create(
            { 
                title, 
                foto: result.secure_url, 
                cloudinary_id: result.public_id, 
                content, 
                author: id_auth, 
                category: id_category 
            }
        )
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

router.get('/get', async (req, res) => {
    try {
        const response = await post.find()
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

router.put('/put/:id',upload.single('foto'), async (req, res) => {
    try {
        const { id } = req.params
        const response = await post.findById(id)
        await cloudinary.uploader.destroy(response.cloudinary_id)
        const result = await cloudinary.uploader.upload(req.file.path)
        const  data  = {
            title: req.body.title || response.title,
            foto: result.secure_url || response.foto,
            content: req.body.content || response.content,
            author: req.body.author || response.author,
            category: req.body.category || response.category
        }
        response = await post.findByIdAndUpdate(id, data, { new: true })
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params
        const response = await post.findById(id)
        await cloudinary.uploader.destroy(response.cloudinary_id)
        await response.remove()
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})


module.exports = router
