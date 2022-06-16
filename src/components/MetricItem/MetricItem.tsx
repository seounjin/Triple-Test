import styled from 'styled-components'

interface Props {
  count: string
  number: string
  travel: string
}

const StyledMetricItem = styled.div`
  position: relative;
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`

const MetricItem = ({ count, number, travel }: Props): JSX.Element => {
  return (
    <StyledMetricItem>
      <strong>
        <span>{count}</span>
        {number}
      </strong>
      {travel}
    </StyledMetricItem>
  )
}

export default MetricItem
