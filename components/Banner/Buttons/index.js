import Button from 'components/Button'
import LinkedIn from 'components/LinkedIn'

import styles from './styles.module.css'

export default function Buttons() {
  return (
    <span className={styles.buttons}>
      <Button url='https://github.com/shawnkelleydev/skd-next-2'>
        see the repo
      </Button>

      <a
        href='https://www.linkedin.com/in/shawnkelleydev/'
        rel='noreferrer'
        target='_blank'
      >
        <LinkedIn />
      </a>
    </span>
  )
}
