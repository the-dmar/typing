import { SetStateAction } from "react"

const lengths = [1, 3, 5, 10]

const TestLengths = ({
  setTestLength,
}: {
  setTestLength: React.Dispatch<SetStateAction<number>>
}) => {
  const handleTimerClick = (i: number) => setTestLength(lengths[i] * 60)

  return (
    <div>
      {lengths.map((length, i) => (
        <button onClick={() => handleTimerClick(i)}>{length} Min</button>
      ))}
    </div>
  )
}

export default TestLengths
