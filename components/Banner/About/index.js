import TypeOut from 'components/TypeOut'

import styles from './styles.module.css'

export default function About({ cursor, step, dispatch }) {
  const header = 'about'
  const p1 =
    'Shawn Kelley is a full stack software developer at Compassion International.'
  const p2 =
    'His team uses JavaScript to better connect sponsors with children around the world.'
  const p3 =
    'Shawn lives in the Denver metro area with his wife, two daughters, and English Springer Spaniel.'
  const ps = 'P.S. This website was made with Next.'

  return (
    <article className={styles.about}>
      {step >= 3 && (
        <TypeOut
          type='h2'
          cursor={cursor}
          delayAfter={1000}
          delayBefore={1000}
          dispatch={dispatch}
        >
          {header}
        </TypeOut>
      )}
      {step >= 4 && (
        <TypeOut
          cursor={cursor}
          delayAfter={1000}
          dispatch={dispatch}
        >
          {p1}
        </TypeOut>
      )}
      {step >= 5 && (
        <TypeOut
          cursor={cursor}
          delayAfter={1000}
          dispatch={dispatch}
        >
          {p2}
        </TypeOut>
      )}
      {step >= 6 && (
        <TypeOut
          cursor={cursor}
          delayAfter={2000}
          dispatch={dispatch}
        >
          {p3}
        </TypeOut>
      )}
      {step >= 7 && (
        <TypeOut
          cursor={cursor}
          delayAfter={2000}
          dispatch={dispatch}
        >
          {ps}
        </TypeOut>
      )}
    </article>
  )
}
