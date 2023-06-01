/**
 * BlogItemType
 */

export interface BlogItemType {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

/**
 * BlogPostType
 */
export interface BlogPostType {
  blogList: BlogItemType[]
}
