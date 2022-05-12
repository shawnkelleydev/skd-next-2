import { useEffect, useState } from 'react'

import styles from './styles.module.css'

export default function ArrowDown() {
  const [anchor] = useState('')
  const [hideArrow, setHideArrow] = useState(true)
  const [y, setY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.pageYOffset))
  }, [anchor])

  useEffect(() => {
    if (y > 50) setHideArrow(true)
    if (y < 50) setHideArrow(false)
  }, [hideArrow, y])

  return (
    <div
      className={styles['arrow-down']}
      data-hide-arrow={hideArrow}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='48'
        width='48'
      >
        <path d='M24 30.75 12 18.75 14.15 16.6 24 26.5 33.85 16.65 36 18.8Z' />
      </svg>
    </div>
  )
}
