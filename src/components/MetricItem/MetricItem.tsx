import React from 'react'
import styled from 'styled-components'

import CountUp from '../CountUp/CountUp'

interface Props {
  number: number
  million: string
  travel: string
}

const StyledMetricItem = styled.div`
  position: relative;
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`

const MetricItem = ({ number, million, travel }: Props): JSX.Element => {
  return (
    <StyledMetricItem>
      <strong>
        <CountUp countTo={number} duration={2000} />
        {million}
      </strong>
      {travel}
    </StyledMetricItem>
  )
}

export default React.memo(MetricItem)
