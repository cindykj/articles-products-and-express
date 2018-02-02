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

// Render the New product page
router.get('/new', (req, res) => {
  return res.render('new');
});// closing for render new page

// Posts new product
router.post('/', (req, res) => {
  let body = req.body;
  
  let data = {
    name: body.name,
    price: Number(body.price),
    inventory: Number(body.inventory),
  }
  
  let productErrs = productHasErrs(data);
  if (productErrs) {
    console.log(productErrs);
    return res.render('new', productErrs) 
  } else {
    console.log(productErrs);
    productsDb.createProduct(data);
    return res.redirect('/products') //goes to new folder
  }
}); // closing for post





// Edits a product
// router.put('/', (req, res) => {
//   let edited = productsDb.edit(req.body);
//   res.json(edited);
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


// Validate function for Products
function productHasErrs(data) {
  let isValid = true;
  let errors = {
    name: null,
    price: null,
    inventory: null
  };

//fix this later
  if (typeof data.name !== 'string') {
    isValid = false;
    errors.name = 'Name cannot contain numbers.';
  }

  if (isNaN(data.price)) {
    isValid = false;
    errors.price = 'Price must only contain numbers.';
  }

  if (data.price === 0) {
    isValid = false;
    if(errors.price) {
      errors.price + ' Price must be greater than 0.' 
    } else {
      errors.price = 'Price must be greater than 0.'
    }
  }

  if (isNaN(data.inventory)) {
    isValid = false;
    errors.inventory = 'Inventory must only contain numbers.';
  }

  if (isValid) {
    return true;
  } else {
    return errors;
  }
}; // closing for validateProduct


module.exports = router
//vv this is for post, use for reference only
// let newProduct = productsDb.createProduct(req.body);
// res.json(newProduct);