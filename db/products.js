let catalog = [];
let id = 0;
let product;

module.exports = {
  createProduct: createProduct,
  getAll: getAll,
  // getById: getById,
  // insert: insert,
}
// Retrieves all products
function getAll () {
  return catalog;
}

// Post new product
function createProduct(data) {
  catalog.push({
    id: ++id,
    name: data.name,
    price: Number(data.price),
    inventory: Number(data.inventory),
  })
  console.log(catalog);
  return catalog;
}



// Retrieves all products
// function getAll() {
//   return products;
// }

// function getById() {

// }