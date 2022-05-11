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
    const tagArray = tagString.split('')

    const increment = () => {
      setTag(tag + tagArray[tagIndex])
      setTagIndex(tagIndex + 1)
    }

    const letter = tagArray[tagIndex]

    const delay = tagIndex === 0 ? 3000 : letter === ' ' ? 200 : 60

    if (tagArray && tagIndex < tagArray.length) setTimeout(increment, delay)
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
