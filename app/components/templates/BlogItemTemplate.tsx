/**
 * templates/BlogItemTemplate
 * @package Components
 */
import React from 'react'
import Image from 'next/image'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { TitleArea } from '@/components/organisms/TitleArea'
import { ParsedBody } from '../common/molecules/ParsedBody'
/* styles */
import styles from '@/styles/templates/blogItemTemplate.module.scss'
import { TableOfContents } from '../organisms/TableOfContents'
import { BlogItemType, TableOfContentsType } from '@/types/Blog'

/**
 * Props
 */
type Props = {
  blogItem: BlogItemType
  tableOfContents: TableOfContentsType[]
  articleBody: string
}

/**
 * BlogItemTemplate
 * @param {Props} props
 * @returns
 */
export const BlogItemTemplate: React.FC<Props> = async (props: Props) => {
  /* props */
  const { blogItem, tableOfContents, articleBody } = props

  return (
    <BaseBlogPostLayout breadName={blogItem.title}>
      <section className={styles.container}>
        <div className={styles.image}>
          <Image
            src={blogItem.image.url}
            alt="picture"
            height={blogItem.image.height}
            width={blogItem.image.width}
          />
        </div>
        <main className={styles.main}>
          {/* ブログタイトルエリア */}
          <TitleArea blogItem={blogItem} />
          {/* 目次 */}
          <TableOfContents tableOfContents={tableOfContents} />
          {/* 記事本文 */}
          <ParsedBody articleBody={blogItem.body} />
        </main>
      </section>
    </BaseBlogPostLayout>
  )
}
