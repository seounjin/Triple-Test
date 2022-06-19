import React from 'react'
import styled from 'styled-components'

interface Props {
  imgUrl: string
  title: string
  content: string
}

interface StyledProps {
  imgUrl: string
}

const StyledAward = styled.div<StyledProps>`
  position: relative;
  display: inline-block;
  height: 54px;
  padding: 5px 0px 5px 62px;
  margin-right: 39px;

  background-size: 54px 54px;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);

  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
`

const Award = ({ imgUrl, title, content }: Props): JSX.Element => {
  return (
    <StyledAward imgUrl={imgUrl}>
      {title}
      <br />
      {content}
    </StyledAward>
  )
}

export default React.memo(Award)
