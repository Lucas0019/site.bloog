import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head> 
        <title>Home | Bloog</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>🛒 Hey, welcome</span>
          <h1>News about the world of <span>Ecommerce</span>.</h1>
          <p>
          get access to the latest ecommerce news<br />
          </p>
        </section>
        <Image 
          src="/book.svg" 
          width={600} height={600} 
          // layout='fill'
          alt="Book" 
        />
      </main>
    </>
  )
}

export default Home
