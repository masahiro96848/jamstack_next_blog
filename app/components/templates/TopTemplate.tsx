import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/** components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
/** api */
import { getBlogsApi } from '@/apis/BlogApi'
/** styles */
import styles from '@/styles/templates/topTemplate.module.scss'

export const TopTemplate = () => {
  return (
    <>
      <BaseBlogPostLayout>
        {/* ブログ記事一覧表示 */}
        <Link href="/">
          <div className={styles.container}>
            <div className={styles.imageArea}>
              <Image
                src="/sample01.png"
                width={280}
                height={200}
                alt="blog_item_image"
                className={styles.image}
              />
            </div>
            <div className={styles.articleArea}>
              <div className={styles.title}>テストタイトル1</div>
              <div className={styles.categories}>
                <span className={styles.category}>Jest</span>
                <span className={styles.category}>TypeScript</span>
                <span className={styles.category}>テストコード</span>
              </div>

              <div className={styles.date}>
                <p>2023/07/01</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/">
          <div className={styles.container}>
            <div className={styles.imageArea}>
              <Image
                src="/sample01.png"
                width={280}
                height={200}
                alt="blog_item_image"
                className={styles.image}
              />
            </div>
            <div className={styles.articleArea}>
              <div className={styles.title}>テストタイトル1</div>
              <div className={styles.categories}>
                <span className={styles.category}>Jest</span>
                <span className={styles.category}>TypeScript</span>
                <span className={styles.category}>テストコード</span>
              </div>

              <div className={styles.date}>
                <p>2023/07/01</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/">
          <div className={styles.container}>
            <div className={styles.imageArea}>
              <Image
                src="/sample01.png"
                width={280}
                height={200}
                alt="blog_item_image"
                className={styles.image}
              />
            </div>
            <div className={styles.articleArea}>
              <div className={styles.title}>テストタイトル1</div>
              <div className={styles.categories}>
                <span className={styles.category}>Jest</span>
                <span className={styles.category}>TypeScript</span>
                <span className={styles.category}>テストコード</span>
              </div>

              <div className={styles.date}>
                <p>2023/07/01</p>
              </div>
            </div>
          </div>
        </Link>
      </BaseBlogPostLayout>
    </>
  )
}
