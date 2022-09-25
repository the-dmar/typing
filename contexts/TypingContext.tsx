import { createContext, SetStateAction, useEffect, useState } from "react"
import useTimer from "../hooks/useTimer"
import useTypingText from "../hooks/useTypingText"
import { useRouter } from "next/router"

export interface Children {
  children: JSX.Element | JSX.Element[]
}

type Text = string | string[] | null

interface TypingContextInterface {
  setTestLength: React.Dispatch<SetStateAction<number>>
  resetTest: () => void
  timer: number
  stage: string
  setText: React.Dispatch<SetStateAction<Text>>
  input: string
  setInput: (value: string) => void
  currentTextBlock: string | undefined
  testLength: number
  correctWords: string[] | null
}

export const TypingContext = createContext<TypingContextInterface | null>(null)

const TypingContextProvider = ({ children }: Children) => {
  const [testLength, setTestLength] = useState(60)
  const [correctWords, setCorrectWords] = useState<string[] | null>(null)
  const [timer, start, stage, setTimer, setStage] = useTimer(testLength)
  const [currentTextBlock, input, setInput, text, inputHistory, setText] =
    useTypingText()
  const router = useRouter()
  const currentPath = router.pathname

  useEffect(() => {
    if (input.length === 1 && currentPath === "/test") {
      startTest()
    }
  }, [input])

  useEffect(() => {
    setTimer(testLength)
  }, [testLength])

  useEffect(() => {
    if (stage === "complete" && Array.isArray(text)) {
      const inputWords = `${inputHistory} ${input}`
        .split(" ")
        .filter(word => word)
      const fullTextWords = text.join("\n").split(" ")
      const newCorrectWords = inputWords.reduce(
        (words: string[], currentWord, i) => {
          if (currentWord === fullTextWords[i]) return [...words, currentWord]
          else {
            console.log({
              inputWords,
              fullTextWords,
              i,
              fullTextWord: fullTextWords[i],
              currentWord,
            })
            return words
          }
        },
        []
      )

      setCorrectWords(newCorrectWords)
    }
  }, [stage])

  const startTest = () => {
    start()
    setStage("running")
  }

  const resetTest = () => {
    setStage("not started")
    setTimer(testLength)
    setInput("")
  }

  return (
    <TypingContext.Provider
      value={{
        setTestLength,
        resetTest,
        timer,
        stage,
        setText,
        input,
        setInput,
        currentTextBlock,
        testLength,
        correctWords,
      }}
    >
      {children}
    </TypingContext.Provider>
  )
}

export default TypingContextProvider
