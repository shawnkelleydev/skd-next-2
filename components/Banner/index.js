import Image from 'next/image'

import LinkedIn from 'components/SocialIcons/LinkedIn'
import Twitter from 'components/SocialIcons/Twitter'
import TechSVG from 'components/TechSVG'

import styles from './styles.module.css'

const { GitHub } = TechSVG

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
            <h2>about</h2>
            <p>
              Shawn Kelley is a full stack software developer at Compassion
              International.
            </p>
            <p>
              His team uses JavaScript, Dart / Flutter, and AWS to better
              connect sponsors with children around the world.
            </p>
            <p>
              Shawn lives in the Denver metro area with his wife, two daughters,
              and English Springer Spaniel.
            </p>
            <span>
              <a
                href='https://github.com/shawnkelleydev'
                target='_blank'
                rel='noreferrer'
              >
                <GitHub />
              </a>
              <a
                href='https://www.linkedin.com/in/shawnkelleydev/'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedIn />
              </a>
              <a
                href='https://twitter.com/shawnkelleydev'
                target='_blank'
                rel='noreferrer'
              >
                <Twitter />
              </a>
            </span>
          </article>
        </div>
      </div>
    </section>
  )
}
