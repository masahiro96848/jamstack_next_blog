import { NextPage } from 'next'
import { TopTemplate } from '@/components/templates/TopTemplate'

import { BlogItemType } from '@/types/Blog'
import '@/styles/globals.scss'

const TopPage = () => {
  return (
    /* @ts-expect-error Server Component */
    <TopTemplate />
  )
}

export default TopPage
