/**
 * components/common/molecules/BlogItem.tsx
 * @package components
 */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/** styles */
import styles from '@/styles/objects/components/molecules/blogItem.module.scss'

import { BlogItemType } from '@/types/Blog'

type Props = {
  blogItem: BlogItemType
}

export const BlogItem = (props: Props) => {
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
            <p>{blogItem.createdAt}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
