import { createContext, SetStateAction, useEffect, useState } from "react"
import useTimer from "../hooks/useTimer"
import useTypingText from "../hooks/useTypingText"

export interface Children {
  children: JSX.Element | JSX.Element[]
}

interface TypingContextInterface {
  timer: number
}

export const TypingContext = createContext<TypingContextInterface | null>(null)

const TypingContextProvider = ({ children }: Children) => {
  const [testLength, setTestLength] = useState(60)
  const [timer, start, reset, stage, setTimer] = useTimer(testLength)

  return (
    <TypingContext.Provider value={{ timer }}>
      {children}
    </TypingContext.Provider>
  )
}

export default TypingContextProvider
