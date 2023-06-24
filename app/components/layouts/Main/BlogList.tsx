'use client'
import React, { useContext } from 'react'
import { BlogStateContext } from '@/contexts/BlogContext'
import { BlogItem } from '@/components/common/molecules/BlogItem'

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
