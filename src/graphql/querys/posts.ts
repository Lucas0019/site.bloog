import { gql } from "graphql-request";

export const QUERY = gql`
  {
    posts {
      id
      slug
      title
      createdAt
      coverPhoto {
        url
      }
    }
  }
`;