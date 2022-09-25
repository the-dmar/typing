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
  const { setText } = useTypingContext()

  useEffect(() => {
    typeof response === "string" &&
      setText(
        `Sea glass is a great example of an item made by both man and nature. When glass from bottles or jars breaks near the ocean, the glass is smoothed out by the waves and sand, giving it a frosty look. All fruits have seeds. They may be different shapes and sizes, but they are almost always on the inside. The only fruit`
      )
    // typeof response === "string" && setText(response)
  }, [])

  return (
    <>
      <TestLengths />
      <TypingStatistics />
      <GuidedText />
    </>
  )
}

export default Test
