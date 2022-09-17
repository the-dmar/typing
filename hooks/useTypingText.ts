import { useState, useEffect } from "react"
const useTypingText = (response: string) => {
  const [text, setText] = useState(response.split("\n").filter(line => line))
  const [paragraphIndex, setParagraphIndex] = useState(0)
  const [input, setInput] = useState("")

  const inputHandler = (value: string) => {
    const currentParagraph = text[paragraphIndex]
    if (currentParagraph.length === value.length) {
      nextParagraph()
      return
    }

    setInput(value)
  }

  const nextParagraph = () => {
    setParagraphIndex(paragraphIndex => (paragraphIndex += 1))
    setInput("")
  }

  const currentTextBlock = text[paragraphIndex]

  return [currentTextBlock, input, inputHandler] as const
}

export default useTypingText
