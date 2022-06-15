import styled from 'styled-components'

import Award from '../components/Award/Award'

interface AwardItem {
  imgurl: string
  title: string
  content: string
}

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

const Container = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
`
const AwardContainer = (): JSX.Element => {
  return (
    <Container>
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

export default AwardContainer
