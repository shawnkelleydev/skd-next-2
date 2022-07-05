import About from './About'
import Button from 'components/Button'
import Headshot from './Headshot'
import LinkedIn from 'components/LinkedIn'

import styles from './styles.module.css'

export default function Banner({ cursor, dispatch, state }) {
  return (
    <section className={styles.banner}>
      <div>
        <Headshot step={state.step} />
        <div className={styles.intro}>
          <About />
          <span data-hide={state.step < 8}>
            <Button
              disabled={state.step < 8}
              url='https://github.com/shawnkelleydev/skd-next-2'
            >
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
        </div>
      </div>
    </section>
  )
}
