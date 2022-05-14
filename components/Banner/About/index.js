import styles from './styles.module.css'

export default function About() {
  return (
    <article className={styles.about}>
      <h2>about</h2>
      <p>
        Shawn Kelley is a full stack software developer at Compassion
        International.
      </p>
      <p>
        His team uses JavaScript, Dart, and AWS to better connect sponsors with
        children around the world.
      </p>
      <p>
        Shawn lives in the Denver metro area with his wife, two daughters, and
        English Springer Spaniel.
      </p>
    </article>
  )
}
