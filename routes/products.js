// Modules
const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const methodOverride = require('method-override');

// Routes
const knex = require('../knex/knex.js');

// // RENDER PRODUCTS ID PAGE
// router.get('/:id', (req, res) => {
//   return res.render('product')
// });

// // RENDER PRODUCTS EDIT PAGE
// router.get('/:id', (req, res) => {
//   return res.render('edit')
// });

// RENDER NEW PRODUCT PAGE
router.get('/new', (req, res) => {
  return res.render('templates/products/new');
});

// KNEX POST NEW PRODUCT 
router.post('/', (req, res) => {

  let data = {
    name,
    price,
    inventory
  } = req.body;
  if (!name || !price || !inventory) {
    console.log(name, price, inventory);
    return res.status(400).json({
      message: `Must POST all product fields`
    });
  }
  return knex('products').insert(data, `*`)
    .then(insertedProduct => {
      return insertedProduct
    })

    .then(newProduct => {
      return res.redirect(`/products`) //should be res.redirect('/products/id)
    })

    .catch(err => {
      return res.redirect(`/products/new`)
    })
}); // closing for post new product


// GET ALL PRODUCTS
router.get ('/', (req, res) => {
  return knex.select().table(`products`)

  .then(result => {
    return result
    // if (result.length) {
    //   return res.json(result)
    // } else {
    //   throw new Error(`There are no products!`)
    // }
  })
  //insert hbs collections object
  .then(allProducts => {
    let locals = {
      collections: allProducts
    }
    return res.render(`templates/products/index`, locals)
  })

  .catch(err => {
    return res.status(400).json({'message': err.message})
  })
})


// router.delete('/:id', (req, res) => {
//   let idNum = parseFloat(req.params.id);
//   if (productsDb.checkID(idNum)) {
//     productsDb.deleteProduct(idNum);
//     res.render('index', productsDb.successMsg('deleteSuccess'))
//   } else {
//     return res.redirect('/products')
//   }
// }); //closing delete









// KNEX GET NEW PRODUCT
// router.get(`/:id`, (req, res) => {
//   let id = req.params.id

// })


// router.get('/:id', (req, res) => {
//   let getID = productsDb.findByID(req.params.id);
//   return res.json(getID)
// }) // closing for get product


// // Edits a product
// router.put('/:id', (req, res) => {
//   let idNum = parseFloat(req.params.id);
//   let edited = productsDb.editProduct(req.body);
//   res.json(edited);
// }); // closing for put/edit







module.exports = router


//vv this is for post, use for reference only
// let newProduct = productsDb.createProduct(req.body);
// res.json(newProduct);