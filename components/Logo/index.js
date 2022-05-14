import { useEffect, useState } from 'react'
import { meta } from 'constants/data'

import styles from './styles.module.css'

export default function Logo() {
  const [hideCursor, setHideCursor] = useState(false)

  const [tagString, setTagString] = useState(meta.TAG)
  const [tag, setTag] = useState('')
  const [tagIndex, setTagIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => setHideCursor(!hideCursor), 500)
  }, [hideCursor])

  useEffect(() => {
    const letter = tagString[tagIndex]
    console.log(letter)

    const increment = () => {
      setTag(tag + letter)
      setTagIndex(tagIndex + 1)
    }

    const delay = tagIndex === 0 ? 6000 : letter === ' ' ? 200 : 100

    if (tagString && tagIndex < tagString.length) setTimeout(increment, delay)
  }, [tag, tagIndex, tagString])

  return (
    <div className={styles.logo}>
      <h1>
        <b>{meta.TITLE}</b>
        <small data-hide-cursor={hideCursor}>{tag}</small>
      </h1>
    </div>
  )
}
