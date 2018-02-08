// Modules
const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const methodOverride = require('method-override');


// Routes
const articlesDb = require('../db/articles');
const knex = require('../knex/knex.js');

router.get('/', (req, res) => {
  let articles = articlesDb.getAll() // received array of objects
  let locals = {
    collection: articles
  }
  res.render

})

module.exports = router