/**
 * layouts/Main/Header
 * @package Components
 */
import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
/* styles */
import styles from '@/styles/modules/header.module.scss'

/**
 * Header
 * @returns
 */
export const Header = () => {
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
            <Link href="/">
              <h2>トップ</h2>
            </Link>
            <Link href="/intro">
              <h2>このブログについて</h2>
            </Link>
            <Link href="/profile">
              <h2>プロフィール</h2>
            </Link>
          </div>

          <div className={styles.sp}>
            {/* 検索アイコン */}
            <div className={styles.sp__search}>
              <BsSearch size={25} />
            </div>
            {/* ハンバーガーメニュー */}
            <div className={styles.sp__menu}>
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
