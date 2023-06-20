import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/** styles */
import styles from '@/styles/objects/components/blogItem.module.scss'

import { BlogItemType } from '@/types/Blog'

type Props = {
  blogItem: BlogItemType
}

export const BlogItem = (props: Props) => {
  const { blogItem } = props

  return (
    <Link href="/" prefetch={false}>
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
          <div className={styles.title}>{blogItem.title}</div>
          <div className={styles.categories}>
            <span className={styles.category}>Jest</span>
            <span className={styles.category}>TypeScript</span>
            <span className={styles.category}>テストコード</span>
          </div>

          <div className={styles.date}>
            <p>{blogItem.createdAt}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
