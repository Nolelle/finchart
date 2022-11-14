import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Charts: NextPage = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=tJzTHRx5OjmX2HA5zRjZdFI6pgxMVcUm')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <div className="charts">Loading...</div>
  if (!data) return <div className="charts">No data</div>

const parsedData = JSON.stringify(data);
  return(
    <>
    <div className = "charts">
      {parsedData}
    </div>
    </>
  )
}

export default Charts 