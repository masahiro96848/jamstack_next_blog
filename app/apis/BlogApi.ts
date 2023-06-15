/**
 * Blog API
 */

import globalAxios from '@/config/globalAxios'
import { initBlogPost } from '@/config/initState'
import { BlogPostType } from '@/types/Blog'

const BASE_URL = `${
  process.env.MICROCMS_SERVICE_DOMAIN || 'http://localhost:3000/'
}/blogs/`

/**
 * ブログ記事一覧取得
 */
export const getBlogsApi = async (): Promise<BlogPostType> => {
  const blogData: BlogPostType = initBlogPost
  try {
    const res = await globalAxios.get(BASE_URL)
    blogData.blogList = res.data
  } catch (error) {
    console.log(error)
    throw new Error('API ERROR: getBlogApi')
  }

  return blogData
}
