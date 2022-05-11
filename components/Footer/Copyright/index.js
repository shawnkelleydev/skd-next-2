import { meta } from 'constants/data'

import styles from './styles.module.css'

export default function copyright() {
  return (
    <div className={styles.copyright}>
      <small>
        Copyright © {meta.CURRENT_YEAR} {meta.AUTHOR}.
      </small>
      <small>All rights reserved.</small>
    </div>
  )
}
