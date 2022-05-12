import { useEffect, useState } from 'react'

import Logo from 'components/Logo'

import styles from './styles.module.css'

export default function Header() {
  const [y, setY] = useState(0)
  const [hide, setHide] = useState(true)

  useEffect(() => (y > 0 ? setHide(false) : setHide(true)), [y])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setY(window.pageYOffset)
    })
  }, [hide])

  return (
    <header
      className={styles.header}
      data-hide={hide}
    >
      <Logo />
    </header>
  )
}
