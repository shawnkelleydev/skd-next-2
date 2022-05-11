// import Link from 'next/link'
import { sections } from 'constants/data'

import styles from './styles.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {sections.map((section, key) => (
        <a key={key}>{section}</a>
      ))}
    </nav>
  )
}
