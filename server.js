// Modules
const express = require('express');
const handlebars = require('express-handlebars');
const routers = express.Router();
const bodyparser = require('body-parser');
const methodOverride = require('method-override');

const articlesRoute = require('./routes/articles');
const productsRoute = require('./routes/products');

// Consts
const PORT = process.env.PORT || 8080

// Application
const app = express();

// Static public
app.use(express.static('public'));
app.engine('.hbs', handlebars({defaultLayout: 'main', extname: '.hbs'}));

 
app.set('view engine', '.hbs');


// Middleware
app.use(bodyparser.urlencoded({ extended: true }));

// Routes
app.use('/products', productsRoute);
app.use('/articles', articlesRoute);







//Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})