import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FinChart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1>FinChart</h1>
      <h2>The only investment analytics platform you need!</h2>
      <button>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </button>
      <button>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </button>
    </div>
  )
}

export default Home
