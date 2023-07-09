/**
 * templates/Error404
 * @package Components
 */
import React from 'react'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
/* styles */
import styles from '@/styles/templates/error404Template.module.scss'

/**
 * Error404Template
 * @returns
 */
export const Error404Template: React.FC = async () => {
  return (
    <BaseBlogPostLayout breadName="">
      <div className={styles.error}>
        <div className={styles.title}>
          <h1>Not Found</h1>
          <h2>お探しのページは見つかりませんでした。</h2>
        </div>
      </div>
    </BaseBlogPostLayout>
  )
}
