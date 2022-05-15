import Logo from 'components/Logo'

import styles from './styles.module.css'

export default function Header({ cursor, dispatch, state }) {
  return (
    <header className={styles.header}>
      <Logo
        cursor={cursor}
        dispatch={dispatch}
        state={state}
      />
    </header>
  )
}
