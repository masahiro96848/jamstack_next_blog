/**
 * layouts/Aside/AsideLayout
 * @package Components
 */
import React from 'react'
/* components */
import { InputForm } from '@/components/common/atoms/InputForm'
import { ArchiveArea } from '@/components/layouts/Aside/ArchiveArea'
import { CategoryArea } from '@/components/layouts/Aside/CatagoryArea'
import { ProfileArea } from '@/components/layouts/Aside/ProfileArea'
/* styles */
import styles from '@/styles/layouts/aside/asideLayout.module.scss'

/**
 * AsideLayout
 * @returns
 */
export const AsideLayout = () => {
  return (
    <>
      <aside className={styles.aside}>
        {/* 検索エリア */}
        <div>
          <InputForm />
        </div>
        {/* プロフィール */}
        <div className={styles.profile}>
          <ProfileArea />
        </div>

        {/* カテゴリー */}
        <div className={styles.category}>
          <CategoryArea />
        </div>

        {/* アーカイブ */}
        <div className={styles.archive}>
          <ArchiveArea />
        </div>
      </aside>
    </>
  )
}
