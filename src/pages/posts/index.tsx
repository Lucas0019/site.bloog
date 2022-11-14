import Head from "next/head";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/future/image";
import { GetStaticProps } from "next";
import { hygraph } from "../../graphql/hygraph";
import { QUERY } from "../../graphql/querys/posts";
import { IPosts } from "../../types/posts";
import { AuthorDatePost } from "../../components/AuthorDatePost";

export const Posts = ({ posts }: IPosts) => {

  return (
    <>
      <Head>
        <title>Posts | Bloog</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.postsList}>
          {posts &&
            posts?.map((post) => (
              <Link href={`/posts/${post?.slug}`} key={post?.id}>
                <a>
                <AuthorDatePost createdAt={post.createdAt}/>
                  <strong>{post?.title}</strong>
                  <Image
                    src={post?.coverPhoto?.url}
                    width={600}
                    height={300}
                    alt={post?.title}
                    className={styles.imageCard}
                  />
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
