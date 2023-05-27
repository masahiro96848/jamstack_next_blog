import React from 'react'

import { AsideLayout } from '@/components/layouts/Aside/AsideIndex'
import { BaseLayout } from '@/components/layouts/Main/BaseLayout'
import styles from '@/styles/layouts/modules/baseBlogPostLayout.module.scss'

type Props = {
  children: React.ReactNode
}
export const BaseBlogPostLayout = (props: Props) => {
  const { children } = props
  return (
    <>
      <div>
        <BaseLayout>
          <article>{children}</article>
          <AsideLayout />
        </BaseLayout>
      </div>
    </>
  )
}
