const express = require('express');
const router = new express.Router();
const Products = require('../models/products');

router.post("/products", async (req, res) => {
    try {
        const addingProducts = new Products(req.body);
        console.log(req.body);
        const insertProducts = await addingProducts.save();
        res.status(201).send(insertProducts);
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
});

router.get("/products", async (req, res) => {
    try {
        const getProduct = await Products.find({});
        res.send(getProduct);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/products/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const getProduct = await Products.findById(id); // Fix: Use 'id' instead of '_id'
        res.send(getProduct);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.put("/products/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateProduct = await Products.findByIdAndUpdate(_id, req.body, {
            new: true, // This option returns the modified document instead of the original
            runValidators: true, // This option runs model validations on the update operation
        });

        if (!updateProduct) {
            return res.status(404).send({ error: 'Product not found' });
        }

        res.send(updateProduct);
    } catch (e) {
        res.status(500).send(e);
    }
});


module.exports = router;
