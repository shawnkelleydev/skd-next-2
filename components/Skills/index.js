import { useEffect, useRef, useState } from 'react'

import TechSVG from 'components/TechSVG'

import styles from './styles.module.css'

export default function Skills({ y }) {
  const [windowHeight, setWindowHeight] = useState(0)
  const [componentY, setComponentY] = useState(0)

  const ref = useRef(null)

  useEffect(() => {
    ref &&
      window.addEventListener('scroll', () => {
        const position = ref.current.getBoundingClientRect()
        const { y } = position
        setComponentY(y)
      })
  }, [ref])

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    window.addEventListener('resize', () => setWindowHeight(window.innerHeight))
  }, [])

  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <div ref={ref}>
        <ul data-show={componentY < windowHeight - 100 ? true : false}>
          {Object.keys(TechSVG).map((key, i) => {
            const Icon = TechSVG[key]
            return (
              <li
                key={i}
                data-icon={key}
              >
                <Icon />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
