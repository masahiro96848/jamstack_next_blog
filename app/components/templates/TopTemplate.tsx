/**
 * templates/TopTemplate
 * @package Components
 */
import React from 'react'
/** components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { BlogList } from '@/components/layouts/Main/BlogList'
/** api */
import { getBlogsApi } from '@/apis/BlogApi'
/** context */
import { BlogContextProvider } from '@/contexts/BlogContext'

/**
 * TopTemplate
 * @returns
 */
export const TopTemplate = async () => {
  /* api */
  const data = await getBlogsApi()
  const blogList = data.blogList

  return (
    <>
      {/* ブログ記事一覧表示 */}
      <BlogContextProvider blogList={blogList}>
        <BaseBlogPostLayout breadName="">
          <BlogList />
        </BaseBlogPostLayout>
      </BlogContextProvider>
    </>
  )
}
