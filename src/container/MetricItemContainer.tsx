import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import MetricItem from '../components/MetricItem/MetricItem'

const METRIC_ITEM: Mitem[] = [
  { count: '700', number: '만 명의', travel: '여행자' },
  { count: '100', number: '만 개의', travel: '여행 리뷰' },
  { count: '400', number: '만 개의', travel: '여행 일정' },
]

interface Mitem {
  count: string
  number: string
  travel: string
}

interface Props {
  fadeInState: boolean
}

interface StyledProps {
  fadeInState: boolean
}

const Container = styled.div<StyledProps>`
  position: relative;
  margin-left: 623px;
  padding-top: 150px;

  top: ${(props) => (props.fadeInState ? '0px;' : '30px;')}
  opacity: ${(props) => (props.fadeInState ? 1 : 0)};
  transition: all 700ms ease-in;
`

const MetricItemContainer = ({ fadeInState }: Props): JSX.Element => {
  const [Count, setCount] = useState<number>(0)

  useEffect(() => {
    setCount(Count + 1)
  }, [])

  return (
    <Container fadeInState={fadeInState}>
      {METRIC_ITEM.map((data: Mitem, index: number) => (
        <MetricItem
          key={'metricitem' + index.toString()}
          count={Count}
          number={data.number}
          travel={data.travel}
        />
      ))}
    </Container>
  )
}

export default React.memo(MetricItemContainer)
