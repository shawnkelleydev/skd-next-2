import { useEffect, useState } from 'react'

import styles from './styles.module.css'

export default function TypeOut({
  children,
  cursor,
  delayAfter,
  delayBefore,
  dispatch,
  type,
}) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)

  const [end, setEnd] = useState(false)

  useEffect(() => {
    const increment = () => {
      setText(text + children[index])
      setIndex(index + 1)
    }

    const handleNext = () => {
      dispatch({ type: 'next' })
      setEnd(true)
    }

    const time = delayBefore && index === 0 ? delayBefore : 40

    if (text !== children) setTimeout(increment, time)
    if (text === children)
      !delayAfter ? handleNext() : setTimeout(handleNext, delayAfter)
  }, [text, index])

  switch (type) {
    case 'h1':
      return (
        <h1
          className={styles['type-out']}
          data-end={end}
          data-hide-cursor={!end ? !cursor : true}
        >
          {text}
        </h1>
      )
    case 'h2':
      return (
        <h2
          className={styles['type-out']}
          data-end={end}
          data-hide-cursor={!end ? !cursor : true}
        >
          {text}
        </h2>
      )
    case 'h3':
      return (
        <h3
          className={styles['type-out']}
          data-end={end}
          data-hide-cursor={!end ? !cursor : true}
        >
          {text}
        </h3>
      )
    default:
      return (
        <p
          className={styles['type-out']}
          data-hide-cursor={!end ? !cursor : true}
          data-end={end}
        >
          {text}
        </p>
      )
  }
}
