// Modules
const express = require('express');
const router = express.Router();

// Routes
const productsDb = require('../db/products');

router.get('/', (req, res) => {
  let products = productsDb.getAll()
  let locals = {
    collection: products
  }
  res.render
})