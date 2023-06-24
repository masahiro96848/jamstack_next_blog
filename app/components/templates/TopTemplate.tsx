import React from 'react'

/** components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
/** api */
import { getBlogsApi } from '@/apis/BlogApi'
/** context */
import { BlogContextProvider } from '@/contexts/BlogContext'

import { BlogList } from '@/components/layouts/Main/BlogList'

export const TopTemplate = async () => {
  const data = await getBlogsApi()
  const blogList = data.blogList

  return (
    <>
      {/* ブログ記事一覧表示 */}
      <BlogContextProvider blogList={blogList}>
        <BaseBlogPostLayout>
          <BlogList />
        </BaseBlogPostLayout>
      </BlogContextProvider>
    </>
  )
}
