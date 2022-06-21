import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import NavBar from './navbar';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FinChart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar/>
    </div>
  )
}

export default Home
