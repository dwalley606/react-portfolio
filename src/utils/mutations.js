import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $image: String!
    $repo: String!
    $link: String!
    $description: String!
  ) {
    addProject(
      name: $name
      image: $image
      repo: $repo
      link: $link
      description: $description
    ) {
      _id
      name
      image
      repo
      link
      description
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $_id: ID!
    $name: String!
    $image: String!
    $repo: String!
    $link: String!
    $description: String!
  ) {
    updateProject(
      _id: $_id
      name: $name
      image: $image
      repo: $repo
      link: $link
      description: $description
    ) {
      _id
      name
      image
      repo
      link
      description
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($_id: ID!) {
    deleteProject(_id: $_id)
  }
`;
