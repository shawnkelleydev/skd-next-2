import About from './About'
import Headshot from './Headshot'
import Social from './Social'

import styles from './styles.module.css'

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div>
        <Headshot />
        <div className={styles.intro}>
          <About />
          <Social />
        </div>
      </div>
    </section>
  )
}
