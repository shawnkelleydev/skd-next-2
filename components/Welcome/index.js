import TypeOut from 'components/TypeOut'
import styles from './styles.module.css'

export default function Welcome({ cursor, dispatch, state }) {
  if (state.step > 2) return

  return (
    <div
      className={styles.welcome}
      data-end={state.step === 2}
    >
      <TypeOut
        cursor={cursor}
        data-hide-cursor={!cursor}
        delayAfter={2000}
        delayBefore={2000}
        dispatch={dispatch}
        type='h1'
      >
        Welcome
      </TypeOut>
    </div>
  )
}
