/**
 * layouts/main/BaseBlogPostLayout
 * @package component
 */
import React from 'react'
/* components */
import { AsideLayout } from '@/components/layouts/Aside/AsideLayout'
import { BaseLayout } from '@/components/layouts/Main/BaseLayout'
/* styles */
import styles from '@/styles/modules/baseBlogPostLayout.module.scss'

type Props = {
  children: React.ReactNode
  breadName: string
}

/**
 * BaseBlogPostLayout
 * @param {Props} props
 * @returns
 */
export const BaseBlogPostLayout: React.FC<Props> = (props: Props) => {
  /* props */
  const { children, breadName } = props
  return (
    <>
      <div>
        <BaseLayout breadName={breadName}>
          <article className={styles.article}>{children}</article>
          <div className={styles.article}>
            <AsideLayout />
          </div>
        </BaseLayout>
      </div>
    </>
  )
}
