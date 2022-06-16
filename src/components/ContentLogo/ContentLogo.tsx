import React from 'react'
import styled from 'styled-components'

interface Props {
  fadeInState: boolean
}

interface StyledProps {
  fadeInState: boolean
}

const StyledContentLogo = styled.div<StyledProps>`
  position: absolute;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;

  background-image: url(/triple2x.png);
  background-repeat: no-repeat;

  text-align: center;
  color: rgba(58, 58, 58, 0.7);

  top: ${(props) => (props.fadeInState ? '150px;' : '180px;')}
  opacity: ${(props) => (props.fadeInState ? 1 : 0)};
  transition: all 700ms ease-in;
`

const ContentLogo = ({ fadeInState }: Props): JSX.Element => {
  return (
    <StyledContentLogo fadeInState={fadeInState}>
      2021년 12월 기준
    </StyledContentLogo>
  )
}

export default React.memo(ContentLogo)
