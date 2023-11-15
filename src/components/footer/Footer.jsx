import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 ATC. All rights reserved.</div>
      <div className={styles.social}>
        <img src="/1.png" width={15} height={15} className={styles.icon} alt="atlas fb" />
        <img src="/2.png" width={15} height={15} className={styles.icon} alt="atlas ista" />
        <img src="/3.png" width={15} height={15} className={styles.icon} alt="atlas twitter" />
        <img src="/4.png" width={15} height={15} className={styles.icon} alt="atlas yt" />
      </div>
    </div>
  );
};

export default Footer;
