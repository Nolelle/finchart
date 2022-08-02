import type { NextPage } from 'next'
import Link from 'next/link'

const Signup: NextPage = () => {
  return (
    <>
    <form action="" >
  <div>
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>

    <label><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <label><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

    <label>
      <input type="checkbox" name="remember"/> Remember me
    </label>

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <div>
      <button type="submit">Sign Up</button>
      <Link href="/">
      <button type="button">Cancel</button>
      </Link>
    </div>
  </div>
</form>  
   <div>
    <span>Already have an account?</span>
   <button>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </button>
    
    </div> 
    
    
    </>
   
  )
}

export default Signup 
