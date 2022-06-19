import { useState, useRef } from 'react'
import styled from 'styled-components'

import Layout from './layout/Layout'
import ContentLogo from './components/ContentLogo/ContentLogo'
import MetricItemContainer from './container/MetricItemContainer'
import AwardContainer from './container/AwardContainer'
import useTimeout from './hooks/useTimeout'

const MainContainer = styled.section`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`
function App() {
  const [FadeInState, setFadeInState] = useState<boolean[]>([
    false,
    false,
    false,
  ])
  const [isRunning, setIsRunning] = useState<boolean>(true)
  const Count = useRef<number>(-1)

  const playCount = (): void => {
    if (Count.current >= 2) {
      setIsRunning(false)
      return
    }
    Count.current += 1
    const tempState = [...FadeInState]
    tempState[Count.current] = true
    setFadeInState(tempState)
  }

  useTimeout(playCount, isRunning ? 100 : null)

  return (
    <Layout>
      <MainContainer>
        <ContentLogo fadeInState={FadeInState[0]} />
        <MetricItemContainer fadeInState={FadeInState[1]} />
        <AwardContainer fadeInState={FadeInState[2]} />
      </MainContainer>
    </Layout>
  )
}

export default App
