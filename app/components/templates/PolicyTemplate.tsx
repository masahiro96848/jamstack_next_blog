/**
 * templates/PolicyTemplate
 * @package Component
 */
import React from 'react'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
/* styles */
import styles from '@/styles/templates/policyTemplate.module.scss'

export const PolicyTemplate: React.FC = async () => {
  return (
    <BaseBlogPostLayout breadName="免責事項・プライバシーポリシー">
      {/* ページタイトル */}
    </BaseBlogPostLayout>
  )
}
