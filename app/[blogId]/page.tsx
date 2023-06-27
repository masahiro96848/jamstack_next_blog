/**
 * ブログ記事詳細ページ
 */
import React from 'react'
/* components */
import { BlogItemTemplate } from '@/components/templates/BlogItemTemplate'

const BlogDetail = () => {
  /* @ts-expect-error Server Component */
  return <BlogItemTemplate />
}

export default BlogDetail
