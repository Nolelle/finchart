import type { NextPage } from 'next'
import Link from 'next/link'

const NavBar: NextPage = () => {
  return (
    <div>
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

export default NavBar 
