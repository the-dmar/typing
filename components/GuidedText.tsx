import { useRef, useEffect } from "react"
import useTypingContext from "../hooks/useTypingContext"
import { HiddenInput, Letter } from "../styles/GuidedText.styled"

const GuidedText = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { input, setInput, currentTextBlock } = useTypingContext()

  useEffect(() => {
    inputRef?.current?.focus()
    document.addEventListener("keydown", () => {
      if (document.activeElement?.localName !== "input") {
        inputRef?.current?.focus()
      }
    })
  }, [])

  const getLetterColor = (i: number) => {
    const selected = "#0077b6"
    const correct = "#8a817c"
    const incorrect = "#ef233c"
    const incomplete = "#242423"

    if (input.length < i) return incomplete
    if (input.length === i) return selected
    if (input[i] === currentTextBlock?.split("")[i]) {
      return correct
    } else return incorrect
  }

  return (
    <>
      <HiddenInput
        value={input}
        ref={inputRef}
        onChange={e => setInput(e.target.value)}
      />
      <p>
        {currentTextBlock?.split("").map((letter, i) => {
          return (
            <Letter color={getLetterColor(i)} key={i}>
              {letter}
            </Letter>
          )
        })}
      </p>
    </>
  )
}

export default GuidedText
