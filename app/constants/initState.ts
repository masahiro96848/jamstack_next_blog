/**
 * initState
 * @package Constants
 */

/* types */
import { BlogItemType, BlogDataType } from '@/types/Blog'
import { CategoryType } from '@/types/Category'
import { ImageType } from '@/types/Image'
import { ProfileType } from '@/types/Profile'

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
  categories: [],
  createdAt: '',
  updatedAt: '',
}

/**
 * initBlotPost
 */
export const initBlogData: BlogDataType = {
  blogList: [],
}

/**
 * initProfileState
 */
export const initProfileState: ProfileType = {
  id: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
  name: '',
  englishName: '',
  position: '',
  introduction: '',
  userImage: initImageState,
  articleImage: initImageState,
  description: '',
  contents: '',
}

/**
 * initCategoryData
 */
export const initCategoryData: CategoryType = {
  id: '',
  name: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
}
