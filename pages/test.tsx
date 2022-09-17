import getText from "../adapters/getText"
import useTypingText from "../hooks/useTypingText"

export const getStaticProps = async () => {
  const data = await getText()

  return {
    props: { result: data },
  }
}

const Test = ({ result }: { result: string }) => {
  const [currentText, input, inputHandler] = useTypingText(result)

  return (
    <div>
      <input onChange={e => inputHandler(e.target.value)} value={input} />
      <pre>{JSON.stringify({ currentText, input }, null, 2)}</pre>
    </div>
  )
}

export default Test
