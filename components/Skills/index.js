import TechSVG from 'components/TechSVG'

import styles from './styles.module.css'

export default function Skills() {
  console.log(TechSVG)
  return (
    <section className={styles.skills}>
      <h2>skills</h2>
      <div>
        {Object.keys(TechSVG).map((key, i) => {
          const Icon = TechSVG[key]
          return <Icon key={i} />
        })}
      </div>
    </section>
  )
}
