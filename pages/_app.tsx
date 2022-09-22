import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import GlobalStyles from "../styles/Global.styled"
import TypingContextProvider from "../contexts/TypingContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TypingContextProvider>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </TypingContextProvider>
  )
}

export default MyApp
