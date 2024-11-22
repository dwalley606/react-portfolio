import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
    getProjects {
      _id
      name
      image
      repo
      link
      description
    }
  }
`;

export const FIND_PROJECT = gql`
  query FindProject($_id: ID!) {
    findProject(_id: $_id) {
      _id
      name
      image
      repo
      link
      description
    }
  }
`;
