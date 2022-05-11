import { meta } from 'constants/data'

import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>{meta.TITLE}</h1>
    </header>
  )
}
