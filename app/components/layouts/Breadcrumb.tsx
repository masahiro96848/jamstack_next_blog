import Link from 'next/link'
import React from 'react'

import styles from '@/styles/modules/breadcrumb.module.scss'

export const Breadcrumb = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.top}>
          <ul className={styles.bread__list}>
            <li className={styles.bread__item}>
              <Link href="/">
                <span className={styles.bread__home}>TOP</span>
              </Link>
            </li>
            <li className={styles.breadName}>Bread Name</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
