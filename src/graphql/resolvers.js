// This file contains methods that will enable us to call the Queries
// This will resolve what you are going to do.

const products = require("../data/products");

const resolvers = {
  Query: {
    // Returns the list of products
    products: () => products,

    // Returns a single product by ID
    product: (_, { id }) => products.find((item) => item.id === id),
  },

  // Creating Mutations
  Mutation: {
    // Creates a new product
    createProduct: (_, { title, category, price, inStock }) => {
      const newlyCreatedProduct = {
        id: String(products.length + 1),
        title,
        category,
        price,
        inStock,
      };

      products.push(newlyCreatedProduct);
      return newlyCreatedProduct;
    },

    // Deletes a product
    deleteProduct: (_, { id }) => {
      const index = products.findIndex((product) => product.id === id);

      if (index === -1) return false;

      products.splice(index, 1);
      return true;
    },

    // Update a product
    updateProduct: (_, { id, ...updates }) => {
      const index = products.findIndex((product) => product.id === id);

      if (index === -1) return null;

      const updatedProduct = { ...products[index], ...updates };

      products[index] = updatedProduct;
      return updatedProduct;
    },
  },
};

module.exports = resolvers;
