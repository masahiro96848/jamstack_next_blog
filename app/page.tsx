import React, { useEffect } from 'react'
import { NextPage, GetStaticProps } from 'next'
import { TopTemplate } from '@/components/templates/TopTemplate'
import { useSetData } from '@/hooks/useSetData'
import { getBlogsApi } from '@/apis/BlogApi'
import { BlogItemType } from '@/types/Blog'

import '@/styles/globals.scss'

const TopPage = async () => {
  return (
    /* @ts-expect-error Server Component */
    <TopTemplate />
  )
}
export default TopPage
