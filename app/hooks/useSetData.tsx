'use client'
import React, { useCallback } from 'react'

/** contexts */
import { useBlogDispatch, setBlogList } from '@/contexts/BlogContext'

/** api */
import { getBlogsApi } from '@/apis/BlogApi'

/** types */
import { BlogItemType } from '@/types/Blog'

export const useSetData = () => {
  const dispatchBlog = useBlogDispatch()

  /**
   * setBlogData
   */
  const getBlogData = useCallback(() => {
    getBlogsApi()
  }, [])

  const setBlogData = useCallback(
    (bloglist: BlogItemType[]) => {
      dispatchBlog(setBlogList(bloglist))
    },
    [dispatchBlog],
  )

  return [{ getBlogData, setBlogData }]
}
