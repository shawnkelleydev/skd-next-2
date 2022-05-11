import { meta } from 'constants/data'

import styles from './styles.module.css'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <h1>{meta.TITLE}</h1>
    </div>
  )
}
