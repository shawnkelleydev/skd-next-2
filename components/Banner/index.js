import About from './About'
import Headshot from './Headshot'
import Social from './Social'

import styles from './styles.module.css'

export default function Banner({ cursor, dispatch, state }) {
  return (
    <section className={styles.banner}>
      <div>
        <div className={styles.intro}>
          <About
            cursor={cursor}
            dispatch={dispatch}
            step={state.step}
          />
          <Social
            dispatch={dispatch}
            state={state}
          />
        </div>
        <Headshot step={state.step} />
      </div>
    </section>
  )
}
