/**
 * Blog API
 */

import globalAxios from '@/config/globalAxios'
import { initBlogData, initBlogItem } from '@/constants/initState'
import { BlogDataType } from '@/types/Blog'

const BASE_URL = `${
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
}/blogs/`

/**
 * ブログ記事一覧取得
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
