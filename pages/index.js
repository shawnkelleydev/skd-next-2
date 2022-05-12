import ArrowDown from 'components/ArrowDown'
import Banner from 'components/Banner'
import Family from 'components/Family'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PageWrapper from 'components/PageWrapper'
import Skills from 'components/Skills'
import Welcome from 'components/welcome'

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <Banner />
      <Family />
      <Skills />
      <Footer />
      <ArrowDown />
      <Welcome />
    </PageWrapper>
  )
}
