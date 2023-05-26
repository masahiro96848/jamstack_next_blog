import Link from 'next/link'
import React from 'react'
import styles from '@/styles/modules/header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.main}>
          <Link href="/">
            <div className={styles.title}>
              <h1>ZEROne</h1>
            </div>
          </Link>
          <div className={styles.link}>
            <Link href="">
              <h2>トップ</h2>
            </Link>
            <Link href="">
              <h2>このブログについて</h2>
            </Link>
            <Link href="">
              <h2>プロフィール</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
