import React from 'react'

/** components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { BlogItem } from '../common/molecules/BlogItem'
/** api */
import { getBlogsApi } from '@/apis/BlogApi'

export const TopTemplate = async () => {
  const data = await getBlogsApi()
  const blogList = data.blogList

  return (
    <>
      {/* ブログ記事一覧表示 */}
      <BaseBlogPostLayout>
        {blogList.length > 0 &&
          blogList.map((blogItem, index) => (
            <BlogItem key={index} blogItem={blogItem} />
          ))}
      </BaseBlogPostLayout>
    </>
  )
}
