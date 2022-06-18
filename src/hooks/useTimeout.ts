import { useEffect, useRef } from 'react'

type TimerHandler = () => void

type Delay = number | null

const useTimeout = (callback: TimerHandler, delay: Delay) => {
  const savedCallback = useRef<TimerHandler>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    let timer: NodeJS.Timeout

    const executeCallback = () => {
      savedCallback.current!()

      if (delay !== null) {
        timer = setTimeout(executeCallback, delay)
      }
    }

    if (delay !== null) {
      timer = setTimeout(executeCallback, delay)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [delay])
}

export default useTimeout
