import { gql } from "graphql-request";

export const GET_POST_SLUG = gql`
  {
    posts {
      slug
    }
  }
`;