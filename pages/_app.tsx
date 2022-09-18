import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import GlobalStyles from "../styles/Global.styled"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
