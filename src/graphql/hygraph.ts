import { GraphQLClient } from "graphql-request";

const baseURL = "https://api-sa-east-1.hygraph.com/v2"
const token = process.env.HYGRAPH_TOKEN

export const hygraph = new GraphQLClient(
  `${baseURL}/${token}/master`
);