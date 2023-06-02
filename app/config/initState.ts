/**
 * initState
 */
import { BlogItemType, BlogPostType } from '@/types/Blog'

/**
 * initBlogItem
 */
export const initBlogItem: BlogItemType = {
  id: '',
  title: '',
  content: '',
  createdAt: '',
  updatedAt: '',
}

/**
 * initBlotPost
 */
export const initBlogPost: BlogPostType = {
  blogList: [],
}
