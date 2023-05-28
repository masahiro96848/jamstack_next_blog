import React from 'react'
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
        {/* プロフィール */}
        <div className={styles.profile}>
          <CategoryArea />
        </div>
      </aside>
    </>
  )
}
