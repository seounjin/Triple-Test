import React from 'react'
import styled from 'styled-components'

import Award from '../components/Award/Award'

const AWARD_ITEM: AwardItem[] = [
  {
    imgurl: '/play-store2x.png',
    title: '2018 구글 플레이스토어',
    content: '올해의 앱 최우수상 수상',
  },
  {
    imgurl: '/badge-apple4x.png',
    title: '2018 애플 앱스토어',
    content: '오늘의 여행앱 선정',
  },
]

interface AwardItem {
  imgurl: string
  title: string
  content: string
}

interface Props {
  fadeInState: boolean
}

interface StyledProps {
  fadeInState: boolean
}

const Container = styled.div<StyledProps>`
  position: relative;

  margin: 50px 0px 140px 623px;
  white-space: nowrap;

  top: ${(props) => (props.fadeInState ? '0px;' : '30px;')}
  opacity: ${(props) => (props.fadeInState ? 1 : 0)};
  transition: all 700ms ease-in;
`

const AwardContainer = ({ fadeInState }: Props): JSX.Element => {
  return (
    <Container fadeInState={fadeInState}>
      {AWARD_ITEM.map((data: AwardItem, index: number) => (
        <Award
          key={'award' + index.toString()}
          imgUrl={data.imgurl}
          title={data.title}
          content={data.content}
        />
      ))}
    </Container>
  )
}

export default React.memo(AwardContainer)
