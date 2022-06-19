import React from 'react'
import styled from 'styled-components'

import MetricItem from '../components/MetricItem/MetricItem'

const METRIC_ITEM: Mitem[] = [
  { number: 700, million: '만 명의', travel: '여행자' },
  { number: 100, million: '만 개의', travel: '여행 리뷰' },
  { number: 400, million: '만 개의', travel: '여행 일정' },
]

interface Mitem {
  number: number
  million: string
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
  return (
    <Container fadeInState={fadeInState}>
      {METRIC_ITEM.map((data: Mitem, index: number) => (
        <MetricItem
          key={'metricitem' + index.toString()}
          number={data.number}
          travel={data.travel}
          million={data.million}
        />
      ))}
    </Container>
  )
}

export default React.memo(MetricItemContainer)
