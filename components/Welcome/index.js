import { useEffect, useState } from 'react'

import styles from './styles.module.css'

const headerString = 'Welcome.'

export default function Welcome({ cursor, dispatch, state }) {
  const [header, setHeader] = useState('')
  const [headerIndex, setHeaderIndex] = useState(0)

  const increment = (newLetter, prevText, setText, index, setIndex) => {
    setText(prevText + newLetter)
    setIndex(index + 1)
  }

  const duration = (i, letter) => {
    if (i < 1) return 2000
    switch (letter) {
      case ' ':
        return 100
      default:
        return 60
    }
  }

  useEffect(() => {
    const letter = headerString[headerIndex]
    if (header !== headerString)
      setTimeout(
        () => increment(letter, header, setHeader, headerIndex, setHeaderIndex),
        duration(headerIndex, letter)
      )
    if (header === headerString)
      setTimeout(() => dispatch({ type: 'next' }), 2000)
  }, [header, headerIndex])

  if (state.step > 2) return

  return (
    <div
      className={styles.welcome}
      data-end={state.step === 2}
    >
      <h1 data-hide-cursor={!cursor}>{header}</h1>
    </div>
  )
}
