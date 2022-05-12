import ArrowDown from 'components/ArrowDown'
import Banner from 'components/Banner'
import Family from 'components/Family'
import Footer from 'components/Footer'
import PageWrapper from 'components/PageWrapper'
import Skills from 'components/Skills'
import Welcome from 'components/welcome'

export default function Home() {
  return (
    <PageWrapper>
      <Banner />
      <Family />
      <Skills />
      <Footer />
      <ArrowDown />
      <Welcome />
    </PageWrapper>
  )
}
