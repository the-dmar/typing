import { TimerStage } from "../utils/types"

const TypingStats = ({
  stage,
  timer,
}: {
  stage: TimerStage
  timer: number
}) => {
  const headerValue = () => {
    if (stage === "not started") return "Start typing to begin!"
    if (stage === "running") return "Awaiting Results..."
    if (stage === "complete") return "Test Complete"
  }

  const timerValue = () => {
    if (stage === "running" && typeof timer === "number") return `${timer}s`
    if (stage === "complete") return "Try again"
    return "N/A"
  }

  const speedValue = () => {
    if (stage === "running") return "In Progress"
    if (stage === "complete") return 120
    return "N/A"
  }

  const totalWordValue = () => {
    if (stage === "running") return "In Progress"
    if (stage === "complete") return 50
    return "N/A"
  }

  const totalCharacterValue = () => {
    if (stage === "running") return "In Progress"
    if (stage === "complete") return 200
    return "N/A"
  }

  return (
    <div>
      <h1>{headerValue()}</h1>
      <p>
        Time Remaining: <span>{timerValue()}</span>
      </p>
      <p>
        Speed: <span>{speedValue()}</span>
      </p>
      <p>
        Words Typed: <span>{totalWordValue()}</span>
      </p>
      <p>
        Characters Typed: <span>{totalCharacterValue()}</span>
      </p>
    </div>
  )
}

export default TypingStats
