'use client'
import React from 'react'
import { BlogStateContext } from './BlogContext'
import { BlogItemType } from '@/types/Blog'

type Props = {
  children: React.ReactNode
  blogList: BlogItemType[]
}

export const BlogContextProvider = ({ children, blogList }: Props) => {
  return (
    <BlogStateContext.Provider value={{ blogList }}>
      {children}
    </BlogStateContext.Provider>
  )
}
