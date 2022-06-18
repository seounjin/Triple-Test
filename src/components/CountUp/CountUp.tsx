import { useState, useRef } from 'react'

import useInterval from '../../hooks/useInterval'
import useTimeout from '../../hooks/useTimeout'

// import styled from 'styled-components'

// interface Props {
//   delay: number
//   end?: string
// }

// const StyledCountUp = styled.div``

const CountUp = (): JSX.Element => {
  const [Count, setCount] = useState(0)
  const Delay = useRef(10)
  const [isRunning, setIsRunning] = useState<boolean>(true)
  // const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const playCount = () => {
    setCount((Count) => Count + 1)
  }

  const playDelay = () => {
    Delay.current *= 10
  }

  useInterval(playDelay, isRunning ? 1000 : null)

  useInterval(playCount, isRunning ? Delay.current : null)

  useTimeout(() => setIsRunning(false), isRunning ? 2000 : null)

  return (
    <div>
      <span>{Count}</span>
    </div>
  )
}

export default CountUp
