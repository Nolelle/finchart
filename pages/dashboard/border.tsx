import type { NextPage } from "next"
import Link from "next/link"

const Border: NextPage = () => {
  return(
    <>
      <div className = "horizontal">
        <div className = "horizontal-search">
          <input type="text" placeholder = "Search for a name, ticker or function" size ="15" />
        </div>
        <div className = "horizontal-login">
            <Link href="/login" passHref>
          <div>
            Login
          </div>
            </Link>
            <Link href="/signup" passHref>
              <div>Sign Up Free!</div>
            </Link>
       </div>
      </div>
        <div className = "vertical">
      <div>FinChart</div>
        <div>Todays Markets</div>
        <div>Markets News</div>
        <div>Market Movers</div>
        <div>My Watchlists</div>
      </div>
    </>
  )
}

export default Border