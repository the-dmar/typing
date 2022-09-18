import { useState, useCallback, useEffect } from "react"
import { TimerStage } from "../utils/types"

const useTimer = (startingTime = 60) => {
  const [timer, setTimer] = useState(startingTime)
  const [stage, setStage] = useState<TimerStage>("not started")

  const start = useCallback(() => {
    const interval = setInterval(() => {
      setTimer(timer => {
        setStage("running")
        let updatedTimer = (timer -= 1)

        if (updatedTimer <= 0) {
          setStage("complete")
          clearInterval(interval)
          return startingTime
        }
        return updatedTimer
      })
    }, 1000)
  }, [setTimer, startingTime])

  const reset = useCallback(
    () => setTimer(startingTime),
    [setTimer, startingTime]
  )

  return [timer, start, reset, stage, setTimer] as const
}

export default useTimer
