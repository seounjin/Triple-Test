import { useState } from 'react'

import useInterval from '../../hooks/useInterval'

// t는 0(애니메이션 시작)과 1(애니메이션 끝)의 경계에서 애니메이션의 절대 진행률을 나타냄
const easeOutQuad = (t: number) => t * (2 - t)
const frameDuration = 1000 / 60

interface Props {
  countTo: number
  duration: number
}

const CountUp = ({ countTo, duration }: Props): JSX.Element => {
  const [count, setCount] = useState<number>(100)
  const [isRunning, setIsRunning] = useState<boolean>(true)
  const [frame, setFrame] = useState<number>(0)

  const playFlame = (): void => {
    // 애니메이션을 완료하는 데 필요한 프레임 수를 계산
    const totalFrames = Math.round(duration / frameDuration)
    const progress = easeOutQuad(frame / totalFrames)

    setFrame(frame + 1)
    setCount(countTo * progress)

    if (frame === totalFrames) {
      setIsRunning(false)
    }
  }

  useInterval(playFlame, isRunning ? frameDuration : null)

  return <span>{Math.floor(count)}</span>
}

export default CountUp
