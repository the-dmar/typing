import getText from "../adapters/getText"
import GuidedText from "../components/GuidedText"
import TestLengths from "../components/TestLengths"
import useTimer from "../hooks/useTimer"

export const getStaticProps = async () => {
  const data = await getText()

  return {
    props: { response: data },
  }
}

const Test = ({ response }: { response: string }) => {
  const [timer, start, reset, stage, setTimer] = useTimer()
  return (
    <>
      <TestLengths setTimer={setTimer} />
      <GuidedText text={response} />
      <button onClick={start}>start</button>
      <button onClick={reset}>reset</button>
      {timer}
    </>
  )
}

export default Test
