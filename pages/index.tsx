import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>FinChart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>FinChart</h1>
      <h2>The only investment analytics platform you need!</h2>
      <button className="Sign-Up-Button">
        <Link href="/pages/signup">
          <a>Sign Up</a>
        </Link>
      </button>
      <button className="Login-Button">
        <Link href="/pages/login">
          <a>Login</a>
        </Link>
      </button>
    </div>
    </>
  )
}

export default Home
