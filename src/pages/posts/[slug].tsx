import Head from "next/head"
import styles from './post.module.scss'

export const Post = () => {
  return (
    <>
      <Head>
        <title>Post | Bloog</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>Design Patterns</h1>
          <time>11/02/200</time>
          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore vitae nobis numquam dolorem laudantium pariatur,
              aspernatur libero tempore. Dolores eaque explicabo sed omnis
              beatae similique corporis quas iusto in ducimus.
            </p>
          </section>
        </article>
      </main>
    </>
  )
}

export default Post