import type { NextPage } from 'next'
import Link from 'next/link'
import Signupform from './components/signupform'

const Signup: NextPage = () => {
  return (
    <>
   <div className = "flex flex-row justify-between">
    <div>Finchart</div>
   <div className = "flex flex-row mr-6">
    <div>Already have an account?</div>
    <div>
        <Link href="/login">
          <a>Login</a>
        </Link>
    </div>
    </div>
  </div> 
  <Signupform/>
  </>
  )
}

export default Signup 
