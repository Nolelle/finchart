import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <div className = "homepage">
        <div className = "navbar">
      <Head>
        <title>FinChart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className = "features">
        <div>FinChart</div>
      <div>
        <Link href="/product" passHref>
          <div>Product</div>
        </Link>
      </div>
      <div>
        <Link href="/use-cases" passHref>
          <div>Use Cases</div>
        </Link>
      </div>
      <div>
        <Link href="/Pricing" passHref>
          <div>Pricing</div>
        </Link>
      </div>
      <div>
        <Link href="/compare" passHref>
          <div>Compare</div>
        </Link>
      </div>
    </div>
      <div className = "login">
        <Link href="/signup" passHref>
          <div>Sign Up</div>
        </Link>
        <Link href="/login" passHref>
          <div>Login</div>
        </Link>
      </div>
      </div>
      <div className = "body">
        <h2>The only investment analytics platform you need!</h2>
        <Link href= "/dashboards/dashboard" passHref>
        <button>Get started!</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
