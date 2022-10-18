import type { NextPage } from "next"
import Border from "./border"
import Charts from "./charts"

const Dashboard: NextPage = () => {
  return(
    <div>
      <Border/>
      <Charts/>
    </div>
  )
}

export default Dashboard 