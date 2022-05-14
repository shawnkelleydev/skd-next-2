import LinkedIn from 'components/SocialIcons/LinkedIn'
import Twitter from 'components/SocialIcons/Twitter'
import TechSVG from 'components/TechSVG'

import styles from './styles.module.css'

const { GitHub } = TechSVG

export default function Social() {
  return (
    <span className={styles.social}>
      <a
        href='https://github.com/shawnkelleydev'
        target='_blank'
        rel='noreferrer'
      >
        <GitHub />
      </a>
      <a
        href='https://www.linkedin.com/in/shawnkelleydev/'
        target='_blank'
        rel='noreferrer'
      >
        <LinkedIn />
      </a>
      <a
        href='https://twitter.com/shawnkelleydev'
        target='_blank'
        rel='noreferrer'
      >
        <Twitter />
      </a>
    </span>
  )
}
