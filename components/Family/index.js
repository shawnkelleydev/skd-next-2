import Image from 'next/image'

import styles from './styles.module.css'

export default function Family() {
  return (
    <div className={styles.family}>
      <Image
        height='3769'
        layout='responsive'
        src='/family.jpg'
        width='5654'
      />
    </div>
  )
}
