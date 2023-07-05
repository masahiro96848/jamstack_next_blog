/**
 * templates/BlogItemTemplate
 * @package
 */
import React from 'react'
import Image from 'next/image'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { TitleArea } from '@/components/organisms/TitleArea'
import { ParsedBody } from '../common/molecules/ParsedBody'
/* api */
import { getBlogByApi } from '@/apis/BlogApi'
/* styles */
import styles from '@/styles/templates/blogItemTemplate.module.scss'
import { BlogItemType } from '@/types/Blog'

/**
 * Props
 */
type Props = {
  blogId: string
}

/**
 * BlogItemTemplate
 * @param {Props} props
 * @returns
 */
export const BlogItemTemplate: React.FC<Props> = async (props: Props) => {
  const { blogId } = props
  const blogItem = await getBlogByApi(blogId)

  return (
    <BaseBlogPostLayout breadName="ブログ詳細">
      <section className={styles.container}>
        <div className={styles.image}>
          <Image
            src={blogItem.image.url}
            alt="picture"
            height={450}
            width={850}
          />
        </div>
        <main className={styles.main}>
          {/* ブログタイトルエリア */}
          <TitleArea blogItem={blogItem} />
          {/* 目次 */}

          {/* 記事本文 */}
          <ParsedBody body={blogItem.body} />
        </main>
      </section>
    </BaseBlogPostLayout>
  )
}
