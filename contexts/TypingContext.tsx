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
  setInput: React.Dispatch<SetStateAction<string>>
  currentTextBlock: string | undefined
  testLength: number
}

export const TypingContext = createContext<TypingContextInterface | null>(null)

const TypingContextProvider = ({ children }: Children) => {
  const [testLength, setTestLength] = useState(60)
  const [timer, start, stage, setTimer, setStage] = useTimer(testLength)
  const [currentTextBlock, input, setInput, setText] = useTypingText()
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

  const startTest = () => {
    setStage(currentStage => {
      if (currentStage === "not started") {
        start()
        return "running"
      } else return currentStage
    })
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
      }}
    >
      {children}
    </TypingContext.Provider>
  )
}

export default TypingContextProvider
