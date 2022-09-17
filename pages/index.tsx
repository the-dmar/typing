import { useEffect } from "react"
import Router from "next/router"

const Home = () => {
  useEffect(() => {
    Router.push("/test")
  }, [])
  return (
    <div>
      <p>Home</p>
    </div>
  )
}

export default Home
