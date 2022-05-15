import TypeOut from 'components/TypeOut'

import styles from './styles.module.css'

export default function About({ cursor, step, dispatch }) {
  const header = 'about'
  const p1 =
    'Shawn Kelley is a full stack software developer at Compassion International.'
  const p2 =
    'His team uses JavaScript, Dart, and AWS to better connect sponsors with children around the world.'
  const p3 =
    'Shawn lives in the Denver metro area with his wife, two daughters, and English Springer Spaniel.'

  return (
    <article className={styles.about}>
      {step >= 3 && (
        <TypeOut
          type='h2'
          cursor={cursor}
          dispatch={dispatch}
        >
          {header}
        </TypeOut>
      )}
      {step >= 4 && (
        <TypeOut
          cursor={cursor}
          dispatch={dispatch}
        >
          {p1}
        </TypeOut>
      )}
      {step >= 5 && (
        <TypeOut
          cursor={cursor}
          dispatch={dispatch}
        >
          {p2}
        </TypeOut>
      )}
      {step >= 6 && (
        <TypeOut
          cursor={cursor}
          dispatch={dispatch}
        >
          {p3}
        </TypeOut>
      )}
    </article>
  )
}
