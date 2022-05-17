import { useEffect, useRef, useState } from 'react'

import styles from './styles.module.css'

export default function ArrowDown() {
  const [y, setY] = useState(0)

  const [windowHeight, setWindowHeight] = useState(1000)
  const [pageHeight, setPageHeight] = useState(3000)

  const ref = useRef(null)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight)

      const main = document.querySelector('main')
      setPageHeight(main.scrollHeight)
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.scrollY))
  }, [])

  const handleClick = () => {
    scroll({ top: y + windowHeight, left: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={styles['arrow-down']}
      data-hide-arrow={false}
      onClick={handleClick}
      ref={ref}
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
