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
/* types */
import { BlogItemType } from '@/types/Blog'

type Props = {
  categoryId: string
}

/**
 * CategoryTemplate
 */
export const CategoryTemplate = async (props: Props) => {
  const { categoryId } = props

  let blogList: BlogItemType[] = []
  const data = await getBlogsContainCategoriesApi(categoryId)
  blogList = data.blogList

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
