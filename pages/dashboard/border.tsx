import type { NextPage } from "next"

const Border: NextPage = () => {
  return(
    <div>
      <h1>FinChart</h1>
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