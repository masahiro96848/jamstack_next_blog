import React from 'react'

import { AsideLayout } from '@/components/layouts/Aside/AsideLayout'
import { BaseLayout } from '@/components/layouts/Main/BaseLayout'
import styles from '@/styles/modules/baseBlogPostLayout.module.scss'

type Props = {
  children: React.ReactNode
}
export const BaseBlogPostLayout = (props: Props) => {
  const { children } = props
  return (
    <>
      <div>
        <BaseLayout>
          <article className={styles.article}>{children}</article>
          <div className={styles.article}>
            <AsideLayout />
          </div>
        </BaseLayout>
      </div>
    </>
  )
}
