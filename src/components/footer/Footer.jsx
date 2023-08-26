import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Lamania. All rights reserverd.</div>
      <div className='styles.social'>
        <Image src="/1.png" width={15} height={15} className={styles.icon}  alt="atlas fb" />
        <Image src="/2.png" width={15} height={15} className={styles.icon}  alt="atlas ista" />
        <Image src="/3.png" width={15} height={15} className={styles.icon}  alt="atlas twitter" />
        <Image src="/4.png" width={15} height={15} className={styles.icon}  alt="atlas yt" />
      </div>
    </div>
  )
}

export default Footer
