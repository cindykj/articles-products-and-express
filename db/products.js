// // import { currentId } from "async_hooks";

// let catalog = [];
// let id = 0;
// let product;

// module.exports = {
//   getAll,
//   createProduct,
//   productId,
//   checkID,
//   findByID,
//   deleteProduct,
//   successMsg,

// }
// // Retrieves all products
// function getAll () {
//   return catalog;
// }; // closing for getAll

// // Post new product
// function createProduct(data) {
//   catalog.push({
//     id: ++id,
//     name: data.name,
//     price: parseFloat(data.price),
//     inventory: parseFloat(data.inventory),
//   })
//   console.log(catalog);
//   return catalog;
// }; //closing for createProduct

// // returns a product
// function productId (idNum) {
//   console.log('product ID id: ', idNum);
//   for (let i = 0; i < catalog.length; i++) {
//     if (catalog[i].id === idNum) {
//       product = catalog[i];
//     }
//   }
//   console.log(product);
//   return product;
// }; //closing for productID

// function checkID(idNum) {
//   for(i = 0; i < catalog.length; i++) {
//     if(catalog[i].id === idNum) {
//       return true;
//     }
//   }
// }; // closing for checkID

// // looks for ID in catalog
// function findByID (id) {
//   id = parseFloat(id);
//   const foundProduct = catalog.filter(product => {
//     return product.id === id;
//   });
//   if (foundProduct.length) {
//     return foundProduct[0]
//   } else {
//     return false;
//   }
// }; //closing for findByID


// // Put edits a product
// function editProduct (body, idNum) {
//   catalog.forEach((currId) => {
//     currId.name = body.name,
//     currId.price = body.price,
//     currId.inventory = body.inventory
//   });
//   console.log(catalog);
//   return catalog;
// }; // closing for editProduct

// function deleteProduct(idNum) {
//   let deleted = catalog.splice(catalog.indexOf(productId(idNum)), 1);
//   console.log('Deleted: ', deleted);
//   return deleted;
// }; // closing for deleteProduct

// function successMsg() {
//   return {deleteSuccess: 'A product was deleted!'}
// }; // closing for successMsg
