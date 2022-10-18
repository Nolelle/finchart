import type { NextPage } from "next"

const Border: NextPage = () => {
  return(
    <div>
      <div>FinChart</div>
      <input type="text" placeholder="Search for a name, ticker or function"/>
      <button>Login</button>
      <button>Todays Markets</button>
      <button>Markets News</button>
      <button>Market Movers</button>
      <button>My Watchlists</button>
    </div>
  )
}

export default Border