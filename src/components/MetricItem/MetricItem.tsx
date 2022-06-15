import styled from 'styled-components'

const StyledMetricItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`

interface MetricItemProps {
  count: string
  number: string
  travel: string
}

const MetricItem = ({
  count,
  number,
  travel,
}: MetricItemProps): JSX.Element => {
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
