import { createContext, SetStateAction, useEffect, useState } from "react"
import useTimer from "../hooks/useTimer"
import useTypingText from "../hooks/useTypingText"

export interface Children {
  children: JSX.Element | JSX.Element[]
}

type Text = string | string[] | null

interface TypingContextInterface {
  timer: number
  stage: string
  setText: React.Dispatch<SetStateAction<Text>>
  input: string
  setInput: React.Dispatch<SetStateAction<string>>
  currentTextBlock: string | undefined
}

export const TypingContext = createContext<TypingContextInterface | null>(null)

const TypingContextProvider = ({ children }: Children) => {
  const [testLength, setTestLength] = useState(60)
  const [timer, start, reset, stage, setTimer, setStage] = useTimer(testLength)
  const [currentTextBlock, input, setInput, setText] = useTypingText()

  useEffect(() => {
    input.length === 1 && startTest()
  }, [input])

  const startTest = () => {
    setStage(currentStage => {
      if (currentStage === "not started") {
        start()
        return "running"
      } else return currentStage
    })
  }

  return (
    <TypingContext.Provider
      value={{ timer, stage, setText, input, setInput, currentTextBlock }}
    >
      {children}
    </TypingContext.Provider>
  )
}

export default TypingContextProvider
