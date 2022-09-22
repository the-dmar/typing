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

  return (
    <TypingContext.Provider
      value={{
        setTestLength,
        timer,
        stage,
        setText,
        input,
        setInput,
        currentTextBlock,
      }}
    >
      {children}
    </TypingContext.Provider>
  )
}

export default TypingContextProvider
