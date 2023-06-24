'use client'
import React, { Dispatch, useReducer } from 'react'

/** types */
import { BlogItemType } from '@/types/Blog'
/** utils */
import { initBlogPost } from '@/config/initState'

// ----- State -----
export type BlogStateType = {
  blogList: BlogItemType[]
}

const initState: Readonly<BlogStateType> = {
  blogList: [],
}

// ----- Actions -----
const ActionType = {
  SET: 'BLOG:SET_BLOG',
}

export const setBlogList = (blogList: BlogItemType[]) => ({
  type: ActionType.SET,
  payload: {
    blogList,
  },
})

type BlogActionType = ReturnType<typeof setBlogList>

// ----- Reducer -----
const BlogReducer = (state: BlogStateType, action: BlogActionType) => {
  switch (action.type) {
    case ActionType.SET:
      return {
        ...state,
        blogList: action.payload.blogList,
      }
    default:
      throw new Error('Invalid Action Type.')
  }
}

// ----- Context -----
type BlogDispatchType = Dispatch<BlogActionType>

export const BlogStateContext = React.createContext<BlogStateType>(initState)
const BlogDispatchContext = React.createContext<BlogDispatchType>(() => {
  // throw new Error('Context not provided.')
})

// ----- ContextProviderType -----
type Props = {
  children: React.ReactNode
}

export const BlogContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(BlogReducer, initState)

  return (
    <BlogDispatchContext.Provider value={dispatch}>
      <BlogStateContext.Provider value={state}>
        {children}
      </BlogStateContext.Provider>
    </BlogDispatchContext.Provider>
  )
}

export const useBlogState = () => React.useContext(BlogStateContext)

export const useBlogDispatch = () => React.useContext(BlogDispatchContext)
