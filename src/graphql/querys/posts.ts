import { gql } from "graphql-request";

export const QUERY = gql`
{
  posts {
    id
    slug
    title
    coverPhoto {
      url
    }
  }
}
`;