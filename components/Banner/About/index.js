import styles from './styles.module.css'

export default function About() {
  const p1 =
    'Shawn Kelley is a full stack software developer at Compassion International.'
  const p2 =
    'His team uses JavaScript to better connect sponsors with children around the world.'
  const p3 =
    'Shawn lives in the Denver metro area with his wife, two daughters, and English Springer Spaniel.'
  const ps = 'P.S. This website was made with Next.'

  const paragraphs = [p1, p2, p3, ps]

  return (
    <article className={styles.about}>
      <h2>about</h2>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </article>
  )
}
