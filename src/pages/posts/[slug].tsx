import Head from "next/head"
import styles from './post.module.scss'
import { hygraph } from "../../graphql/hygraph";
import { GET_POST } from "../../graphql/querys/post";
import { GET_POST_SLUG } from "../../graphql/querys/slug";
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from "next/link";

export const Post = ({post}: any) => {
  return (
    <>
      <Head>
        <title>Post | Bloog</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.createdAt}</time>
          <div>
            <Link href="/" passHref>
              <a>
                {post.author.name}
              </a>
            </Link>
          </div>
          <section>
            <p dangerouslySetInnerHTML={{__html: post.content.html}} />
          </section>
        </article>
      </main>
    </>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params?.slug;

  const data = await hygraph.request(GET_POST, {
    slug: String(slug),
  });

  const post = data.post;

  return {
    props: {
      post,
    },
    // revalidate: 60 * 60 * 24, // 24 hours
  }
};

export const getStaticPaths: GetStaticPaths = async () => {

  const { posts } = await hygraph.request(GET_POST_SLUG);

  return {
    paths: posts.map((post: { slug: string; }) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: "blocking"
  };
};