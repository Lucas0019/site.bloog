import Head from "next/head";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { gql } from "graphql-request";
import { GetStaticProps } from "next";
import { hygraph } from "../../graphql/hygraph";
import { QUERY } from "../../graphql/querys/posts";
import { IPosts } from "../../types/posts";





export const Posts = ({ posts }: IPosts) => {
  console.log({ posts });

  return (
    <>
      <Head>
        <title>Posts | Bloog</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.postsList}>
          {posts.map((post) => (
              <Link href={`/posts/${post.slug}`} key={post.id}>
                <a>
                  <time>11/02/200</time>
                  <strong>{post.title}</strong>
                  <Image 
                    src={post.coverPhoto.url}
                    width={600}
                    height={300}
                    alt={post.title}
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore vitae nobis numquam dolorem laudantium pariatur,
                  </p>
                </a>
              </Link>
            ))}
        </div>
      </main>
    </>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await hygraph.request(QUERY);

  return {
    props: {
      posts,
    },
  };
};
