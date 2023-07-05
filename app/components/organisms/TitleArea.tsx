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
import { getBlogsContainCategoriesApi } from '@/apis/BlogApi'

/**
 * Props
 */
type Props = {
  blogItem: BlogItemType
  // categoryId: string
}

/**
 * TitleArea
 * @param {Props} props
 * @returns
 */

export const TitleArea: React.FC<Props> = (props: Props) => {
  /* props */
  const { blogItem } = props

  // const data = getBlogsContainCategoriesApi(categoryId)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{blogItem.title}</h2>
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
