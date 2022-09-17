import getText from "../adapters/getText"
import GuidedText from "../components/GuidedText"
import useTimer from "../hooks/useTimer"
import useTypingText from "../hooks/useTypingText"

export const getStaticProps = async () => {
  const data = await getText()

  return {
    props: { response: data },
  }
}

const Test = ({ response }: { response: string }) => {
  const [timer, start, reset, stage] = useTimer()
  return (
    <>
      <GuidedText text={response} />
      <button onClick={start}>start</button>
      <button onClick={reset}>reset</button>
      {timer}
    </>
  )
}

export default Test
