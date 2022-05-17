import Button from 'components/Button'
import About from './About'
import Headshot from './Headshot'

import styles from './styles.module.css'

export default function Banner({ cursor, dispatch, state }) {
  return (
    <section className={styles.banner}>
      <div>
        <Headshot step={state.step} />
        <div className={styles.intro}>
          <About
            cursor={cursor}
            dispatch={dispatch}
            step={state.step}
          />
          <Button
            data-hide={state.step < 8}
            disabled={state.step < 8}
            url='https://www.linkedin.com/in/shawnkelleydev/'
          >
            Connect with Shawn
          </Button>
        </div>
      </div>
    </section>
  )
}
