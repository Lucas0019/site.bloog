import { gql } from "graphql-request";

export const GET_POST = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      createdAt
      author {
        name
      }
      content {
        html
      }
    }
  }
`;
