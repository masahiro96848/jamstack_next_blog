/**
 * templates/BlogItemTemplate
 * @package
 */
import React from 'react'
import Image from 'next/image'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
/* styles */
import styles from '@/styles/templates/blogItemTemplate.module.scss'
export const BlogItemTemplate: React.FC = () => {
  return (
    <BaseBlogPostLayout>
      <section className={styles.container}>
        <div className={styles.image}>
          <Image src="" alt="picture" height={180} width={180} />
        </div>
        <main className={styles.main}>
          {/* ブログタイトルエリア */}

          {/* 目次 */}

          {/* 記事本文 */}
        </main>
      </section>
    </BaseBlogPostLayout>
  )
}
