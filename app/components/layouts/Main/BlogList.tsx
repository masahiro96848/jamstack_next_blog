'use client'
/**
 * layouts/main/BlogList
 * @package Components
 */
import React, { useContext } from 'react'
/* components */
import { BlogItem } from '@/components/common/molecules/BlogItem'
/* context */
import { BlogStateContext } from '@/contexts/BlogContext'

/**
 * BlogList
 * @returns
 */
export const BlogList = () => {
  const { blogList } = useContext(BlogStateContext)

  return (
    <>
      {blogList.length > 0 &&
        blogList.map((blogItem, index) => (
          <BlogItem key={index} blogItem={blogItem} />
        ))}
    </>
  )
}
