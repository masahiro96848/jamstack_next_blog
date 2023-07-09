/**
 * layouts/Main/BaseLayout
 * @package Components
 */

import React from 'react'
/* components */
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components//layouts/Footer'
import { BreadcrumbList } from '@/components/layouts/Main/BreadcrumbList'
/* styles */
import styles from '@/styles/modules/baseLayout.module.scss'

/**
 * Props
 */
export type Props = {
  children: React.ReactNode
  breadName?: string
}

/**
 * BaseLayout
 * @param {Props} props
 * @returns
 */
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
