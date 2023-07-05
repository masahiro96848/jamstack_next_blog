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
 */
export const TitleArea: React.FC<Props> = (props: Props) => {
  /* props */
  const { blogItem } = props

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{blogItem.title}</h2>
      <div className={styles.categories}>
        {blogItem.categories.map((category, index) => {
          return (
            <Link
              href={`category/${category.id}`}
              key={`${category.id}_${index}`}
            >
              <span className={styles.category}>{category.name}</span>
            </Link>
          )
        })}
      </div>
      <div className={styles.date}>
        <DateArea date={blogItem.createdAt} />
      </div>
    </div>
  )
}
