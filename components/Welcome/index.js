import { useEffect, useState } from 'react'

import styles from './styles.module.css'

const bString = 'Welcome.'
// const smallString = "I'm glad you're here!"

export default function Welcome() {
  const [cursorB, setCursorB] = useState(true)
  const [hideCursor, setHideCursor] = useState(false)

  const [b, setB] = useState('')
  const [bIndex, setBIndex] = useState(0)

  // const [small, setSmall] = useState('')
  // const [smallIndex, setSmallIndex] = useState(0)

  const [end, setEnd] = useState(false)

  useEffect(() => {
    setTimeout(() => setHideCursor(!hideCursor), 500)
  }, [hideCursor])

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
        return 40
    }
  }

  useEffect(() => {
    const letter = bString[bIndex]
    if (b !== bString)
      setTimeout(
        () => increment(letter, b, setB, bIndex, setBIndex),
        duration(bIndex, letter)
      )
    if (b === bString) setTimeout(() => setCursorB(false), 2000)
  }, [b, bIndex])

  useEffect(() => {
    !cursorB && setEnd(true)
  }, [cursorB])

  // useEffect(() => {
  //   const letter = smallString[smallIndex]
  //   if (b === bString && small !== smallString)
  //     setTimeout(
  //       () => increment(letter, small, setSmall, smallIndex, setSmallIndex),
  //       duration(smallIndex, letter)
  //     )
  //   if (small === smallString) setTimeout(() => setEnd(true), 3000)
  // }, [b, smallIndex, small])

  return (
    <div
      className={styles.welcome}
      data-end={end}
    >
      <h1>
        <b
          data-cursor={cursorB}
          data-hide-cursor={hideCursor}
        >
          {b}
        </b>
        {/* <small
          data-cursor={!cursorB}
          data-hide-cursor={hideCursor}
        >
          {small}
        </small> */}
      </h1>
    </div>
  )
}
