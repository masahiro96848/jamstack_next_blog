/**
 * layouts/main/BaseLayout.tsx
 * @package component
 */

import React from 'react'
import { Footer } from '@/components//layouts/Footer'
import { BreadcrumbList } from '@/components/layouts/Main/BreadcrumbList'
import { Header } from '@/components/layouts/Header'
import styles from '@/styles/modules/baseLayout.module.scss'

/**
 * Props
 */
export type Props = {
  children: React.ReactNode
  breadName?: string
}

export const BaseLayout: React.FC<Props> = (props: Props) => {
  /* props */
  const { children, breadName } = props
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.breadcrumb}>
          {!!breadName && <BreadcrumbList breadName={breadName} />}
        </div>
        <div className={styles.main}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  )
}
