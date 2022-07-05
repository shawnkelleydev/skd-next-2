import React from 'react'

import Image from 'next/image'

import styles from './styles.module.css'

export default function Headshot() {
  return (
    <div className={styles.headshot}>
      <div className={styles.container}>
        <Image
          alt='headshot of Shawn Kelley wearing a grey sweater over a white blue-checkered shirt smiling'
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
