import ConnectButton from 'components/ConnectButton'
import About from './About'
import Headshot from './Headshot'

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
          <ConnectButton
            step={state.step}
            url='https://www.linkedin.com/in/shawnkelleydev/'
          >
            Connect with Shawn
          </ConnectButton>
        </div>
        <Headshot step={state.step} />
      </div>
    </section>
  )
}
