import { useState, useEffect } from "react"

import getText from "../adapters/getText"
import GuidedText from "../components/GuidedText"
import TestLengths from "../components/TestLengths"
import TypingStatistics from "../components/TypingStatistics"
import useTimer from "../hooks/useTimer"
import useTypingContext from "../hooks/useTypingContext"

export const getStaticProps = async () => {
  const data = await getText()

  return {
    props: { response: data },
  }
}

const Test = ({ response }: { response: string }) => {
  const [testLength, setTestLength] = useState(60)
  const { setText } = useTypingContext()

  useEffect(() => {
    typeof response === "string" && setText(response)
  }, [])

  return (
    <>
      <TestLengths setTestLength={setTestLength} />
      {/* <TypingStatistics stage={stage} timer={timer} /> */}
      <GuidedText />
    </>
  )
}

export default Test
