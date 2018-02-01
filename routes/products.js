// Modules
const express = require('express');
const router = express.Router();

// Routes
const productsDb = require('../db/products');

// Retrieves all products
router.get('/', (req, res) => {
  let products = productsDb.getAll()
  let locals = {
    catalog: products
  }
  res.json(locals);
})

// Posts new product
router.post('/', (req, res) => {
  let newProduct = productsDb.createProduct(req.body);
  console.log()
  res.json(newProduct);
});

// // Edits a product
// router.put('/', (req, res) => {

// });

// // Removes product by id
// router.delete('/products/:id', (req, res) => {

// });

// // Renders display all products
// router.get('/products', (req, res) => {
//   res.sendFile('index.hbs', {
//     root: _dirname + '/products'
//   });
// });

// // Displays product info via ID
// router.get('/products/:id', (req, res) => {
//   res.sendFile()
// })

//

module.exports = router