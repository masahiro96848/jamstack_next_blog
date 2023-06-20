/**
 * initState
 */
import { BlogItemType, BlogPostType } from '@/types/Blog'
import { ImageType } from '@/types/Image'

/**
 * initImageState
 */
export const initImageState: ImageType = {
  url: '',
  height: 0,
  width: 0,
}

/**
 * initBlogItem
 */
export const initBlogItem: BlogItemType = {
  id: '',
  title: '',
  content: '',
  image: initImageState,
  createdAt: '',
  updatedAt: '',
}

/**
 * initBlotPost
 */
export const initBlogPost: BlogPostType = {
  blogList: [],
}
