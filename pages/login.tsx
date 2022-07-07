import type { NextPage } from 'next'
import Link from 'next/link'

const Login: NextPage = () => {
  return (
    <div>
      <h1>Login</h1>
       <form action="" method="POST">
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required/>
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>
          <button type="submit">Login</button>
          <Link href="/">
           <button type="button">Cancel</button>
        </Link>
        
      </form> 
    </div>
  )
}

export default Login 
