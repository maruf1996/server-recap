const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const port = process.env.PORT || 5000;

const productCollections=require('./Data/product.json')

app.get('/', (req, res) => {
    res.send('Now server is running');
  });

  app.get('/allProducts', (req, res) => {
    res.send(productCollections);
  });

  app.get('/product/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const getSingleItem = productCollections?.find(product => product.id === id);
    if (!getSingleItem) {
      res.send('Product not found');
    }
    res.send(getSingleItem);
  });

  app.get('/category/:name', (req, res) => {
    const name = req.params.name;
    const getCategory = productCollections.filter(product => product.category === name);
    if (!getCategory.length) {
      res.send('Category not found');
    }
    res.send(getCategory);
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  module.exports = app;