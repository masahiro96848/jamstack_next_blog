/**
 * organisms/TitleArea
 * @package Component
 */
import React from 'react'
import Link from 'next/link'

/* components */
import { DateArea } from '../common/molecules/DateArea'

import styles from '@/styles/objects/components/organisms/titleArea.module.scss'
import { BlogItemType } from '@/types/Blog'

/**
 * Props
 */
type Props = {
  blogItem: BlogItemType
}

/**
 * TitleArea
 * @param {Props} props
 * @returns
 */

export const TitleArea: React.FC = () => {
  // const { blogItem } = props

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ブログタイトル</h2>
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
