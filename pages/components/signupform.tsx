import type { NextPage } from 'next'
import Link from 'next/link'

const Signupform: NextPage = () => {
  return (
    <>
<div className= "flex flex-row justify-between">
<div className = "mt-20">Sign Up</div>
    <form className = "" action="" >
      <div className = "flex flex-col justify-between">
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
</div>
    </>
  )
}

export default Signupform 