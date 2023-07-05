'use client'
/**
 * blog/[blogId]/page.tsx
 * ブログ記事詳細ページ
 */
import React from 'react'
import { useParams } from 'next/navigation'
/* components */
import { BlogItemTemplate } from '@/components/templates/BlogItemTemplate'

const BlogDetailPage = () => {
  const params = useParams()
  return <BlogItemTemplate blogId={params.blogId} />
}

export default BlogDetailPage
