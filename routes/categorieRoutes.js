const Router = require('express').Router;
const category  = require('../Schemmas/Category')

const router = new Router()

router.post('/post', async (req, res) => {
    try {
        const { name } = req.body;
        const response = await category.create({name})
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

router.get('/get/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await category.findById(id)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})
router.put('/put/:id', async (req, res) => {
    try {
        const  data  = req.body;
        const { id } = req.params
        const response = await category.findByIdAndUpdate(id, data, { new: true })
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params
        const response = await category.findByIdAndDelete(id)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})


module.exports = router
