'use client'
/**
 * layouts/Main/Header
 * @package Components
 */
import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
/* styles */
import styles from '@/styles/modules/header.module.scss'
import { MenuModal } from '@/components/modals/MenuModal'

/**
 * Header
 * @returns
 */
export const Header: React.FC = () => {
  /* props */
  // const { handleOpenMenuModal } = props
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenMenuModal = () => {
    setIsOpen(true)
  }
  const handleCloseMenuModal = () => {
    setIsOpen(false)
  }

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
            <div className={styles.sp__menu} onClick={handleOpenMenuModal}>
              <AiOutlineMenu size={25} />
            </div>
            {/* モーダル画面 */}
            <MenuModal
              isModalMenu={isOpen}
              handleCloseMenuModal={handleCloseMenuModal}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
