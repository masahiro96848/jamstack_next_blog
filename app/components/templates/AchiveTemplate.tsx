/**
 * templates/ArchiveTemplate
 * @package components
 */
import React from 'react'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { BlogList } from '../layouts/Main/BlogList'
/* apis */
import { getBlogsContainArchiveMonthApi } from '@/apis/BlogApi'
/* context */
import { BlogContextProvider } from '@/contexts/BlogContext'

/**
 * Props
 */
type Props = {
  date: string
  // breadName: string
}

/**
 * ArchiveTemplate
 *
 */
export const ArchiveTemplate: React.FC<Props> = (props: Props) => {
  // const archiveData = await getBlogsContainArchiveMonthApi()
  return <></>
}
