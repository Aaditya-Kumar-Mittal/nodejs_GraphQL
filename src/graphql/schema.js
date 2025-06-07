// This file defines the structure (schema) of the GraphQL data

const { gql } = require("graphql-tag");

// Scalar types: String, Float, Int, Boolean, ID -> ID is a unique identifier
// ! means that the field is required (non-nullable)

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    price: Float!
    category: String!
    inStock: Boolean!
  }

  type Query {
    products: [Product]! # Returns a list of all products
    product(id: ID!): Product # Returns a single product by ID
  }

  type Mutation {
    createProduct(
      title: String!
      category: String!
      price: Float!
      inStock: Boolean!
    ): Product

    deleteProduct(id: ID!): Boolean

    updateProduct(
      id: ID!
      title: String
      category: String
      price: Float
      inStock: Boolean
    ): Product
  }
`;

module.exports = typeDefs;

