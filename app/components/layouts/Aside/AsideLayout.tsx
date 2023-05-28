import React from 'react'
import { ArchiveArea } from '@/components/layouts/Aside/ArchiveArea'
import { CategoryArea } from '@/components/layouts/Aside/CatagoryArea'
import styles from '@/styles/layouts/aside/asideLayout.module.scss'

export const AsideLayout = () => {
  return (
    <>
      {/* 検索エリア */}
      <div>
        <input type="text" placeholder="検索" className={styles.search} />
      </div>

      <aside className={styles.aside}>
        {/* カテゴリー */}
        <div className={styles.profile}>
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
