/**
 * Blog記事のinterface
 * @package types
 */

/* types */
import { ImageType } from '@/types/Image'
import { CategoryType } from '@/types/Category'
/**
 * BlogItemType
 */

export interface BlogItemType {
  id: string
  title: string
  body: string
  image: ImageType
  categories: CategoryType[]
  createdAt: string
  updatedAt: string
}

/**
 * BlogDataType
 */
export interface BlogDataType {
  blogList: BlogItemType[]
}
