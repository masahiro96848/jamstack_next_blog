import React from 'react'
import { ArchiveArea } from '@/components/layouts/Aside/ArchiveArea'
import { CategoryArea } from '@/components/layouts/Aside/CatagoryArea'
import { ProfileArea } from '@/components/layouts/Aside/ProfileArea'
import styles from '@/styles/layouts/aside/asideLayout.module.scss'

export const AsideLayout = () => {
  return (
    <>
      <aside className={styles.aside}>
        {/* 検索エリア */}
        <div>
          <input type="text" placeholder="検索" className={styles.search} />
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
