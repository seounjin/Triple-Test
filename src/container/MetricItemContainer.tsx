import styled from 'styled-components'

import MetricItem from '../components/MetricItem/MetricItem'

interface MetricItem {
  count: string
  number: string
  travel: string
}

const METRIC_ITEM: MetricItem[] = [
  { count: '700', number: '만 명의', travel: '여행자' },
  { count: '100', number: '만 개의', travel: '여행 리뷰' },
  { count: '400', number: '만 개의', travel: '여행 일정' },
]

const Container = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`
const MetricItemContainer = (): JSX.Element => {
  return (
    <Container>
      {METRIC_ITEM.map((data: MetricItem, index: number) => (
        <MetricItem
          key={'metricitem' + index.toString()}
          count={data.count}
          number={data.number}
          travel={data.travel}
        />
      ))}
    </Container>
  )
}

export default MetricItemContainer
