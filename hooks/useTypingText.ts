import { useState, useEffect } from "react"
const useTypingText = () => {
  const [text, setText] = useState<string[] | null | string>(null)
  const [inputHistory, setInputHistory] = useState<string[]>([""])
  const [paragraphIndex, setParagraphIndex] = useState(0)
  const [input, setInput] = useState("")

  useEffect(() => {
    setText(currentText => {
      if (typeof currentText === "string") {
        return currentText.split("\n").filter(line => line)
      } else return text
    })
  }, [text])

  useEffect(() => {
    const currentParagraph = text?.[paragraphIndex]
    if (currentParagraph && currentParagraph.length === input.length) {
      nextParagraph()
      return
    }
  }, [input])

  useEffect(() => {
    console.log(inputHistory)
  }, [inputHistory])

  const nextParagraph = () => {
    setParagraphIndex(paragraphIndex => (paragraphIndex += 1))
    setInputHistory(inputHistory => [...inputHistory, input])
    setInput("")
  }

  const currentTextBlock = text?.[paragraphIndex]

  return [
    currentTextBlock,
    input,
    setInput,
    text,
    inputHistory.join(" "),
    setText,
  ] as const
}

export default useTypingText
