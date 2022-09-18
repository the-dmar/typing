import { LayoutContainer } from "../styles/Layout.styled"
import Navbar from "./Navbar"

const Layout = ({ children }: { children: JSX.Element[] }) => {
  return (
    <>
      <Navbar />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  )
}

export default Layout
