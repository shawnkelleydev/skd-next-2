import TypeOut from 'components/TypeOut'

import { meta } from 'constants/data'

import styles from './styles.module.css'

export default function Logo({ cursor, dispatch, state }) {
  if (state.step < 2) return
  return (
    <div className={styles.logo}>
      <TypeOut
        cursor={!cursor || state.step > 2}
        data-hide-cursor={!cursor}
        delayAfter={2000}
        delayBefore={1000}
        dispatch={dispatch}
        type='h1'
      >
        {meta.TITLE}
      </TypeOut>
    </div>
  )
}
