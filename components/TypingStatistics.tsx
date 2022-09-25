import useTypingContext from "../hooks/useTypingContext"
import {
  Container,
  Header,
  RestartButton,
  Statistic,
  StatisticLabel,
  StatisticWrapper,
} from "../styles/TypingStatistics.styled"

const TypingStatistics = () => {
  const { timer, stage, resetTest, correctWords, testLength } =
    useTypingContext()

  const headerValue = () => {
    if (stage === "not started") return "Start typing to begin!"
    if (stage === "running") return "Awaiting Results..."
    if (stage === "complete") return "Test Complete"
  }

  const timerValue = () => {
    if (stage === "complete")
      return <RestartButton onClick={resetTest}>Try Again</RestartButton>
    if (typeof timer === "number") return `${timer}s`
  }

  const speedValue = () => {
    const correctCharacters = correctWords?.join(" ") || ""
    if (stage === "running") return "In Progress"
    if (stage === "complete") {
      return `${(correctCharacters.length / 4.7).toFixed(2)} WPM`
    }
    return "N/A"
  }

  const totalWordValue = () => {
    if (stage === "running") return "In Progress"
    if (stage === "complete" && correctWords) return correctWords.length
    return "N/A"
  }

  const totalCharacterValue = () => {
    if (stage === "running") return "In Progress"
    if (stage === "complete" && correctWords) return correctWords.join().length
    return "N/A"
  }

  return (
    <Container>
      <Header>{headerValue()}</Header>
      <StatisticWrapper>
        <StatisticLabel>
          Time Remaining: <Statistic>{timerValue()}</Statistic>
        </StatisticLabel>
        <StatisticLabel>
          Speed: <Statistic>{speedValue()}</Statistic>
        </StatisticLabel>
        <StatisticLabel>
          Words Typed: <Statistic>{totalWordValue()}</Statistic>
        </StatisticLabel>
        <StatisticLabel>
          Characters Typed: <Statistic>{totalCharacterValue()}</Statistic>
        </StatisticLabel>
      </StatisticWrapper>
    </Container>
  )
}

export default TypingStatistics
