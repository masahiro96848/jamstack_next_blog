/**
 * pages/CategoryTemplate
 * @package component
 */
import React from 'react'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
/* apis */
import { getBlogsContainCategoriesApi } from '@/apis/BlogApi'
import { getCategoriesApi } from '@/apis/CategoryApi'
/* context */
import { BlogContextProvider } from '@/contexts/BlogContext'
/* components */
import { BlogList } from '@/components/layouts/Main/BlogList'
/* styles */
import styles from '@/styles/templates/categoryTemplate.module.scss'
import { BlogItemType } from '@/types/Blog'

/**
 * CategoryTemplate
 */
export const CategoryTemplate = async () => {
  const categoryData = await getCategoriesApi()
  let blogList: BlogItemType[] = []
  for await (const category of categoryData) {
    const data = await getBlogsContainCategoriesApi(category.id)
    blogList = data.blogList
  }

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
