/**
 * pages/CategoryTemplate
 * @package component
 */
import React from 'react'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
/* apis */
import { getBlogsApi } from '@/apis/BlogApi'
import { BlogContextProvider } from '@/contexts/BlogContext'
import { BlogList } from '../layouts/Main/BlogList'
/* styles */
import styles from '@/styles/templates/categoryTemplate.module.scss'

/**
 * CategoryTemplate
 */
export const CategoryTemplate = async () => {
  const data = await getBlogsApi()
  const blogList = data.blogList
  return (
    <>
      {/* ブログ記事一覧表示 */}
      <BlogContextProvider blogList={blogList}>
        <BaseBlogPostLayout breadName="カテゴリー名">
          {/* ページタイトル */}
          <PageTitle title={`「カテゴリー」の記事一覧`} />
          <BlogList />
        </BaseBlogPostLayout>
      </BlogContextProvider>
    </>
  )
}
