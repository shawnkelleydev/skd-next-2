import { useEffect, useState } from 'react'

import { meta } from 'constants/data'

import styles from './styles.module.css'

export default function Logo({ cursor, dispatch, state }) {
  const [header, setHeader] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (state.step === 2) {
      const letter = meta.TITLE[index]

      const increment = () => {
        const newWord = header + letter
        setHeader(newWord)
        setIndex(index + 1)
      }

      const delay = index < 1 ? 2000 : letter === ' ' ? 200 : 90

      if (header !== meta.TITLE) setTimeout(increment, delay)
      if (header === meta.TITLE)
        setTimeout(() => dispatch({ type: 'next' }), 2000)
    }
  }, [header, index, state])

  return (
    <div className={styles.logo}>
      <h1 data-hide-cursor={!cursor || state.step > 2}>
        {state.step > 2 ? meta.TITLE : header}
      </h1>
    </div>
  )
}
