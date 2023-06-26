/**
 * organisms/TitleArea
 * @package Component
 */
import React from 'react'
import Link from 'next/link'

/* components */
import { DateArea } from '../common/molecules/DateArea'

import styles from '@/styles/objects/components/organisms/titleArea.module.scss'

export const TitleArea: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ブログのタイトル</h2>
      <div className={styles.category}>
        <div>
          <Link href="">
            <div className={styles.categoryItem}>Jest</div>
          </Link>
          <Link href="">
            <div className={styles.categoryItem}>TypeScript</div>
          </Link>
        </div>
      </div>
      <div className={styles.date}>
        <DateArea />
      </div>
    </div>
  )
}
