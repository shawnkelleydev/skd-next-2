import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import styles from './styles.module.css'

export default function Family() {
  const [windowHeight, setWindowHeight] = useState(0)
  const [picY, setPicY] = useState(null)
  const [picBottomY, setPicBottomY] = useState(null)

  const ref = useRef(null)

  useEffect(() => {
    ref &&
      window.addEventListener('scroll', () => {
        const position = ref.current.getBoundingClientRect()
        const { bottom, y } = position
        setPicY(y)
        setPicBottomY(bottom)
      })
  }, [ref])

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    window.addEventListener('resize', () => setWindowHeight(window.innerHeight))
  }, [])

  return (
    <div
      className={styles.family}
      data-show={picY < windowHeight - 300 || picBottomY < windowHeight + 100}
      ref={ref}
    >
      <Image
        height='3769'
        layout='responsive'
        src='/family.jpg'
        width='5654'
      />
    </div>
  )
}
