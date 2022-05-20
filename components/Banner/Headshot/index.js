import Image from 'next/image'

import styles from './styles.module.css'

export default function Headshot({ step }) {
  return (
    <div
      className={styles.headshot}
      data-show={step >= 3}
    >
      <div className={styles.container}>
        <Image
          height='696'
          layout='intrinsic'
          priority='true'
          src='/headshot.png'
          width='696'
        />
      </div>
    </div>
  )
}
