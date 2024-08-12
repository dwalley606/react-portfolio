const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Project {
    _id: ID!
    name: String!
    image: String!
    repo: String!
    link: String!
    description: String!
  }

  type Query {
    getProjects: [Project]
  }

  type Mutation {
    addProject(name: String!, image: String!, repo: String!, link: String!, description: String!): Project
    updateProject(_id: ID!, name: String!, image: String!, repo: String!, link: String!, description: String!): Project
    deleteProject(_id: ID!): String
    findProject(_id: ID!): Project
  }
`;

module.exports = typeDefs;