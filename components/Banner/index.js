import About from './About'
import Buttons from './Buttons'
import Headshot from './Headshot'

import styles from './styles.module.css'

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div>
        <Headshot />
        <div className={styles.intro}>
          <About />
          <Buttons />
        </div>
      </div>
    </section>
  )
}
