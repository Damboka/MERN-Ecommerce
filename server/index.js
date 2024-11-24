const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const ProductModel = require('./models/Products')

const app = express()
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Ecommerce')

app.get('/getAll', (req, res) => {
    ProductModel.find({})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})
app.get('/getProduct/:id', (req, res) => {
    const id = req.params.id
    ProductModel.findById({ _id: id })
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.post('/addProduct', (req, res) => {
    ProductModel.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.json(err))
})
app.put('/updateProduct/:id', (req, res) => {
    const id = req.params.id
    ProductModel.findByIdAndUpdate({ _id: id }, {
        title: req.body.title,
        price: req.body.price
    })
    .then(res => res.json(res))
    .catch(err => res.json(err))
})
app.delete('/deleteProduct/:id', (req, res) => {
    const id = req.params.id
    ProductModel.findByIdAndDelete({ _id: id })
    .then(res => res.json(res))
    .catch(err => res.json(err))
})



app.listen(3001, () => {
    console.log("Server is running");
    
})