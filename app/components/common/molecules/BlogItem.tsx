/**
 * common/molecules/BlogItem
 * @package Components
 */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
/* components */
import { DateArea } from '@/components/common/molecules/DateArea'
/* types */
import { BlogItemType } from '@/types/Blog'
/** styles */
import styles from '@/styles/objects/components/molecules/blogItem.module.scss'

/**
 * props
 */
type Props = {
  blogItem: BlogItemType
}

/**
 *
 * @param {Props}props
 * @returns
 */
export const BlogItem = (props: Props) => {
  /* props */
  const { blogItem } = props

  return (
    <Link href={`blog/${blogItem.id}`} prefetch={false}>
      <div className={styles.container}>
        <div className={styles.imageArea}>
          <Image
            src={blogItem.image.url}
            width={300}
            height={200}
            alt="blog_list_image"
            className={styles.image}
          />
        </div>
        <div className={styles.articleArea}>
          <h2 className={styles.title}>{blogItem.title}</h2>
          <div className={styles.categories}>
            {blogItem.categories.map((category, index) => {
              return (
                <span
                  className={styles.category}
                  key={`${category.id}_${index}`}
                >
                  {category.name}
                </span>
              )
            })}
          </div>

          <div className={styles.date}>
            <DateArea
              createdAt={blogItem.createdAt}
              updatedAt={blogItem.updatedAt}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
