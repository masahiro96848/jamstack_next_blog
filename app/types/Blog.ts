import { ImageType } from '@/types/Image'
/**
 * BlogItemType
 */

export interface BlogItemType {
  id: string
  title: string
  content: string
  image: ImageType
  createdAt: string
  updatedAt: string
}

/**
 * BlogPostType
 */
export interface BlogPostType {
  blogList: BlogItemType[]
}
