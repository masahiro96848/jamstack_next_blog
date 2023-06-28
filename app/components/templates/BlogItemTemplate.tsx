/**
 * templates/BlogItemTemplate
 * @package
 */
import React from 'react'
import Image from 'next/image'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { TitleArea } from '@/components/organisms/TitleArea'
/* api */
import { getBlogByApi } from '@/apis/BlogApi'
/* styles */
import styles from '@/styles/templates/blogItemTemplate.module.scss'
import { BlogItemType } from '@/types/Blog'

/**
 * Props
 */
type Props = {
  blogItem: BlogItemType
  draftKey?: any
}

/**
 * BlogItemTemplate
 * @param {Props} props
 * @returns
 */
export const BlogItemTemplate = async () => {
  // const { blogItem, draftKey } = props

  return (
    <BaseBlogPostLayout breadName="ブログ詳細">
      <section className={styles.container}>
        <div className={styles.image}>
          <Image src="/test01.jpg" alt="picture" height={450} width={850} />
        </div>
        <main className={styles.main}>
          {/* ブログタイトルエリア */}
          <TitleArea />
          {/* 目次 */}

          {/* 記事本文 */}
        </main>
      </section>
    </BaseBlogPostLayout>
  )
}
