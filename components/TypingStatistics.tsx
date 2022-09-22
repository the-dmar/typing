import useTypingContext from "../hooks/useTypingContext"
import {
  Container,
  Header,
  Statistic,
  StatisticLabel,
  StatisticWrapper,
} from "../styles/TypingStatistics"

const TypingStatistics = () => {
  const { timer, stage } = useTypingContext()
  const headerValue = () => {
    if (stage === "not started") return "Start typing to begin!"
    if (stage === "running") return "Awaiting Results..."
    if (stage === "complete") return "Test Complete"
  }

  const timerValue = () => {
    if (stage === "complete") return "Try again"
    if (typeof timer === "number") return `${timer}s`
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
