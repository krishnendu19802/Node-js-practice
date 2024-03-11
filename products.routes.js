const express = require('express')
const app = express()
const router = express.Router()
const mongoose = require('mongoose')
const Product = require('./Models/product.model.js')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products)
    } catch (error) {
        res.status(400).send('Bad Querry')
    }
})

router.get('/:id', async(req, res) => {
    const {id}=req.params
    try {
      const product=await Product.findById(id)
      res.send(product)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/newcontent', async (req, res) => {
    // const { error, value } = check(req.body)
    try {
        console.log(req.body)
        const product = await Product.create(req.body)
        res.send(product)

    } catch (error) {
        res.status(400).send(error)
    }
})


router.put('/:id', async (req, res) => {

    const { id } = req.params
    try {
        await Product.findByIdAndUpdate(id, req.body);
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        await Product.findByIdAndDelete(id)
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router;