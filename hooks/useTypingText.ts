import { useState, useEffect } from "react"
const useTypingText = () => {
  const [text, setText] = useState<string[] | null | string>(null)
  const [inputHistory, setInputHistory] = useState<string[]>([""])
  const [paragraphIndex, setParagraphIndex] = useState(0)
  const [input, setInput] = useState("")
  const currentParagraph = text?.[paragraphIndex]

  useEffect(() => {
    setText(currentText => {
      if (typeof currentText === "string") {
        return currentText.split(/\n/).filter(line => line)
      } else return text
    })
  }, [text])

  useEffect(() => {
    if (currentParagraph && currentParagraph.length === input.length) {
      nextParagraph()
    }
  }, [input])

  const nextParagraph = () => {
    setParagraphIndex(paragraphIndex => (paragraphIndex += 1))
    setInputHistory(inputHistory => [...inputHistory, input])
    setInput("")
  }

  const handleSetInput = (value: string) => {
    const currentCharacter = currentParagraph?.[value.length - 1]
    const lastTypedCharacter = value[value.length - 1]
    if (currentCharacter === " " && lastTypedCharacter !== " ")
      setInput(`${value.slice(0, -1)} `)
    else setInput(value)
  }

  const currentTextBlock = text?.[paragraphIndex]

  return [
    currentTextBlock,
    input,
    handleSetInput,
    text,
    inputHistory.join(" "),
    setText,
  ] as const
}

export default useTypingText
