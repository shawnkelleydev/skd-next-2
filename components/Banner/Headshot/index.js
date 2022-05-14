import Image from 'next/image'

import styles from './styles.module.css'

export default function Headshot() {
  return (
    <div className={styles.headshot}>
      <Image
        height='696'
        layout='intrinsic'
        src='/headshot.png'
        width='696'
      />
    </div>
  )
}
