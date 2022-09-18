import { SetStateAction } from "react"
import { TestLength, TestLengthContainer } from "../styles/TestLengths.styled"

const lengths = [1, 3, 5, 10]

const TestLengths = ({
  setTestLength,
}: {
  setTestLength: React.Dispatch<SetStateAction<number>>
}) => {
  const handleTimerClick = (i: number) => setTestLength(lengths[i] * 60)

  return (
    <TestLengthContainer>
      {lengths.map((length, i) => (
        <TestLength onClick={() => handleTimerClick(i)} key={i}>
          {length} Min
        </TestLength>
      ))}
    </TestLengthContainer>
  )
}

export default TestLengths
