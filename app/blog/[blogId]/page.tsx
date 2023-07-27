/**
 * blog/[blogId]/page.tsx
 * ブログ記事詳細ページ
 */
import React from 'react'
import * as cheerio from 'cheerio'
/* apis */
import { getBlogsApi, getBlogByApi } from '@/apis/BlogApi'
/* components */
import { BlogItemTemplate } from '@/components/templates/BlogItemTemplate'
/* types */
import { TableOfContentsType } from '@/types/Blog'

export async function generateStaticParams() {
  const blogs = await getBlogsApi()

  return blogs.blogList.map((blog) => ({
    blogId: blog.id.toString(),
  }))
}

const BlogDetailPage = async ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params
  const blogItem = await getBlogByApi(blogId)

  const $ = cheerio.load(blogItem.body)
  const headings = $('h1, h2, h3').toArray()
  const tableOfContents: TableOfContentsType[] = headings.map((data) => ({
    //@ts-ignore
    text: data.children[0].data,
    id: data.attribs.id,
    name: data.name,
  }))

  return (
    <BlogItemTemplate
      blogItem={blogItem}
      tableOfContents={tableOfContents}
      articleBody={blogItem.body}
    />
  )
}

export default BlogDetailPage
