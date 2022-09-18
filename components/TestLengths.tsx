import { SetStateAction } from "react"

const lengths = [1, 3, 5, 10]

const TestLengths = ({
  setTimer,
}: {
  setTimer: React.Dispatch<SetStateAction<number>>
}) => {
  const handleTimerClick = (i: number) => setTimer(lengths[i] * 60)

  return (
    <div>
      {lengths.map((length, i) => (
        <button onClick={() => handleTimerClick(i)}>{length} Min</button>
      ))}
    </div>
  )
}

export default TestLengths
