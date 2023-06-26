/**
 * ブログ記事一覧ページ
 */

import React, { useEffect } from 'react'
/* components */
import { TopTemplate } from '@/components/templates/TopTemplate'
/* styles */
import '@/styles/globals.scss'

const TopPage = async () => {
  return (
    /* @ts-expect-error Server Component */
    <TopTemplate />
  )
}
export default TopPage
