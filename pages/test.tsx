import getText from "../adapters/getText"
import GuidedText from "../components/GuidedText"
import useTypingText from "../hooks/useTypingText"

export const getStaticProps = async () => {
  const data = await getText()

  return {
    props: { response: data },
  }
}

const Test = ({ response }: { response: string }) => {
  return <GuidedText text={response} />
}

export default Test
