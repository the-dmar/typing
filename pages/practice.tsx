import { useEffect } from "react"

import getText from "../adapters/getText"
import GuidedText from "../components/GuidedText"
import useTypingContext from "../hooks/useTypingContext"

export const getStaticProps = async () => {
  const data = await getText()

  return {
    props: { response: data },
  }
}

const Practice = ({ response }: { response: string }) => {
  const { setText } = useTypingContext()

  useEffect(() => {
    typeof response === "string" && setText(response)
  }, [])

  return (
    <>
      <GuidedText />
    </>
  )
}

export default Practice
