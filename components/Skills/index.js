import { useState } from 'react'

import TechSVG from 'components/TechSVG'

import styles from './styles.module.css'

export default function Skills() {
  const [hideIcons, setHideIcons] = useState(true)

  setTimeout(() => setHideIcons(false), 10000)

  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <div data-hide-icons={hideIcons}>
        {Object.keys(TechSVG).map((key, i) => {
          const Icon = TechSVG[key]
          return (
            <span
              key={i}
              data-icon={key}
            >
              <Icon />
            </span>
          )
        })}
      </div>
    </section>
  )
}
