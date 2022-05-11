import { meta } from 'constants/data'

import Logo from 'components/Logo'
import Nav from 'components/Nav'

import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  )
}
