import Banner from 'components/Banner'
import Family from 'components/Family'
import Header from 'components/Header'
import PageWrapper from '../components/PageWrapper'

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <Banner />
      <Family />
    </PageWrapper>
  )
}
