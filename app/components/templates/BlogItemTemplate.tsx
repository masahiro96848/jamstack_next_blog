/**
 * templates/BlogItemTemplate
 * @package Components
 */
import React from 'react'
import Image from 'next/image'
import * as cheerio from 'cheerio'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { TitleArea } from '@/components/organisms/TitleArea'
import { ParsedBody } from '../common/molecules/ParsedBody'
/* api */
import { getBlogByApi } from '@/apis/BlogApi'
/* styles */
import styles from '@/styles/templates/blogItemTemplate.module.scss'
import { TableOfContents } from '../organisms/TableOfContents'

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
  /* props */
  const { blogId } = props
  /* api */
  const blogItem = await getBlogByApi(blogId)

  const $ = cheerio.load(blogItem.body)
  const headings = $('h1, h2, h3').toArray()
  const tableOfContents = headings.map((data) => ({
    //@ts-ignore
    text: data.children[0].data,
    id: data.attribs.id,
    name: data.name,
  }))

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
          <ParsedBody body={blogItem.body} />
        </main>
      </section>
    </BaseBlogPostLayout>
  )
}
