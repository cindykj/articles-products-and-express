// Modules
const express = require('express');
const handlebars = require('express-handlebars');
const routers = express.Router();
const bodyparser = require('body-parser');
const methodOverride = require('method-override');

// Application
const app = express();
app.engine('.hbs', handlebars({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', '.hbs');

// Static public
app.use(express.static('public'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const articlesRoute = require('../routes/articles');
const productsRoute = require('../routes/products');

// Consts
const PORT = process.env.PORT || 8080





app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})