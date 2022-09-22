import { createContext, SetStateAction, useEffect, useState } from "react"
import useTimer from "../hooks/useTimer"
import useTypingText from "../hooks/useTypingText"

export interface Children {
  children: JSX.Element | JSX.Element[]
}

type Text = string | string[] | null

interface TypingContextInterface {
  timer: number
  setText: React.Dispatch<SetStateAction<Text>>
  input: string
}

export const TypingContext = createContext<TypingContextInterface | null>(null)

const TypingContextProvider = ({ children }: Children) => {
  const [testLength, setTestLength] = useState(60)
  const [timer, start, reset, stage, setTimer] = useTimer(testLength)
  const [currentTextBlock, input, setInput, setText] = useTypingText()

  return (
    <TypingContext.Provider value={{ timer, setText, input }}>
      {children}
    </TypingContext.Provider>
  )
}

export default TypingContextProvider
