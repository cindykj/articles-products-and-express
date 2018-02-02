// Modules
const express = require('express');
const router = express.Router();

// Routes
const articlesDb = require('../db/articles');

router.get('/', (req, res) => {
  let articles = articlesDb.getAll() // received array of objects
  let locals = {
    collection: articles
  }
  res.render

})

module.exports = router