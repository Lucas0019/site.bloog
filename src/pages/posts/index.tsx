import Head from "next/head";
import styles from "./style.module.scss";
import Link from "next/link";

export const Posts = () => {

  return (
    <>
      <Head>
        <title>Posts | Bloog</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.postsList}>
          {Array(6).fill(0).map((_, index) => (
            <Link href='/posts/1' key={index}>
              <a>
                <time>11/02/200</time>
                <strong>Post Title</strong>
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
}

export default Posts;
