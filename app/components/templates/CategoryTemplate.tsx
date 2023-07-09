/**
 * templates/CategoryTemplate
 * @package Components
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
 * @param {Props}props
 * @returns
 */
export const CategoryTemplate = async (props: Props) => {
  /* props */
  const { categoryId } = props
  let blogList: BlogItemType[] = []

  // カテゴリー一覧取得
  const categoryData = await getCategoriesApi()
  const categoryName = categoryData.filter((category) => {
    return category.id === categoryId
  })
  // カテゴリーに紐づくブログ一覧を取得
  const data = await getBlogsContainCategoriesApi(categoryId)
  blogList = data.blogList

  return (
    <>
      {/* ブログ記事一覧表示 */}
      <BlogContextProvider blogList={blogList}>
        <BaseBlogPostLayout breadName={categoryName[0].name}>
          {/* ページタイトル */}
          <PageTitle title={`「${categoryName[0].name}」の記事一覧`} />
          <BlogList />
        </BaseBlogPostLayout>
      </BlogContextProvider>
    </>
  )
}
