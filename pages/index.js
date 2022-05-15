import { useEffect, useState, useReducer } from 'react'

import ArrowDown from 'components/ArrowDown'
import Banner from 'components/Banner'
import Family from 'components/Family'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PageWrapper from 'components/PageWrapper'
import Skills from 'components/Skills'
import Welcome from 'components/Welcome'

export default function Home() {
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    setTimeout(() => setCursor(!cursor), 500)
  }, [cursor])

  const initialState = { step: 1 }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'next':
        return { ...state, step: state.step + 1 }
      case 'last':
        return { ...state, step: state.step - 1 }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <PageWrapper>
      <Header
        cursor={cursor}
        dispatch={dispatch}
        state={state}
      />
      <Banner
        cursor={cursor}
        dispatch={dispatch}
        state={state}
      />
      <Family />
      <Skills />
      <Footer />
      <ArrowDown />
      <Welcome
        cursor={cursor}
        dispatch={dispatch}
        state={state}
      />
    </PageWrapper>
  )
}
