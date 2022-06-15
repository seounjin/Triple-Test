import Layout from './layout/Layout'
import ContentLogo from './components/ContentLogo/ContentLogo'
import MetricItemContainer from './container/MetricItemContainer'
import AwardContainer from './container/AwardContainer'

function App() {
  return (
    <Layout>
      <ContentLogo />
      <MetricItemContainer />
      <AwardContainer />
    </Layout>
  )
}

export default App
