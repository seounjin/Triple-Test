import { useEffect, useRef } from 'react'

type TimerHandler = () => void

type Delay = number | null

const useInterval = (callback: TimerHandler, delay: Delay) => {
  const savedCallback = useRef<TimerHandler>()

  useEffect(() => {
    console.log('함수등록')
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const executeCallback = () => {
      savedCallback.current!()
    }

    if (delay !== null) {
      const interval = setInterval(executeCallback, delay)
      console.log('등록')

      return () => {
        console.log('종료')

        clearInterval(interval)
      }
    }
  }, [delay])
}

export default useInterval
