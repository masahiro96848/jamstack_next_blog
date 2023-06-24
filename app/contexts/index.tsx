/**
 * contexts
 * @package Contexts
 */
import React from 'react'
/* contexts */
import { BlogContextProvider } from '@/contexts/BlogContext'

/**
 * props
 */
type Props = {
  children: React.ReactNode
}

/**
 * RootContextProvider
 * @param props Props
 * @returns
 */
export const RootContextProvider: React.FC<Props> = ({ children }: Props) => {
  return <></>

  // <BlogContextProvider>{children}</BlogContextProvider>
}
