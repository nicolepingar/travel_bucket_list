const { gql } = require('apollo-server-express');
//!!! mutations not done!
const typeDefs = gql`
type User {
    _id: ID
    name: String!
    email: String!
    password: String!
  }
type Blog {
    _id: ID
    title: String!
    content: String!
    createdAt: String
}
type List {
    _id: ID
    location: String!
    urgency: Int
}
type Auth {
    token: ID!
    user: User
  }
type Query {
    users: [User]
    user(_id: ID!): User
    me: User
    lists: [List]!
    list: (_id): List
    blogs: [Blog]
    blog: (_id): Blog
   }
type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
