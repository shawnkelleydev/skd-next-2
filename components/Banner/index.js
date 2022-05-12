import Image from 'next/image'

import styles from './styles.module.css'

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div>
        <div className={styles.headshot}>
          <Image
            height='696'
            layout='intrinsic'
            src='/headshot.png'
            width='696'
          />
        </div>
        <div className={styles.intro}>
          <article>
            <h2>Meet Shawn</h2>
            <p>
              Shawn Kelley is a full stack software developer at Compassion
              International.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
