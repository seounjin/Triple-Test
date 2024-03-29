import { useEffect, useRef } from 'react'

type TimerHandler = () => void

type Delay = number | null

const useInterval = (callback: TimerHandler, delay: Delay) => {
  const savedCallback = useRef<TimerHandler>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const executeCallback = () => {
      savedCallback.current!()
    }

    if (delay !== null) {
      const interval = setInterval(executeCallback, delay)

      return () => {
        clearInterval(interval)
      }
    }
  }, [delay])
}

export default useInterval
