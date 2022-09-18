import { useState } from "react"

import getText from "../adapters/getText"
import GuidedText from "../components/GuidedText"
import TestLengths from "../components/TestLengths"
import TypingStats from "../components/TypingStats"
import useTimer from "../hooks/useTimer"

export const getStaticProps = async () => {
  const data = await getText()

  return {
    props: { response: data },
  }
}

const Test = ({ response }: { response: string }) => {
  const [testLength, setTestLength] = useState(60)
  const [timer, start, reset, stage, setTimer] = useTimer(testLength)
  return (
    <>
      <TestLengths setTestLength={setTestLength} />
      <TypingStats stage={stage} timer={timer} />
      <GuidedText text={response} />
    </>
  )
}

export default Test
