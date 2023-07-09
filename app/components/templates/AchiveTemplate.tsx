/**
 * templates/ArchiveTemplate
 * @package Components
 */
import React from 'react'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { BlogList } from '../layouts/Main/BlogList'
/* apis */
import { getBlogsContainArchiveMonthApi } from '@/apis/BlogApi'
/* service */
import { getBlogTargetMonthService } from '@/service/BlogService'
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
export const ArchiveTemplate: React.FC<Props> = async (props: Props) => {
  // const blogData = await getBlogTargetMonthService()
  // const archiveData = await getBlogsContainArchiveMonthApi()
  return <></>
}
