/**
 * Blog API
 */

import globalAxios from '@/config/globalAxios'
import { initBlogData, initBlogItem } from '@/constants/initState'
import { BlogDataType } from '@/types/Blog'

const BASE_URL = `${
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
}/blogs/`

const FILTER = '?filters=categories[contains]'

/**
 * ブログ記事一覧取得
 * @returns {Promise<BlogDataType>}
 */
export const getBlogsApi = async (): Promise<BlogDataType> => {
  const blogData: BlogDataType = initBlogData
  try {
    const res = await globalAxios.get(BASE_URL)
    blogData.blogList = res.data.contents
  } catch (error) {
    throw new Error('API ERROR: getBlogApi')
  }

  return blogData
}

/**
 * カテゴリーに紐づくブログ一覧を取得
 * @param {string} categoryId
 * @returns {Promise<BlogDataType>}
 */
export const getBlogsContainCategoriesApi = async (
  categoryId: string,
): Promise<BlogDataType> => {
  const blogData: BlogDataType = initBlogData

  try {
    const res = await globalAxios.get(BASE_URL + FILTER + categoryId)
    blogData.blogList = res.data.contents
  } catch (error) {
    throw new Error(`API ERROR: getBlogsContainCategoriesApi`)
  }
  return blogData
}

/**
 * 対象日付の月のブログ記事一覧を取得
 * @param {string} startDate
 * @param {string} endDate
 *
 * @returns {Promise<BlogDataType>}
 */
export const getBlogsContainArchiveMonthApi = async (
  startDate: string,
  endDate: string,
): Promise<BlogDataType> => {
  const blogData: BlogDataType = initBlogData

  try {
    const res = await globalAxios.get(
      BASE_URL +
        '&filters=createdAt[greater_than]' +
        startDate +
        '[and]createdAt[less_than]' +
        endDate,
    )
    blogData.blogList = res.data.contents
  } catch (error) {
    throw new Error(`API ERROR: getBlogsContainArchiveMonthApi`)
  }
  return blogData
}

/**
 * ブログ記事詳細取得
 */
export const getBlogByApi = async (id: string, draftKey: string) => {
  let blogDetail = initBlogItem
  try {
    const res = await globalAxios.get(
      `${BASE_URL}${id}${draftKey !== '' ? `?draftKey=${draftKey}` : ''}`,
    )
    blogDetail = res.data
  } catch (error) {
    console.log(error)
    throw new Error(`API ERROR: getBlogByApi`)
  }

  return blogDetail
}
