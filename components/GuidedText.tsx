import useTypingText from "../hooks/useTypingText"

const GuidedText = ({ text }: { text: string }) => {
  const [currentTextBlock, input, inputHandler] = useTypingText(text)

  const getLetterColor = (i: number) => {
    if (input.length < i) return "grey"
    if (input.length === i) return "blue"
    if (input[i] === currentTextBlock.split("")[i]) {
      return "green"
    } else return "red"
  }

  return (
    <>
      <input onChange={e => inputHandler(e.target.value)} />
      <p>
        {currentTextBlock.split("").map((letter, i) => {
          return <span style={{ color: getLetterColor(i) }}>{letter}</span>
        })}
      </p>
    </>
  )
}

export default GuidedText
